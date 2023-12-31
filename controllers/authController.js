import { StatusCodes } from "http-status-codes";
import UserModel from "../models/UserModel.js";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { UnauthenticatedError } from "../errors/customErrors.js";
import { createJwt } from "../utils/tokenUtils.js";

export const register = async (req, res) => {
    const isFirstAccount = (await UserModel.countDocuments()) === 0;
    req.body.role = isFirstAccount ? "admin" : "user";

    const hashedPassword = await hashPassword(req.body.password);
    req.body.password = hashedPassword;

    const user = await UserModel.create(req.body);
    res.status(StatusCodes.CREATED).json({ msg: "user created" });
};

export const login = async (req, res) => {
    const user = await UserModel.findOne({ email: req.body.email });

    const isValidUser =
        user && (await comparePassword(req.body.password, user.password));

    if (!isValidUser) throw new UnauthenticatedError("Invalid Credentials");

    const token = createJwt({ userId: user._id, role: user.role });

    const oneDay = 1000 * 60 * 60 * 24;
    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        // secure: process.env.NODE_ENV === "develop",
    });
    res.status(StatusCodes.OK).json({ msg: "user is logged in" });
};

export const logout = (req, res) => {
    res.cookie("token", "logout", {
        httpOnly: true,
        expires: new Date(Date.now()),
    });
    res.status(StatusCodes.OK).json({ msg: "user logged out" });
};
