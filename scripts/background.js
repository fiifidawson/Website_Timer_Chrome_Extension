chrome.action.onClicked.addListener(function(tab) {
    chrome.action.setPopup({ tabId: tab.id, popup: "popup.html" });
  });
  
  // Listen for a message from the content script
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "startTimer") {
      // Set the start time in storage
      chrome.storage.local.set({ "startTime": Date.now() });
    } else if (message.action === "stopTimer") {
      // Get the start time from storage
      chrome.storage.local.get("startTime", function(data) {
        if (data.startTime) {
          // Calculate the time spent on the website
          const timeSpent = Date.now() - data.startTime;
          // Send a message to the content script with the time spent
          chrome.tabs.sendMessage(sender.tab.id, { action: "showTimeSpent", timeSpent });
          // Remove the start time from storage
          chrome.storage.local.remove("startTime");
        }
      });
    }
  });
  