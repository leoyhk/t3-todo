import { z } from "zod";
import { RouterOutputs } from "~/trpc/react";

export type Todo = RouterOutputs["todo"]["all"][number];

export const todoFormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
});
