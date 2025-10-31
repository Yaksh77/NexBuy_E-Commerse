import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(400).json({ message: "Not authorized login again" });
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!verifyToken) {
      return res
        .status(400)
        .json({ message: "Not authorized login again, Invalid token" });
    }

    req.adminEmail = process.env.ADMIN_EMAIL;
    next();
  } catch (error) {
    console.log("Admin auth error: ", error);
    return res.status(500).json({ message: `Admin auth error: ${error}` });
  }
};
export default adminAuth;
