import { Router } from "express";
const router = Router();
import {
    validateIdParam,
    validateJobInput,
} from "../middleware/validationMiddleware.js";
import {
    getALlJobs,
    getSingleJob,
    createJob,
    editJob,
    deleteJob,
    showStats
} from "../controllers/jobController.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

router.route("/").get(getALlJobs).post(checkForTestUser,validateJobInput, createJob);
router.route("/stats").get(showStats);
router
    .route("/:id")
    .get(validateIdParam, getSingleJob)
    .patch(checkForTestUser,validateJobInput, validateIdParam, editJob)
    .delete(checkForTestUser,validateIdParam, deleteJob);

export default router;
