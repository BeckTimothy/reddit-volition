import logo from './logo.svg';
import './App.css';
import {Button, Row} from "react-bootstrap";
import {ButtonSpan} from "./components/ButtonSpan.js"
/* global chrome */
/* global sync */

//document.addEventListener('DOMContentLoaded', function() {
//  document.getElementById("volitionKarma").addEventListener("click", vKarmaHandler);
//  document.getElementById("volitionRpan").addEventListener("click", vRpanHandler);
//  document.getElementById("volitionCoins").addEventListener("click", vCoinsHandler);
//  document.getElementById("volitionAwards").addEventListener("click", vAwardsHandler);
//  document.getElementById("volitionPremium").addEventListener("click", vPremiumHandler);
//  document.getElementById("volitionTrophies").addEventListener("click", vTrophiesHandler);
//  document.getElementById("volitionAds").addEventListener("click", vAdsHandler);
//});

//let volitionKarma, volitionRpan, volitionCoins, volitionAwards, volitionPremium, volitionTrophies, volitionAds = null

//const getValues = () => {
//  chrome.storage.sync.get(null, (result) => {
//    console.log('Value currently is ' + result.key);
//    console.log(result);
//    result['volitionKarma'] === 0 ? volitionKarma = 0 : volitionKarma = 1;
//    result['volitionRpan'] === 0 ? volitionRpan = 0 : volitionRpan = 1;
//    result['volitionCoins'] === 0 ? volitionCoins = 0 : volitionCoins = 1;
//    result['volitionAwards'] === 0 ? volitionAwards = 0 : volitionAwards = 1;
//    result['volitionPremium'] === 0 ? volitionPremium = 0 : volitionPremium = 1;
//    result['volitionTrophies'] === 0 ? volitionTrophies = 0 : volitionTrophies = 1;
//    result['volitionAds'] === 0 ? volitionAds = 0 : volitionAds = 1;
//  });
//};
//getValues()

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ButtonSpan category={'volitionKarma'} />
      </header>
    </div>
  );
}

export default App;
