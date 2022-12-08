import User from "../model/userSchema.js";

export const userSignup = async (req, res) => {
  try {
    const userExist = await User.findOne({ username: req.body.username });

    if (userExist) {
      return res.status(401).json({ message: `Usernamer ${req.body.username} alredy exist` });
    }

    const user = req.body;

    const newUser = new User(user);

    await newUser.save();

    res.status(200).json({ message: user, success });
  } catch (error) {
    console.log("Errora t backend SignupAPI Route", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const userExist = await User.findOne({ username: username, password: password });

    if (userExist) {
      return res.status(200).json({data:userExist});
    }else{

        return res.status(401).json("Invalid Login")
    }
  } catch (error) {
    console.log('error:', error.message)

    res.status(500).json("Login API Error",error.message)

  }
};
