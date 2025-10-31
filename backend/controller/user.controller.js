import User from "../model/user.model.js";

export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log("Get current user error: ", error);
    return res
      .status(500)
      .json({ message: `Get current user error: ${error}` });
  }
};

export const getAdmin = async (req, res) => {
  try {
    const adminEmail = req.adminEmail;
    if (!adminEmail) {
      return res
        .status(500)
        .json({ message: `Get adminEmail error: ${error}` });
    }

    return res.status(200).json({
      email: adminEmail,
      role: "admin",
    });
  } catch (error) {
    console.log("Get admin error: ", error);
    return res.status(500).json({ message: `Get admin error: ${error}` });
  }
};
