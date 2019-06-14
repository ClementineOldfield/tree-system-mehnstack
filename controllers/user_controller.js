async function index(req, res) {
  res.render("user/index");
}

async function show(req, res) {
  let { id } = req.params;
}

module.exports = {
  index
}