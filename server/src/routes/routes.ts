import express, { Router } from "express";
import { getdummyhandler, getv1dummyhandler } from "../controllers/handlers";
const app = express();
const router = Router();

router.route("/").get(getdummyhandler);
router.route("/v1").get(getv1dummyhandler);

export default router;
