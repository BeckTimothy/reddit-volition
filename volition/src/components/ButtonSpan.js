import Row from "react-bootstrap/Row";
//import {Button} from "../lib/react-bootstrap/cjs/Button.js"
import Button from "react-bootstrap/Button";
import {useState} from "react";
/* global chrome */
/* global sync */

export const ButtonSpan = (props) => {
	let category = props.category;
	let status = null;
	let volitionKarma = null;
	let volitionRpan = null;
	let volitionCoins = null;
	let volitionAwards = null;
	let volitionPremium = null;
	let volitionTrophies = null;
	let volitionAds = null;


	const initializeValues = () => {
		chrome.storage.sync.get(null, (result) => {
			result['volitionKarma'] === 0 ? volitionKarma = 0 : volitionKarma = 1;
			result['volitionRpan'] === 0 ? volitionRpan = 0 : volitionRpan = 1;
			result['volitionCoins'] === 0 ? volitionCoins = 0 : volitionCoins = 1;
			result['volitionAwards'] === 0 ? volitionAwards = 0 : volitionAwards = 1;
			result['volitionPremium'] === 0 ? volitionPremium = 0 : volitionPremium = 1;
			result['volitionTrophies'] === 0 ? volitionTrophies = 0 : volitionTrophies = 1;
			result['volitionAds'] === 0 ? volitionAds = 0 : volitionAds = 1;
		});
	};
	initializeValues();

	const [renderStatus, setRenderStatus] = useState(2);
	const handleRender = () => {
		console.log(`attempting to force page render... state currently: ${renderStatus}, providing state: ${status}`);
		setRenderStatus(status);
	};
	const initButtons = (feature) => {
		console.log(`initButtons(${feature}) is now running...`)
		chrome.storage.sync.get(feature, (result) => {
			status = result[feature];
			handleRender();
		})
		//console.log('outside sync: ')
		//console.log(status);
		//status === 1 ? handleRender() : handleRender();
	}
	if(renderStatus === 2){initButtons(category)}



	const handleButtons = () => {
		console.log('\n\nbutton pressed...');
		freeYourself(category);
	};

	const freeYourself = (feature) => {
		console.log(`freeYourself(${feature}) is now running...`)

		chrome.storage.sync.get(feature, (result) => {
			console.log(feature + ' Value currently is ' + result[feature]);
			status = result[feature];
			let obj = {};
			status === 1 ? status = 0 : status = 1;
			obj[feature] = status;
			let logText = null
			status === 1 ? logText = 'enabled' : logText = 'disabled';
			chrome.storage.sync.set(obj, () => {
				console.log(`"${feature}" in Chrome storage is now set to ${status}, ${feature.substring(8)} ${logText}.`);
			});
			handleRender();
		})
	}

	console.log(`Rendering button with u status: ${renderStatus}`);

	if(renderStatus === 0) {
		return (
			<Row className={'d-flex'}>
				<Button id={category}  className={'btn btn-danger'} onClick={ () => {handleButtons()}}>Click to Enable {category.substring(8)}</Button>
			</Row>
		);
	} else {
		return (
			<Row className={'d-flex'}>
				<Button id={category}  className={'btn btn-success'} onClick={ () => {handleButtons()}}>Click to Disable {category.substring(8)}</Button>
			</Row>
		);
	}
};

