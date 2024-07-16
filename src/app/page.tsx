import { HydrateClient } from "~/trpc/server";
import { TodoSection } from "./_components/todo/TodoSection";

export default async function Home() {
  // @todo add todo table, todo delete, todo edit (status)
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <TodoSection />
        </div>
      </main>
    </HydrateClient>
  );
}
