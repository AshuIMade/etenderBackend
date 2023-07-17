const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const db = require('../models');
const User = db.users;

//user apis
//1.create user api
const addUser = async (req, res) => {
    const { name, JobTitle, vendorName, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }
    // Check if user exists
    const userExists = await User.findOne({ where: { email: email } });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Create user
    const reg = {
        name,
        email,
        password: hashedPassword
    }
    const user = await User.create(reg);
    if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
    //res.status(200).send(user);
   // console.log(user);
}
//user apis
//1.login user api
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  // Check for user email
  const user = await User.findOne({ where: { email: email } });
 
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400);//.json({messages:"invalid credensials"})
    throw new Error('Invalid credentials')
  }
   
}
//2. get all users
const getAllUsers = async (req, res) => {
    let users = await User.findAll({});
    res.status(200).send(users);
}
//3. get one user
const getOneUser = async (req, res) => {
    let id = req.params.id;
    let user = await User.findOne({ where: { id: id } });
    res.status(200).send(user);

} 
//4. update user
const updateUser = async (req, res) => {
    let id = req.params.id;
    let user = await User.update(req.body, { where: { id: id } });
    res.status(200).send(user);
}
//5. delete user
const deleteUser = async (req, res) => {
    let id = req.params.id;
    let user = await User.destroy({ where: { id: id } });
    res.status(200).send(`user is deleted!`);
}
// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}
module.exports = {
  addUser,
  loginUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser
}