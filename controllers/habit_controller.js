const UserModel = require("./../database/models/user_model");

async function create(req, res) {
  let { id } = req.params;
  let { category } = req.body;

  let book = await UserModel.findById(id);
  book.comments.push({ category });

  await book.save();

  res.redirect(`/user/${id}`);
}

module.exports = {
  create
}