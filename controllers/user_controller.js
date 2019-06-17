const UserModel = require("./../database/models/user_model");
const moment = require("moment");

async function index(req, res) {
  let users = await UserModel.find();
  res.render("user/index", {users});
}

async function create(req, res) {
  let { name, dob } = req.body;
  let user = await UserModel.create({ name, dob })
    .then( () => {
      console.log("Created user")
    })
    .catch(err => res.status(500).send(err));
  res.redirect("/user");
}

async function make(req, res) {
  res.render("user/make");
}

async function show(req, res) {
  let { id } = req.params;
  let user = await UserModel.findById(id);
  let age = moment().diff(user.dob, "years");
  res.render(`user/show`, {user, age});
}

async function edit(req, res) {
  let { id } = req.params;
  let user = await UserModel.findById(id);
  res.render("user/edit", { user });
}

async function update(req, res) {
  let { id } = req.params;
  let { name, dob } = req.body;
  let user = await UserModel.updateOne({ "_id": id}, { name, dob });
  res.redirect(`/user/${id}`);
}

async function destroy(req, res) {
  let { id } = req.params;
  await UserModel.findByIdAndRemove(id);
  res.redirect("/user");
}

module.exports = {
  index,
  create,
  make,
  show,
  edit,
  update,
  destroy
}