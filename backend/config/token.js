import jwt from "jsonwebtoken";

export const genToken = async (userId) => {
  try {
    let token = await jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return token;
  } catch (error) {
    console.log(error);
  }
};

export const genTokenAdmin = async (email) => {
  try {
    let token = await jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return token;
  } catch (error) {
    console.log("Admin token error: ", error);
  }
};
