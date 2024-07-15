import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const todoRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    const todos = await ctx.db.todo.findMany({
      orderBy: {
        updatedAt: "desc",
      },
    });
    return todos;
  }),
  add: publicProcedure
    .input(
      z.object({
        title: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { title } = input;
      const addedTodo = await ctx.db.todo.create({
        data: {
          title: title,
        },
      });
      return addedTodo;
    }),
});
