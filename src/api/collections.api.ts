import { useQuery } from "@tanstack/react-query";
import { supabase } from "../db/dbClient";
import { type Collectible } from "../types/Collectible";

async function fetchCollectibles(): Promise<Collectible[]> {
  const { data, error } = await supabase
    .from("Collections")
    .select("*")
    .overrideTypes<Collectible[]>();

  if (error) {
    throw error;
  }

  return data || [];
}

export function useCollectibles() {
  return useQuery({
    queryKey: ["collectibles"],
    queryFn: () => fetchCollectibles(),
  });
}
