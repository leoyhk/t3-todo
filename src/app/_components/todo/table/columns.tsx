import { Todo } from "../const";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Todo>[] = [
  {
    id: "createdAt",
    accessorFn: (row) => row.createdAt,
  },
  {
    accessorKey: "title",
    header: "Todo",
  },
];
