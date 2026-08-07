import { Router } from "express";

const router = Router();

// Mirrors src/app/api/auth/* — see that implementation for the
// canonical logic (hashing, JWT signing). Duplicate here only if
// you actually need this process to run independently of Next.js.
router.post("/register", (req, res) => {
  res.status(501).json({ error: "Not implemented — see src/app/api/auth/register/route.ts" });
});

router.post("/login", (req, res) => {
  res.status(501).json({ error: "Not implemented — see src/app/api/auth/login/route.ts" });
});

export default router;
