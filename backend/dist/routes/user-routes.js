import { Router } from "express";
import { getAllUsers, userLogin, userSignup, } from "../controllers/user-controller.js";
import { loginValidator, signupValidator, validate, } from "../utils/validators.js";
const userRoutes = Router();
userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);
userRoutes.get("/login", validate(loginValidator), userLogin);
export default userRoutes;
//# sourceMappingURL=user-routes.js.map