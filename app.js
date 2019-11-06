const request = require("request");

const url =
  "https://api.darksky.net/forecast/479db41ca2fea983dfa294c5ee33bb3c/37.8267,-122.4233";
request({ url: url, json: true }, (err, res) => {
  if (err) {
    console.log("Unabale to connect to weather service");
    return;
  }
  if (res.body.error) {
    console.log("Unable to find location");
    return;
  }
  console.log("test: ", res.body.daily.data[0]);
});

const geocurl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidG9uZ2RvbmciLCJhIjoiY2sybXdzOHgyMG1ubDNobHA4ZmtoODB3NSJ9.UysRzfWfLX0ldAeSZWVg0A&limit=1";
request({ url: geocurl, json: true }, (err, res) => {
  if (err) {
    console.log("Unabale to connect to weather service");
    return;
  }
  if (!res.body.features.length) {
    console.log("Unable to find location");
    return;
  }
  const latitude = res.body.features[0].center[1];
  const longitude = res.body.features[0].center[0];
});
