import { Todo } from "../const";
import { ColumnDef } from "@tanstack/react-table";
import TimeAgo from "react-timeago";

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
    accessorKey: "createdAt",
    header: "Created",
    cell: ({ row }) => {
      return (
        <TimeAgo date={row.getValue("createdAt") as Date} locale="en-US" />
      );
    },
  },
  {
    accessorKey: "remarks",
    header: "Remarks",
  },
];
