chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  let msg = {
    txt: "p!nkify"
  };
  chrome.tabs.sendMessage(tab.id, msg);
}