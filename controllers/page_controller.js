async function index(req, res) {
  res.render("page/index");
}

function dashboard(req, res) {
  // const email = req.user.email;
  console.log("loaded dashboard");
  // res.render("pages/dashboard", { email });
  res.render("page/dashboard");
}

module.exports = {
  index,
  dashboard
}