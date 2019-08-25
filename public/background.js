/*global chrome*/

chrome.runtime.onMessage.addListener(function(){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.runtime.sendMessage({data: tabs[0].url});
        console.log("background has sent message")
    })
});
