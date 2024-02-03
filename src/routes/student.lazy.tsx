import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/student")({
  component: () => <div>Hello /student!</div>,
});
