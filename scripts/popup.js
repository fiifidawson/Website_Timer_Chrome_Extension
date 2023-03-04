chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var currentSite = tabs[0].url;
    var timeSpent = 0;
    setInterval(function() {
      timeSpent += 1;
      var minutes = Math.floor(timeSpent / 60);
      var seconds = timeSpent % 60;
      var timeString = minutes + "m " + seconds + "s";
      document.getElementById("current-site").textContent = "Current Site: " + currentSite;
      document.getElementById("time-spent").textContent = "Time Spent: " + timeString;
    }, 1000);
  });
  