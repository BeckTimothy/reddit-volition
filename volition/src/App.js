import './App.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {ButtonSpan} from "./components/ButtonSpan.js"
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Col className={'d-flex justify-content-around'}>
           <Row className={'py-3'}>
              <h1>Reddit Volition</h1>
           </Row>
        </Col>
         <Col className={'d-flex flex-column justify-content-around py-2'}>
            <ButtonSpan category={'volitionKarma'} />
            <ButtonSpan category={'volitionAwards'} />
            <ButtonSpan category={'volitionPremium'} />
            <ButtonSpan category={'volitionCoins'} />
            <ButtonSpan category={'volitionTrophies'} />
            <ButtonSpan category={'volitionRpan'} />
            <ButtonSpan category={'volitionAds'} />
         </Col>
         <Col className={'d-flex justify-content-center pt-2 pb-4'}>
            <span>
               v0.1.0 • <a className={'text-muted'} href={'https://github.com/BeckTimothy/reddit-volition'} target="_blank" rel="noopener noreferrer">Github</a> • <a className={'text-muted'} href={'https://www.linkedin.com/in/TimothymBeck/'} target="_blank" rel="noopener noreferrer">Contact</a> • <a className={'text-muted'} href={''} target="_blank" rel="noopener noreferrer">Gib Munie</a></span>
         </Col>
      </header>
    </div>
  );
}

export default App;
