import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavMenu } from "@/components/ours/nav_menu";
const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: () => (
    <>
      <QueryClientProvider client={queryClient}>
        <NavMenu />
        <hr />
        <Outlet />
      </QueryClientProvider>
      <TanStackRouterDevtools />
    </>
  ),
});
