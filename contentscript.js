/*
 * This loads on certain pages and detects wether it is a github repo page
 * If so then it shows the page action to show the issues board
 */



var regex = /(.*)\/(.*)\/issues/;

if (regex.test(window.location)) {
	chrome.extension.sendRequest('showIcon', function(response) {
	});
}

