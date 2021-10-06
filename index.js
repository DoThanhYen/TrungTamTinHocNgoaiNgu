const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  return res.send("Trang chủ");
});

app.get("/courses", (req, res) => {
  return res.send("Khóa học");
});

app.get("/courses/create", (req, res) => {
  return res.send("Đăng ký Khóa học");
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
