"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Todo, todoFormSchema } from "./const";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "~/trpc/react";
import toast from "react-hot-toast";
import { Spinner } from "~/components/spinner";
import { TodoEditForm } from "./form/TodoEditForm";

type Props = { todo: Todo };
export function TodoEditDialog(props: Props) {
  const { todo } = props;
  const utils = api.useUtils();
  const { mutate: editTodo, isPending } = api.todo.edit.useMutation({
    onSuccess: () => {
      utils.todo.invalidate();
      toast.success("Successfully edited todo.");
      setOpen(false);
    },
    onError: () => {
      toast.error("Action failed, please try again later.");
    },
  });
  const form = useForm<Todo>({
    defaultValues: { title: todo.title },
    resolver: zodResolver(todoFormSchema),
  });
  const [open, setOpen] = useState(false);

  const onSubmit = () => {
    form.trigger();
    if (form.formState.isValid) {
      const formInputs = form.getValues();
      const editInputs = {
        ...formInputs,
        id: todo.id,
        remarks: formInputs.remarks ?? "",
      };
      editTodo(editInputs);
      form.reset({ title: "" });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button className="w-full bg-blue-700">Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col space-y-4">
          <DialogTitle className="text-center">Edit Todo</DialogTitle>
          <TodoEditForm form={form} />
        </div>
        <Button
          onClick={onSubmit}
          disabled={!(form.formState.isDirty && form.formState.isValid)}
        >
          {isPending ? <Spinner /> : "Submit"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
