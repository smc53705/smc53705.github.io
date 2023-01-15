import { Digital } from './Digital';
import { DVD } from './DVD';
import { VHS } from './VHS';

/*

props: {
	format: 'show' | 'movie' | 'mini-series'
	numberOfSeasons: null | number;
	countryOfOrigin: string;
	isOwned: boolean;
	imgSrc: string;
	title: string;
	releaseDate: string;
	region: string;
	dvd: null | {
	  numberOfDiscs: number;
	};
	vhs: null | {
	  numberOfTapes: number;
	}
	digital: null | {
	  locationSource: 'Amazon' | 'Vudu' | 'Google Play'
	}
}

*/
DVD
function Collectible(props) {
	return <div>
		<h3>Title: {props.title}</h3>
		<img src={props.imgSrc} onClick={(clickEvent) => {alert(`This image's src is: ${props.imgSrc}`);}} />
		<div>
		  <span>Release Date: {props.releaseDate}</span>
			<br />
			<span>Region: {props.regeion}</span>
			<br />
		</div>
		{renderVariableLayout(props)}
	</div>

}

function renderVariableLayout(props) {
	if(props.dvd != null) {
		return <DVD {...props.dvd} />;
	} 
	if(props.vhs != null) {
		return <VHS {...props.vhs} />;
	} 
	if(props.digital != null) {
		return <Digital {...props.digital} />;
	} 
  return <div>Some shit went wrong...</div>;
}


export default Collectible;