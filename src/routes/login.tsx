import {
  createFileRoute,
  redirect,
  useNavigate,
  useSearch,
} from "@tanstack/react-router";
import { useState } from "react";
import { useSignInWithEmail, useSignUpWithEmail } from "../api/auth.api";

export const Route = createFileRoute("/login")({
  beforeLoad: ({ context }) => {
    if (context.user) {
      throw redirect({ to: "/" });
    }
  },
  component: LoginComponent,
});

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const search = useSearch({ from: "/login" });

  const signIn = useSignInWithEmail({
    onSuccess: () => {
      navigate({ to: (search as any).redirect || "/" });
    },
  });

  const signUp = useSignUpWithEmail({
    onSuccess: () => {
      navigate({ to: (search as any).redirect || "/" });
    },
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSignUp) {
      signUp.mutate({ email, password });
    } else {
      signIn.mutate({ email, password });
    }
  }

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
        <button type="button" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp
            ? "Already have an account? Sign In"
            : "Need an account? Sign Up"}
        </button>
      </form>
    </div>
  );
}
