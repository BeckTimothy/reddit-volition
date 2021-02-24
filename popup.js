document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("volitionKarma").addEventListener("click", vKarmaHandler);
  document.getElementById("volitionRpan").addEventListener("click", vRpanHandler);
  document.getElementById("volitionCoins").addEventListener("click", vCoinsHandler);
  document.getElementById("volitionAwards").addEventListener("click", vAwardsHandler);
  document.getElementById("volitionPremium").addEventListener("click", vPremiumHandler);
  document.getElementById("volitionTrophies").addEventListener("click", vTrophiesHandler);
  document.getElementById("volitionAds").addEventListener("click", vAdsHandler);
});

const handler = () => {
	freeYourself('Karma', 'remove')
};

const getValues = () => {
	chrome.storage.sync.get(null, (result) => {
		console.log('Value currently is ' + result.key);
		console.log(result);
		result['volitionKarma'] === 0 ? volitionKarma = 0 : volitionKarma = 1;
		result['volitionRpan'] === 0 ? volitionRpan = 0 : volitionRpan = 1;
		result['volitionCoins'] === 0 ? volitionCoins = 0 : volitionCoins = 1;
		result['volitionAwards'] === 0 ? volitionAwards = 0 : volitionAwards = 1;
		result['volitionPremium'] === 0 ? volitionPremium = 0 : volitionPremium = 1;
		result['volitionTrophies'] === 0 ? volitionTrophies = 0 : volitionTrophies = 1;
		result['volitionAds'] === 0 ? volitionAds = 0 : volitionAds = 1;
	});
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
	if(status === 'remove'|| status === 1) {
		obj[`${storageKey}`] = 0;
		chrome.storage.sync.set(obj, () => {
			console.log(`\"${storageKey}\" in Chrome storage is set to 0, removed`);
		});
		let booton = document.getElementById(`volition${storageKey}`);
		booton

	} else {
		obj[`${storageKey}`] = 1;
		chrome.storage.sync.set(obj, () => {
			console.log(`\"${storageKey}\" in Chrome storage is set to 1, added`);
		});

	}
}