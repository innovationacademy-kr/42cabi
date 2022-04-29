import jwt from "jsonwebtoken"

type jwtSecret = {
  secretKey: string,
  options: jwt.SignOptions,
}

export const secret: jwtSecret = {
  secretKey: 'SecretKey',
  options: {
    algorithm: "HS256",
    expiresIn: "30m",
    issuer: "42cabi"
  }
}