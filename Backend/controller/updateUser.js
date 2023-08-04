const User = require("../models/User");

exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, title, department, role } = req.body;

    if (!name || !email || !title || !role || !department) {
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }

    const userUpdate = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        title,
        department,
        role,
      },
      { new: true } 
    );

    if (!userUpdate) {
      return res.status(404).json({
        status: 404,
        message: "User not found",
      });
    }

    return res.status(200).json({
      status: 200,
      message: "User updated successfully",
      data: userUpdate,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
