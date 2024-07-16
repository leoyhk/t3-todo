import { z } from "zod";

export type Todo = {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
};

export const todoFormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
});
