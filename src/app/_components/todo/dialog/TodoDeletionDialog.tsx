"use client";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Todo } from "../const";
import { api } from "~/trpc/react";
import toast from "react-hot-toast";

type Props = { todo: Todo };
export function TodoDeletionDialog(props: Props) {
  const { todo } = props;
  const utils = api.useUtils();
  const { mutate: deleteTodo, isPending } = api.todo.delete.useMutation({
    onSuccess: () => {
      utils.todo.invalidate();
      toast.success("Successfully deleted todo.");
      setOpen(false);
    },
    onError: () => {
      toast.error("Action failed, please try again later.");
    },
  });

  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button className="w-full bg-blue-700">Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col space-y-4">
          <div>{`Are you sure you want to delete this todo?`}</div>
          <div>{`This action cannot be reverted.`}</div>
          <div className="flex space-x-4">
            <Button onClick={() => setOpen(false)} disabled={isPending}>
              Cancel
            </Button>
            <Button
              onClick={() => deleteTodo({ id: todo.id })}
              disabled={isPending}
            >
              Confirm
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
