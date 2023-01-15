import logo from './assets/react.svg';
import Collectible from './components/collectible';

function App() {
  return <div>
    <div>Company Logo <img src={logo} /></div>
    <Collectible title="Being Human" imgSrc="/Images/BeingHuman.jfif" dvd={{ numberOfDiscs: 5 }} />
    <Collectible title="Being Human" imgSrc="/Images/BeingHuman.jfif" digital={{locationSource: 'Amazon'}} />
    <Collectible title="The Invisible Man" imgSrc="/Images/InvisibleMan.jpg" vhs={{numberOfTapes: 3}} />
  </div>
 
}

export default App
