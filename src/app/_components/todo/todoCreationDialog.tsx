"use client";

import { api } from "~/trpc/react";
import { TodoList } from "./todoList";

type Props = {};
export function TodoCreationDialog(props: Props) {
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
    <div className="w-full max-w-xs">
      {/* Todo Creation */}

      {/* Todo List */}
      {todoListContent()}
    </div>
  );
}
