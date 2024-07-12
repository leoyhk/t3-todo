"use client";

import { api } from "~/trpc/react";
import { TodoList } from "./todoList";
import { TodoCreationDialog } from "./todoCreationDialog";

type Props = {};
export function TodoSection(props: Props) {
  //@todo change to infinite query
  const { data: todos = [], isLoading: listLoading } = api.todo.all.useQuery();
  const todoListContent = () => {
    if (listLoading) {
      return <div>Loading...</div>;
    }

    if (!todos) {
      return <div>Error</div>;
    }
    return <TodoList todos={todos} />;
  };
  return (
    <div className="flex w-full max-w-xs flex-col">
      {/* Todo Creation */}
      <TodoCreationDialog />
      {/* Todo List */}
      {todoListContent()}
    </div>
  );
}
