const moment = require("moment");

async function index(req, res) {
  res.render("pages/index");
}

function dashboard(req, res) {
  const { name, _id } = req.user;
  let date = req.params.date ? req.params.date : moment();
  let dateFormat = moment(date).format("MMMM Do YY");

  res.render("pages/dashboard", { name, _id, date, dateFormat });
}

module.exports = {
  index,
  dashboard
}