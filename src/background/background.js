


chrome.browserAction.onClicked.addListener(function(tab) {
    var a = chrome.runtime.getURL('src/app/index.html');
    chrome.tabs.create({ url: a });
});

