import { createFileRoute } from "@tanstack/react-router";
import { useCollectibles } from "../api/collections.api";
import Collectible from "../components/collectible";

export const Route = createFileRoute("/")({
  component: IndexComponent,
});

function IndexComponent() {
  const { data, isPending, error } = useCollectibles();

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.map((collectible) => (
        <Collectible key={collectible.id} {...collectible} />
      ))}
    </div>
  );
}
