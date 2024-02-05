import express from "express";
import { getMethod, enviarUrl, getUrl } from "../controllers/index.js";

const router = express.Router()

router.get("/", getMethod);
router.get("/:url", getUrl);
router.post("/", enviarUrl)

export default router