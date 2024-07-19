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
          title,
        },
      });
      return addedTodo;
    }),
  edit: publicProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string(),
        completeStatus: z.boolean().optional(),
        remarks: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { title, completeStatus, remarks, id } = input;

      const editedTodo = await ctx.db.todo.update({
        where: {
          id,
        },
        data: {
          title: title,
          completeStatus,
        },
      });
      return editedTodo;
    }),
  delete: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { id } = input;

      const deletedTodo = await ctx.db.todo.delete({
        where: {
          id,
        },
      });
      return deletedTodo;
    }),
});
