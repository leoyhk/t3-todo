import { Todo } from "../const";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Todo>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },

  {
    accessorKey: "title",
    header: "Todo",
  },
  {
    id: "createdAt",
    header: "Created",
    accessorFn: (row) => row.createdAt,
  },
  {
    accessorKey: "remarks",
    header: "Remarks",
  },
];
