function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      document.getElementById("date-time-location").innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var accuracy = position.coords.accuracy;
    var dateTime = new Date();
    var dateString = dateTime.toLocaleDateString();
    var timeString = dateTime.toLocaleTimeString();
    var locationString = `Latitude: ${latitude}, Longitude: ${longitude}, Accuracy: ${accuracy} meters`;
    document.getElementById("date-time-location").innerHTML = `${dateString} ${timeString} ${locationString}`;
    setTimeout(getLocation, 1000); // update every 1 second
  }
  getLocation();
  var ticker = document.getElementById("ticker");
  ticker.style.animation = "scroll 30s linear infinite";