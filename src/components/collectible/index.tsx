import { Digital } from "./Digital";
import { DVD } from "./DVD";
import { VHS } from "./VHS";
import { type Collectible } from "../../types/Collectible";

 type CollectibleProps = Collectible;

function Collectible(props: CollectibleProps) {
  const {title, image_source, release_year, region} = props;
  const imgSrc = image_source ?? 'https://via.placeholder.com/150';
  return (
    <div>
      <h3>Title: {title}</h3>
      <img
        src={imgSrc}
        onClick={() => {
          alert(`This image's src is: ${imgSrc}`);
        }}
      />
      <div>
        <span>Release Year: {release_year}</span>
        <br />
        <span>Region: {region}</span>
        <br />
      </div>
      <VariableLayout {...props} />
    </div>
  );
}

/*number_of_physical_media_components = number of DVD/Blu-ray Discs and VHS tapes*/
function VariableLayout({format: formatIn, number_of_physical_media_components, digital_source_location}: CollectibleProps) {
  const format = formatIn.toLowerCase();
  const count = number_of_physical_media_components ?? 0;
  const source = digital_source_location ?? 'Unknown';
  if (format === 'dvd' || format === 'bluray') {
    return <DVD count={count} />;
  }
  if (format === 'vhs') {
    return <VHS count={count} />;
  }
  if (format === 'digital') {
    return <Digital source={source} />;
  }
  return <div>Some shit went wrong...</div>;
}

export default Collectible;
