const Subject = require("../model/subject");
class SiteController {
  // GET- [route home] /
  home(req, res, next) {
    //res.render("home");
    Subject.find()
      .lean()
      .then((subject) => res.render("home", { subject }))
      .catch(next);
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
