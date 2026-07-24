import { Router } from "express";
import { Role } from "../../../generated/prisma/enums";
import { auth } from "../../middlewares/auth";
import { subscriptionGuard } from "../../middlewares/premiumGuard";
import { premiumController } from "./premium.controller";

const router = Router();

router.get(
  "/",
  auth(Role.ADMIN, Role.AUTHOR, Role.USER),
  subscriptionGuard(),
  premiumController.getPremiumContent,
);

export const premiumRoutes = router;
