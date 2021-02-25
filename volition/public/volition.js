/*
 * Copyright (C) 2021 Timothy Beck <dev@timothybeck.com>
 *
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

//function removeCoins() {
//	let head = document.head;
//	let link = document.createElement("link");
//	link.type = "text/css";
//	link.rel = "stylesheet";
//	link.href = chrome.runtime.getURL("./styles/coins.css");
//	head.appendChild(link);
//}
//
//function removeAwards() {
//	let head = document.head;
//	let link = document.createElement("link");
//	link.type = "text/css";
//	link.rel = "stylesheet";
//	link.href = chrome.runtime.getURL("./styles/awards.css");
//	head.appendChild(link);
//}
//
//function removePremium() {
//	let head = document.head;
//	let link = document.createElement("link");
//	link.type = "text/css";
//	link.rel = "stylesheet";
//	link.href = chrome.runtime.getURL("./styles/premium.css");
//	head.appendChild(link);
//}
//
//function removeTrophies() {
//	let head = document.head;
//	let link = document.createElement("link");
//	link.type = "text/css";
//	link.rel = "stylesheet";
//	link.href = chrome.runtime.getURL("./styles/trophies.css");
//	head.appendChild(link);
//}
//
//function removeAds() {
//	let head = document.head;
//	let link = document.createElement("link");
//	link.type = "text/css";
//	link.rel = "stylesheet";
//	link.href = chrome.runtime.getURL("./styles/ads.css");
//	head.appendChild(link);
//}
//
//function removeRpan() {
//	let head = document.head;
//	let link = document.createElement("link");
//	link.type = "text/css";
//	link.rel = "stylesheet";
//	link.href = chrome.runtime.getURL("./styles/rpan.css");
//	head.appendChild(link);
//}
//
//function getQuote() {
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