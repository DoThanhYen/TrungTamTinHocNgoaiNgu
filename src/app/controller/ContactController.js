const Contact = require("../model/contact");
class CourseController {
  //GET [route contact] /contact
  create(req, res, next) {
    res.render("contact");
  }
  //POST [route contact] /contact
  contact(req, res, next) {
    const contact = new Contact(req.body);
    contact.save();
    res.render("contact");
  }
}

module.exports = new CourseController();
