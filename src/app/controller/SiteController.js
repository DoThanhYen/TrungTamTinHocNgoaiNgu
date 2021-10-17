class SiteController {
  // GET- [route home] /
  home(req, res) {
    res.render("home");
  }

  //GET- [route contact] /contact
  contact(req, res) {
    res.render("contact");
  }

  //GET- [route instruction pays courses]
  payinstruction(req, res) {
    res.render("payInstruction");
  }
}
module.exports = new SiteController();
