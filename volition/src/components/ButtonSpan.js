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
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {useState} from "react";
/* global chrome */
/* global sync */

export const ButtonSpan = (props) => {
	let category = props.category;
	let status = null;

	const [renderStatus, setRenderStatus] = useState(2);
	const handleRender = () => {
		//console.log(`attempting to force page render... state currently: ${renderStatus}, providing state: ${status}`);
		setRenderStatus(status);
	};
	const initButtons = (feature) => {
		//console.log(`initButtons(${feature}) is now running...`)
		chrome.storage.sync.get(feature, (result) => {
			status = result[feature];
			handleRender();
		})
	}
	if(renderStatus === 2){initButtons(category)}

	const handleButtons = () => {
		//console.log('\n\nbutton pressed...');
		freeYourself(category);
	};

	const freeYourself = (feature) => {
		//console.log(`freeYourself(${feature}) is now running...`)
		chrome.storage.sync.get(feature, (result) => {
			//console.log(feature + ' Value currently is ' + result[feature]);
			status = result[feature];
			let obj = {};
			status === 1 ? status = 0 : status = 1;
			obj[feature] = status;
			//let logText = null
			//status === 1 ? logText = 'enabled' : logText = 'disabled';
			chrome.storage.sync.set(obj, () => {
				//console.log(`"${feature}" in Chrome storage is now set to ${status}, ${feature.substring(8)} ${logText}.`);
			});
			handleRender();
		})
	}

	const buttonText = (category) => {
		let text = category.substring(8);
		return text.substring(text.length - 1) === 's' ? text += " are Blocked" : text += " is Blocked";
	}
	//console.log(`Rendering button with u status: ${renderStatus}`);
	if(renderStatus === 0) {
		return (
			<Row className={'d-flex justify-content-center'}>
				<Button id={category} variant="outline-success" className={'w-75 m-1'} onClick={ () => {handleButtons()}}>{buttonText(category)}</Button>
			</Row>
		);
	} else {
		return (
			<Row className={'d-flex justify-content-center'}>
				<Button id={category} variant="success" className={'w-75 m-1'} onClick={ () => {handleButtons()}}>Click to Block {category.substring(8)}</Button>
			</Row>
		);
	}
};

