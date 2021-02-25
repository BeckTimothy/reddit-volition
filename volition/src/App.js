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
import 'bootstrap/dist/css/bootstrap.css';
//
//const getQuote = () => {
//	let quoteArr = [
//		"\"A person with half volition goes backwards and forwards, but makes no progress on even the smoothest of roads.\" ~ Thomas Carlyle",
//		"\"Volition . . . takes place only when there are a number of conflicting systems of ideas, and depends on our having a complex field of consciousness.\" ~ William James",
//		"\"And this we should believe: that hope and volition can bring us closer to our ultimate goal: justice for all, injustice for no-one.\" ~ Eyvind Johnson",
//		"\"We must look deeply into the nature of our volition to see whether it is pushing us in the direction of liberation from suffering and toward peace and compassion, or in the direction of affliction and misery. What is it that we really want deep in our heart? Is it money, fame, power? Or is it finding inner peace, being able to live life fully and enjoy the present moment?\" ~ Nhat Hanh",
//		"\"Only the human spirit can act with volition and consciously change itself; it is the only thing in all creation that is not entirely at the mercy of forces outside itself.\" ~ Dean Koontz",
//		"\"Reality is how we interpret it. Imagination and volition play a part in that interpretation. Which means that all reality is to some extent a fiction.\" ~ Yann Martel",
//		"\"Liberty is not about class war, income war, race war, national war, a war between the sexes, or any other conflict apart from the core conflict between individuals and those who would seek power and control over the human spirit. Liberty is the dream that we can all work together, in ways of our choosing and of our own human volition, to realize a better life.\" ~ Jeffrey Tucker"
//	]
//	return quoteArr[Math.floor(Math.random() * Math.floor(quoteArr.length - 1))];
//};

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