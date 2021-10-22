const Course = require("../model/course");
const Subject = require("../model/subject");
class CourseController {
  //GET [route courses] /subjects
  subject(req, res, next) {
    Subject.find()
      .lean()
      .then((subject) => res.render("subject", { subject }))
      .catch(next);
  }

  //GET [route courses] /subject/:id
  show(req, res, next) {
    Course.find({ subject_id: req.params._id })
      .lean()
      .then((courses) => res.render("courses", { courses }))
      .catch(next);
  }
}

module.exports = new CourseController();
