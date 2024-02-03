import { createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  let [count, updateCount] = useState(0);
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Button
        onClick={() => {
          updateCount(count + 1);
        }}
      >
        {count}
      </Button>
    </div>
  );
}
