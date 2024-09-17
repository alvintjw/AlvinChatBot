import { body, validationResult } from "express-validator";
const validate = (validations) => {
    return async (req, res, next) => {
        // Run all validations, do not break on failure
        await Promise.all(validations.map((validation) => validation.run(req)));
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        res.status(422).json({ errors: errors.array() });
    };
};
const loginValidator = [
    body("email").trim().isEmail().withMessage("Invalid email"),
    body("password")
        .trim()
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),
];
const signupValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    ...loginValidator,
];
export { validate, signupValidator, loginValidator };
//# sourceMappingURL=validators.js.map