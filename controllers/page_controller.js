async function index(req, res) {
  res.render("pages/index");
}

function dashboard(req, res) {
  const { name, _id } = req.user;
  console.log("loaded dashboard");
  res.render("pages/dashboard", { name, _id });
}

module.exports = {
  index,
  dashboard
}