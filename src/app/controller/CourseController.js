const Course = require("../model/course");
const Subject = require("../model/subject");
class CourseController {
  // GET [route courses] /courses
  // courses(req, res, next) {
  //   Course.find()
  //     .lean()
  //     .then((courses) => res.render("courses", { courses }))
  //     .catch(next);
  // }

  //GET [route courses register] /courses/register/:class
  register(req, res, next) {
    Course.findOne({ class: req.params.class })
      .lean()
      .then((course) => res.render("courses/register", { course }))
      .catch(next);
    console.log(req.params.class);

    //res.render("courses/register");
  }

  //PUT [route courses registers] /courses/:class
  registers(req, res, next) {
    const student = {
      fullname: req.body.fullname,
      dateofbirth: req.body.dateofbirth,
      gender: req.body.gender,
      phone: req.body.phone,
      email: req.body.email,
      fee: req.body.fee,
    };
    Course.updateOne(
      { class: req.params.class },
      { $push: { students: student } }
    )
      .then(() => res.render("courses/registerSuccess", { student }))
      .catch(next);
    //res.json(req.body);
  }

  //GET [route courses register success] /courses/:class/registerSuccess
  registerSuccess(req, res, next) {
    res.render("courses/registerSuccess");
  }
}

module.exports = new CourseController();
