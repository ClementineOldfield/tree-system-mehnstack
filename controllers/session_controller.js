const UserModel = require("./../database/models/user_model");

function login(req, res){
  res.render("sessions/login");
}

async function createSession(req, res){
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.render("sessions/login", { error: "Invalid email & password" });
  }

  const valid = await user.verifyPassword(password);

  if (!valid) {
    return res.render("sessions/login", { error: "Invalid email & password" });
  }

  req.session.user = user;
  res.redirect("/dashboard");
}

function logout(req, res) {
  req.logout();
  res.redirect("/");
}

module.exports = {
  login, 
  createSession,
  logout
}