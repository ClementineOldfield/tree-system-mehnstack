const UserModel = require("./../database/models/user_model");

function login(req, res){
  res.render("sessions/login");
}

function logout(req, res) {
  req.logout();
  res.redirect("/");
}

module.exports = {
  login, 
  logout
}