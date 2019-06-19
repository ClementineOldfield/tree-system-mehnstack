function login(req, res){
  res.render("sessions/login");
}

function createSession(req, res){

}

module.exports = {
  login, 
  createSession
}