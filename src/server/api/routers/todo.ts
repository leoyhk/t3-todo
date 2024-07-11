import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const todoRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    const todos = await ctx.db.todo.findFirst({
      orderBy: {
        updatedAt: "desc",
      },
    });
    return todos;
  }),
});