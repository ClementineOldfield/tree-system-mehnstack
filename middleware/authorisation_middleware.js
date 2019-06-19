function authRedirect(req, res, next) {
  console.log("\n\n");
  console.log(req.session);
  console.log("\n\n");
  if (req.user) {
    return res.redirect("/dashboard");
  }

  return next();
}

function authorise(req, res, next) {
  console.log("\n\n");
  console.log(req);
  console.log("\n\n");
  if (req.user) {
    return next();
  }

  return res.redirect("/");
}

module.exports = {
  authRedirect,
  authorise
}