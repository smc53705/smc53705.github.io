import { useRouteContext } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useSignOut } from "../api/auth.api";

export function Navbar() {
  const { user } = useRouteContext({ from: "__root__" });
  const signOut = useSignOut();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "1rem",
        gap: "1rem",
      }}
    >
      {user ? (
        <>
          <span>{user.email}</span>
          <button onClick={() => signOut.mutate()}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}
