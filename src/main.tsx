import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./index.css";
import { GlobalProviders, AuthProvider } from "./providers";

const router = createRouter({
  routeTree,
  context: {
    user: undefined!,
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProviders>
      <AuthProvider>
        {(user) => <RouterProvider router={router} context={{ user }} />}
      </AuthProvider>
    </GlobalProviders>
  </React.StrictMode>
);
