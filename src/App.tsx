import { useCollectibles } from "./api/collections.api";
import logo from "./assets/react.svg";
import Collectible from "./components/collectible";

function App() {
  const { data, isPending, error } = useCollectibles();
  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <div>
        Company Logo <img src={logo} />
      </div>
      {data.map((collectible) => (
        <Collectible key={collectible.id} {...collectible} />
      ))}
    </div>
  );
}

export default App;
