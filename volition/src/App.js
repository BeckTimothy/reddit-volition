/*
 * Copyright (C) 2021 Timothy Beck <dev@timothybeck.com>
 **********************************************************************
 * * * * * * * * * * * * * RedditVolition * * * * * * * * * * * * * * *
 **********************************************************************
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
import './App.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {ButtonSpan} from "./components/ButtonSpan.js"
import {InfoBanner} from "./components/InfoBanner.js"
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
        <Col className={'d-flex justify-content-around'}>
           <Row className={'pt-3 align-items-center'}>
              <h1>Reddit Volition</h1>
           </Row>
        </Col>
       <Col>
          <InfoBanner />
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
            <span style={{fontSize: '0.8rem'}}>
               v0.1.0 • <a className={'text-muted'} href={'https://github.com/BeckTimothy/reddit-volition'} target="_blank" rel="noopener noreferrer">Github</a> • <a className={'text-muted'} href={'https://www.linkedin.com/in/TimothymBeck/'} target="_blank" rel="noopener noreferrer">Contact</a></span>
         </Col>
    </div>
  );
}

export default App;