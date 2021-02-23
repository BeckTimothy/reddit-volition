document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("remKarma").addEventListener("click", handler);
});

const handler = () => {
	freeYourself('Karma', 'remove')
};

/*
 *
 * input feature: karma, ads, coins, premium, trophies, awards
 * input status: remove or anything else
 *
 */
function freeYourself(feature, status) {
	console.log('button pressed');
	let storageKey = `volition${feature[0].toUpperCase()}${feature.substring(1).toLowerCase()}`;
	//let storageKey = `volitionKarma`;
	let obj = {};
	if(status === 'remove') {
		obj[`${storageKey}`] = 0;
		chrome.storage.sync.set(obj, () => {
			console.log(`\"${storageKey}\" in Chrome storage is set to 0, removed`);
		});
	} else {
		obj[`${storageKey}`] = 1;
		chrome.storage.sync.set(obj, () => {
			console.log(`\"${storageKey}\" in Chrome storage is set to 1, added`);
		});
	}
}