const Guide = require("../models/guide");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const guideRegister = async (req, res) => {
  const {
    username,
    email,
    password,
    idType,
    idNumber,
    address,
    licenseType,
    licenseNumber,
    phoneNumber,
  } = req.body;

//   check if all fields are present
  if (
    !username ||
    !email ||
    !password ||
    !idType ||
    !idNumber ||
    !address ||
    !licenseType ||
    !licenseNumber ||
    !phoneNumber
  ) {
    return res.status(400).send("please provide all fields.");
  }

//   check if username/email is already in database
  const guideExists = await Guide.findOne({ email });
  if (guideExists) {
    return res.status(400).send("email already exists.");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  // create user
  const guide = await Guide.create({
    username,
    email,
    password: hashedPassword,
    idType,
    idNumber,
    address,
    licenseType,
    licenseNumber,
    phoneNumber,
  });

  // return response
  res.status(201).json({ guide });
};

const guideLogin = async (req, res) => {
  const { email, password } = req.body;

  // check if user is in the database
  let guide = await Guide.findOne({ email });
  if (!guide) {
    return res.status(400).send("invalid credentials.");
  }

  //compare passwords
  const isMatch = await bcrypt.compare(password, guide.password);
  if (!isMatch) {
    return res.status(400).send("invalid credentials.");
  }

  // generate token
  const token = jwt.sign({ id: guide._id }, "12345679", { expiresIn: "1h" });

  // return response
  res.status(200).json({ token });
};

const verifyGuideToken = (req, res, next) => {
  const token = req.headers;

  if (!token) {
    return res.status(401).json({ message: "Not Authorized" });
  }

  token = token.split(" ")[1];

  try {
    let guide = jwt.verify(token, "12345679");
    console.log(guide);
    return next();
  } catch (error) {
    res.status(401).json({ message: "invalid token." });
  }

  next();
};

module.exports = {
  guideRegister,
  guideLogin,
  verifyGuideToken,
};
