const UserModel = require("./../database/models/user_model");

async function index(req, res) {
  let users = await UserModel.find();
  res.render("user/index", {users});
}

async function create(req, res) {
  let { name, dob } = req.body;
  let user = await UserModel.create({ name, dob })
    .catch(err => res.status(500).send(err));
  res.redirect("/user/:id");
}

async function make(req, res) {
  res.render("user/make");
}

async function show(req, res) {
  let { id } = req.params;
  let user = await UserModel.findById(id);
  res.render(`user/show`, {user});
}

async function edit(req, res) {

}

async function update(req, res) {

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