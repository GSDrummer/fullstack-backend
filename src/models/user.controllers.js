const { User } = require("./user.model");

exports.addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(200).send({ savedUser });
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  try {
    const user = User.findByCredentials(req.body.email, req.body.password);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ message: "Unable to log in" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = User.findOneAndUpdate(req.body.username, req.body.update, {
      new: true,
    });
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ message: "Unable to update" });
  }
};
