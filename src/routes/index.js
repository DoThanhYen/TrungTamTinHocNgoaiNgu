const siteRoute = require("./site");
const courseRoute = require("./course");
const subject = require("./subject");
const newsRoute = require("./new");
const contactRoute = require("./contact");

function route(app) {
  app.use("/", siteRoute);

  app.use("/courses", courseRoute);

  app.use("/subjects", subject);

  app.use("/news", newsRoute);

  app.use("/contact", contactRoute);
}
module.exports = route;
