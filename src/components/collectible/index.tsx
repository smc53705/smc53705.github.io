import { Digital } from "./Digital";
import { DVD } from "./DVD";
import { VHS } from "./VHS";

interface CollectibleProps {
  format?: "show" | "movie" | "mini-series";
  numberOfSeasons?: number | null;
  countryOfOrigin?: string;
  isOwned?: boolean;
  imgSrc: string;
  title: string;
  releaseDate?: string;
  region?: string;
  regeion?: string;
  dvd?: {
    numberOfDiscs: number;
  } | null;
  vhs?: {
    numberOfTapes: number;
  } | null;
  digital?: {
    locationSource: "Amazon" | "Vudu" | "Google Play";
  } | null;
}

function Collectible(props: CollectibleProps) {
  return (
    <div>
      <h3>Title: {props.title}</h3>
      <img
        src={props.imgSrc}
        onClick={() => {
          alert(`This image's src is: ${props.imgSrc}`);
        }}
      />
      <div>
        <span>Release Date: {props.releaseDate}</span>
        <br />
        <span>Region: {props.regeion}</span>
        <br />
      </div>
      {renderVariableLayout(props)}
    </div>
  );
}

function renderVariableLayout(props: CollectibleProps) {
  if (props.dvd != null) {
    return <DVD {...props.dvd} />;
  }
  if (props.vhs != null) {
    return <VHS {...props.vhs} />;
  }
  if (props.digital != null) {
    return <Digital {...props.digital} />;
  }
  return <div>Some shit went wrong...</div>;
}

export default Collectible;
