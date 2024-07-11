"use client";

import { Todo } from "./const";
import { TodoItem } from "./todoItem";

type Props = {
  todos: Todo[];
};
export function TodoList(props: Props) {
  const { todos } = props;
  return (
    <div className="h-24 w-full max-w-xs">
      {todos.length > 0 ? (
        todos.map((todo: Todo) => {
          return <TodoItem title={todo.title} />;
        })
      ) : (
        <div className="h-24 bg-black">No Todos Yet!</div>
      )}
      {/* {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPost.mutate({ name });
        }}
        className="flex flex-col gap-2"
      >
        <input
          type="text"
          placeholder="Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-full px-4 py-2 text-black"
        />
        <button
          type="submit"
          className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
          disabled={createPost.isPending}
        >
          {createPost.isPending ? "Submitting..." : "Submit"}
        </button>
      </form>*/}
    </div>
  );
}
