import { Todo } from "../const";
import { ColumnDef } from "@tanstack/react-table";
import TimeAgo from "react-timeago";
import { TodoEditDialog } from "../TodoEditDialog";

export const columns: ColumnDef<Todo>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {},
  },

  {
    accessorKey: "title",
    header: "Todo",
  },
  {
    accessorKey: "createdAt",
    header: "Created",
    cell: ({ row }) => {
      //Prevent row.getValue from getting unknown types https://github.com/TanStack/table/issues/4142#issuecomment-1183641478
      return <TimeAgo date={row.getValue<Date>("createdAt")} locale="en-US" />;
    },
  },
  {
    accessorKey: "remarks",
    header: "Remarks",
  },
  {
    accessorKey: "Action",
    header: "Action",
    cell: ({ row }) => {
      return <TodoEditDialog todo={row.original} />;
    },
  },
];
