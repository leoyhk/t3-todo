"use client";
import { api } from "~/trpc/react";
import { TodoCreationDialog } from "./dialog/TodoCreationDialog";
import { columns } from "./table/columns";
import { DataTable } from "~/components/ui/data-table";

type Props = {};
export function TodoSection(props: Props) {
  //@todo change to infinite query
  const { data: todos, isLoading: listLoading } = api.todo.all.useQuery();
  const todoListContent = () => {
    if (listLoading) {
      return <div>Loading...</div>;
    }

    if (!todos) {
      return <div>Error</div>;
    }
    return <DataTable columns={columns} data={todos} />;
  };
  return (
    <div className="flex w-full max-w-4xl flex-col">
      {/* Todo Creation */}
      <TodoCreationDialog />
      {/* Todo List */}
      {todoListContent()}
    </div>
  );
}
