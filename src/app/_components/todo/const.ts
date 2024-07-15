import { z } from "zod";

export type Todo = {
  title: string;
};

export const todoFormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
});
