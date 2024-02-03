import { createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  let [count, updateCount] = useState(0);
  return (
    <div className="p-2 flex min-h-screen items-center justify-center">
      <main className="flex items-center justify-center flex-col gap-4">
        <p className="text-6xl font-bold gradient-text italic bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Цифровой гулаг для студентов
        </p>
        <Button
          onClick={() => {
            updateCount(count + 1);
          }}
        >
          Кнопка {count}
        </Button>
      </main>
    </div>
  );
}
