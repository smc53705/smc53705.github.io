import {
  createRootRouteWithContext,
  Outlet,
  redirect,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { User } from "@supabase/supabase-js";
import logo from "../assets/react.svg";
import { Navbar } from "../components/Navbar";

interface RouterContext {
  user: User | null;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  beforeLoad: ({ context, location }) => {
    if (!context.user && location.pathname !== "/login") {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: function RootComponent() {
    return (
      <>
        <Navbar />
        <div>
          Company Logo <img src={logo} />
        </div>
        <Outlet />
        <TanStackRouterDevtools />
      </>
    );
  },
});
