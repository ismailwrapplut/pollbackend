import jwt from "jsonwebtoken";

export const verifyToken = (token) => {
  return jwt.verify(
    token,
    process.env.JWT_KEY || "dasdisk88",
    (err, decoded) => {
      if (err) {
        return false;
      } else {
        return decoded;
      }
    }
  );
};
