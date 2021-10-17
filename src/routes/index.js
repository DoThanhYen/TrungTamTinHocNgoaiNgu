const siteRoute = require("./site");
const courseRoute = require("./course");

function route(app) {
  app.use("/", siteRoute);

  app.use("/courses", courseRoute);

  //   app.get("/courses/create", (req, res) => {
  //     return res.send("Đăng ký Khóa học");
  //   });
}
module.exports = route;
