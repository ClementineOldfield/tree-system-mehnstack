const UserModel = require("./../database/models/user_model");
const moment = require("moment");

async function create(req, res) {
  let { id } = req.params;
  let { name, category } = req.body;

  let user = await UserModel.findById(id);
  user.habits.push({ name, category });

  await user.save();

  res.redirect(`/user/${id}`);
}

async function edit(req, res) {
  let { id } = req.params;

  let user = await UserModel.findById(id);

  res.render("habits/edit", {user});
}

function daily(req, res) {
  let date = req.query.date ? req.query.date : moment().toISOString();
  let dateFormat = moment(date).format("MMMM Do YYYY");
  let yesterday = moment(date).subtract(1, "day").toISOString();
  let tomorrow = moment(date).add(1, "day").toISOString();
  let isNotToday = moment().isSame(moment(date), "day") ? false : true;

  res.render("habits/daily", {date, dateFormat, yesterday, tomorrow, isNotToday});
}

module.exports = {
  create,
  edit,
  daily
}