"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Todo } from "../const";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

type TableProps = {
  columns: ColumnDef<Todo>[];
  todos: Todo[];
};
export function TodoTable<TData, TValue>(props: TableProps) {
  const { columns, todos } = props;
  const table = useReactTable({
    data: todos,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="h-24 w-full max-w-xs">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHeader key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHeader>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No Todos Yet!
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
