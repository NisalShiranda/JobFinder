import express from 'express';
import { rateLimit } from 'express-rate-limit';
import { register } from "../controllers/authController.js";
import { signIn } from "../controllers/authController.js";


//IP rate limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
});

const router = express.Router();

// Register routes
router.post("/register", limiter, register);
router.post("/login", signIn);

export default router;


