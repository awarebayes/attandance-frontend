import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/teacher')({
  component: () => <div>Hello /teacher!</div>
})