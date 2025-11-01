import { ReactQueryProvider } from "./ReactQueryProvider";
import { useEffect, useState } from "react";
import { supabase } from "../db/dbClient";
import { User } from "@supabase/supabase-js";
import { Toaster } from "../components/shadcn/sonner";

interface AuthProviderProps {
  children: (user: User | null) => React.ReactNode;
}

export function GlobalProviders({ children }: React.PropsWithChildren) {
  return (
    <ReactQueryProvider>
      <Toaster />
      {children}
    </ReactQueryProvider>
  );
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children(user)}</>;
}
