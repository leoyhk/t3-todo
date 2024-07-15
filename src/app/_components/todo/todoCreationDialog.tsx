"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { TodoCreationForm } from "./todoCreationForm";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Todo, todoFormSchema } from "./const";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "~/trpc/react";
import toast from "react-hot-toast";

type Props = {};
export function TodoCreationDialog(props: Props) {
  const utils = api.useUtils();
  const { mutate: createTodo } = api.todo.add.useMutation({
    onSuccess: () => {
      utils.todo.invalidate();
      toast.success("yeah");
    },
  });
  const form = useForm({
    resolver: zodResolver(todoFormSchema),
  });
  const [open, setOpen] = useState(false);

  const onSubmit = () => {
    form.trigger();
    if (form.formState.isValid) {
      const formInputs = form.getValues() as Todo;
      createTodo(formInputs);
      // @todo reset after query
      form.reset({ title: "" });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>Add Todo</DialogTrigger>
      <DialogContent>
        <div className="flex flex-col space-y-4">
          <DialogTitle className="text-center">Create a Dialog</DialogTitle>
          <TodoCreationForm form={form} />
        </div>
        <Button
          onClick={onSubmit}
          disabled={!(form.formState.isDirty && form.formState.isValid)}
        >
          Submit
        </Button>
      </DialogContent>
    </Dialog>
  );
}
