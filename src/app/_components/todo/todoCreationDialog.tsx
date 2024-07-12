"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

type Props = {};
export function TodoCreationDialog(props: Props) {
  return (
    <Dialog>
      <DialogTrigger>Add Todo</DialogTrigger>
      <DialogContent>
        <div className="flex flex-col space-y-4">
          <DialogTitle className="text-center">Create a Dialog</DialogTitle>
        </div>
      </DialogContent>
    </Dialog>
  );
}
