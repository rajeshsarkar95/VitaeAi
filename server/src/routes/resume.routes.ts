import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(501).json({ error: "Not implemented — see src/app/api/resumes/route.ts" });
});

export default router;
