// Listen for page load
window.addEventListener("load", function () {

    // Get the current time
    var startTime = new Date().getTime();
  
    // Send message to background script with site and start time
    chrome.runtime.sendMessage({
      message: "startTracking",
      site: window.location.hostname,
      startTime: startTime
    });
  
    // Listen for page unload
    window.addEventListener("beforeunload", function () {
  
      // Get the current time
      var endTime = new Date().getTime();
  
      // Calculate time spent on site
      var timeSpent = endTime - startTime;
  
      // Send message to background script with site and time spent
      chrome.runtime.sendMessage({
        message: "stopTracking",
        site: window.location.hostname,
        timeSpent: timeSpent
      });
    });
  });
  