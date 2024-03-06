const {User} = require("../models/user");
const zod = require("zod");
const jwt = require("jsonwebtoken");


const {hashPassword,comparePassword} = require('./hashPass')

const registerBody = zod.object({
  name: zod.string(),
  username: zod.string().email(),
  password: zod.string(),
});


const registerUser = async (req, res) => {
    try {
        console.log(" JWT_SECRET:",  process.env.JWT_SECRET);

      const { success} = registerBody.safeParse(req.body);
      if (!success) {
        return res.status(411).json({
          message: "Incorrect inputs",
        });
      }
  
      if (!req.body.username) {
        return res.status(411).json({
          message: "Username is required",
        });
      }
  
      const existingUser = await User.findOne({ username: req.body.username });
  
      if (existingUser) {
        return res.status(409).json({
          message: "Email already taken",
        });
      }
  
      const hash = await hashPassword(req.body.password);
      const user = await User.create({
        name: req.body.name,
        username: req.body.username,
        password: hash,
      });
      const userId = user._id;
      const token = jwt.sign({ userId },  process.env.JWT_SECRET);
      console.log(token);
      res.json({
        message: "User created successfully",
        token: token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in registration",
      });
    }
  };
  
const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

const loginUser = async (req, res) => {
  try {
    const { success } = signinBody.safeParse(req.body);
    if (!success) {
      return res.status(411).json({
        message: "Incorrect inputs",
      });
    }

    const user = await User.findOne({
      username: req.body.username,
    });
    if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }
    
    const valid = await comparePassword(req.body.password, user.password);
    if(!valid){
        return res.status(411).json({
            message: "Incorrect password"
        })
    }

    const userId = user._id;
    const token = jwt.sign({userId}, process.env.JWT_SECRET);
    console.log(token);
      res.json({
        message: "Login successfully",
        token: token,
      });

    
  } catch {
    res.status(411).json({
      message: "Error while logging in",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
