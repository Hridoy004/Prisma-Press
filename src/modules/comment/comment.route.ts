import { Router } from "express";
import { Role } from "../../../generated/prisma/enums";
import { auth } from "../../middlewares/auth";
import { commentController } from "./comment.controller";

const router = Router();

router.post(
  "/",
  auth(Role.USER, Role.ADMIN, Role.AUTHOR),
  commentController.createComment,
);

router.get("/author/:authorId", commentController.getCommentByAuthorId);

router.get("/:commentId", commentController.getCommentByCommentId);

router.patch(
  "/:commentId",
  auth(Role.USER, Role.ADMIN, Role.AUTHOR),
  commentController.updateComment,
);

export const commentRoutes = router;
