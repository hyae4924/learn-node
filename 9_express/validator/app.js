import express from "express";
import { body, param, validationResult } from "express-validator";

const app = express();
app.use(express.json());
const validate = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) return res.status(400).json({ message: error });
  next();
};

app.post(
  "/users",
  [
    body("name")
      .trim()
      .isLength({ min: 2, max: 10 })
      .withMessage("이름은 2글자이상 10글자이하로"),
    body("age").isInt().withMessage("숫자입력해주세요"),
    body("email")
      .isEmail()
      .withMessage("이메일 형식에 맞추세요")
      .normalizeEmail(),
    body("job.name").notEmpty().withMessage("직장이름을 입력해"),
  ],
  validate,
  (req, res, next) => {
    res.status(201);
  }
);

app.get(
  "/:email",
  param("email").isEmail().withMessage("이메일을 입력하세요"),
  validate,
  (req, res, next) => {
    res.json("💌");
  }
);

app.listen(8080);
