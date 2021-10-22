const Course = require("../model/course");
const Subject = require("../model/subject");
class NewController {
  //[GET] route /news
  show(req, res, next) {
    res.render("news");
  }
}

module.exports = new NewController();
