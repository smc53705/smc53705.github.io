import { useNavigate } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "../db/dbClient";
import { toast } from "sonner";

async function signUpWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    throw error;
    // console.error("Error signing up:", error.message);
    // return false;
  }

  console.log("User signed up:", data.user);
  // If email confirmation is enabled, the session will be null until confirmed.
  return true;
}

type SignUpMutationOptions = Omit<
  Parameters<
    typeof useMutation<
      boolean,
      Error,
      {
        email: string;
        password: string;
      },
      unknown
    >
  >[0],
  "mutationFn"
>;
export function useSignUpWithEmail({
  onSuccess,
  onError,
  ...opts
}: SignUpMutationOptions = {}) {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signUpWithEmail(email, password),
    ...opts,
    onSuccess: (...args) => {
      toast.success("Signed up successfully!");
      onSuccess?.(...args);
    },
    onError: (...args) => {
      toast.error("Error signing up");
      onError?.(...args);
    },
  });
}

async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    throw error;
    // console.error("Error signing in:", error.message);
    // return null;
  }

  console.log("User signed in:", data.user);
  return data.session;
}

type SignInMutationOptions = Omit<
  Parameters<
    typeof useMutation<
      unknown,
      Error,
      {
        email: string;
        password: string;
      },
      unknown
    >
  >[0],
  "mutationFn"
>;

export function useSignInWithEmail({
  onSuccess,
  ...opts
}: SignInMutationOptions = {}) {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signInWithEmail(email, password),
    ...opts,
    onSuccess: (...args) => {
      console.log("ARGS", args);
      toast.success("Signed in successfully!");
      onSuccess?.(...args);
    },
    onError: (...args) => {
      console.log("ARGS", args);
      toast.error("Error signing in");
      opts.onError?.(...args);
    },
  });
}

async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw error;
    // console.error("Error signing out:", error.message);
    // return false;
  }

  console.log("User signed out.");
  return true;
}

export function useSignOut() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => signOut(),
    onSuccess: () => {
      toast.success("Signed out successfully!");
      navigate({ to: "/login" });
    },
    onError: () => {
      toast.error("Error signing out");
    },
  });
}
