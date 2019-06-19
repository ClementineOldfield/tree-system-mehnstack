const UserModel = require("./../database/models/user_model");
const moment = require("moment");

async function index(req, res) {
  let users = await UserModel.find();
  res.render("user/index", {users});
}

async function create(req, res) {
  try {
    let { email, password, name, dob } = req.body;
    const user = await UserModel.create({ email, password, name, dob });

    req.login(user, (error) => {
      if (error) {
        console.log(`error = ${error}`)
        return next(error);
      }
      console.log(`created ${user}`);
      return res.redirect("/dashboard");
    });
  } catch(err) {
    console.log(err);
  }
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