import express from "express";


const router = express.Router();

import { create, update, remove, list, read } from "../controllers/category.js"
import { requireSignin, isAdmin } from "../middlewares/auth.js";

router.post("/category", requireSignin, isAdmin, create);
router.put("/category/:categoryId", requireSignin, isAdmin, update);
router.delete("/category/:categoryId", requireSignin, isAdmin, remove);
router.get("/categories", list);
router.get("/category/:slug", read);

export default router;