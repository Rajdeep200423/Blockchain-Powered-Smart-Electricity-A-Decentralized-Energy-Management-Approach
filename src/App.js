import './App.css';
import GridAnimation from './components/GridAnimation.js';
import Features from './components/Features.js';
import Head from './components/Head.js';
import KeyFeature from './components/KeyFeature.js';
import CoinAnimation from './components/CoinAnimation.js';
import Main from './components/Main.js';


function App() {
  return (
    <div > 
      <Head/>
     
      <GridAnimation/>
      <div className="foreground">
        <Features/>
        <KeyFeature/>
        <CoinAnimation/>
        

      </div>
      <Main/>
     
     
    </div>
  );
}

export default App;
