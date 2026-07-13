import { prisma } from "../../lib/prisma";
import { ICreatedPostPayload } from "./post.interface";

const createPost = async (payload: ICreatedPostPayload, userId: string) => {
  const result = await prisma.post.create({
    data: {
      ...payload,
      authorId: userId,
    },
  });
  return result;
};

const getAllPosts = async () => {
  const posts = await prisma.post.findMany({
    include: {
      author: {
        omit: {
          password: true,
        },
      },
      comments: true,
    },
  });
  return posts;
};

export const postService = {
  createPost,
  getAllPosts,
};
