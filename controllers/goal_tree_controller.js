const UserModel = require("./../database/models/user_model");

async function create(req, res) {
  let { id } = req.params;
  let { name, category } = req.body;

  let user = await UserModel.findById(id);
  user.goalTrees.push({ name, category });

  await user.save();

  res.redirect(`/user/${id}`);
}

async function edit(req, res) {
  let { id } = req.params;

  let user = await UserModel.findById(id);

  res.render("goal_trees/edit", {user});
}

module.exports = {
  create,
  edit
}