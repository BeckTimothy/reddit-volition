/*
setting values into storage
chrome.storage.sync.set({key: value}, function() {
  console.log('Value is set to ' + value);
});

 retrieving values from storage
chrome.storage.sync.get(['key'], function(result) {
  console.log('Value currently is ' + result.key);
});
 */

//all catagories are disabled by default
	chrome.storage.sync.get(['volitionKarma'], (result) => {
		console.log('Value currently is ' + result.key);
		console.log(result);
		if(result['volitionKarma'] === 0){
			includeKarma();
		}
	});


//chrome.storage.sync.get(['volitionKarma'], (result) => {
//	console.log('Value currently is ' + result.key);
//	console.log(result);
//	if(result['volitionKarma'] === 0){
//		removeKarma();
//	}
//});


function includeKarma() {
	let head = document.head;
	let link = document.createElement("link");
	//let href = chrome.runtime.getURL("styles.css");

	link.type = "text/css";
	link.rel = "stylesheet";
	link.href = chrome.runtime.getURL("styles.css");
		console.log('heeelp');
	head.appendChild(link);
}



function includeCoins() {

}

function includeAwards() {

}

function includePremium() {

}

function includeTrophies() {

}

function includeAds() {

}

function getQuote() {
	let quoteArr = [
		"\"A person with half volition goes backwards and forwards, but makes no progress on even the smoothest of roads.\" ~ Thomas Carlyle",
		"\"Volition . . . takes place only when there are a number of conflicting systems of ideas, and depends on our having a complex field of consciousness.\" ~ William James",
		"\"And this we should believe: that hope and volition can bring us closer to our ultimate goal: justice for all, injustice for no-one.\" ~ Eyvind Johnson",
		"\"We must look deeply into the nature of our volition to see whether it is pushing us in the direction of liberation from suffering and toward peace and compassion, or in the direction of affliction and misery. What is it that we really want deep in our heart? Is it money, fame, power? Or is it finding inner peace, being able to live life fully and enjoy the present moment?\" ~ Nhat Hanh",
		"\"Only the human spirit can act with volition and consciously change itself; it is the only thing in all creation that is not entirely at the mercy of forces outside itself.\" ~ Dean Koontz",
		"\"Reality is how we interpret it. Imagination and volition play a part in that interpretation. Which means that all reality is to some extent a fiction.\" ~ Yann Martel",
		"\"Liberty is not about class war, income war, race war, national war, a war between the sexes, or any other conflict apart from the core conflict between individuals and those who would seek power and control over the human spirit. Liberty is the dream that we can all work together, in ways of our choosing and of our own human volition, to realize a better life.\" ~ Jeffrey Tucker"
	]
	return quoteArr[Math.floor(Math.random() * Math.floor(quoteArr.length - 1))];
};
