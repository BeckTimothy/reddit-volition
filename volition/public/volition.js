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

const removeFeature = (feature) => {
	let head = document.head;
	let link = document.createElement("link");
	link.type = "text/css";
	link.rel = "stylesheet";
	link.href = chrome.runtime.getURL(`styles/${feature}.css`);
	console.log(link);
	head.appendChild(link);
}

chrome.storage.sync.get(null, (result) => {
		console.log('Value currently is ');
		console.log(result);
		if(result['volitionKarma'] === 0){
			removeFeature('karma');
		}
		if(result['volitionCoins'] === 0){
			removeFeature('coins');
		}
		if(result['volitionAwards'] === 0){
			removeFeature('awards');
		}
		if(result['volitionPremium'] === 0){
			removeFeature('premium');
		}
		if(result['volitionTrophies'] === 0){
			removeFeature('trophies');
		}
		if(result['volitionAds'] === 0){
			removeFeature('ads');
		}
		if(result['volitionRpan'] === 0){
			removeFeature('rpan');
		}
	});