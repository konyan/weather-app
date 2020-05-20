import api from "./api";
import country from "./countries";
import IconGen from "./weather";
import { DOM } from "./dom";

var tempIsF = false;

const geoFunction = (e) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = "lat=" + position.coords.latitude;
      const lon = "lon=" + position.coords.longitude;
      let response = api(lat, lon);
      response.then((res) => {
        getData(res);
      });
    });
  } else {
    alert("Your browser doesn't supoort geo location.");
  }
};

const changeDeg = () => {
  tempIsF = !tempIsF;

  var deg = parseInt(DOM.tempBody.innerHTML);
  var change = 0;
  var changeChar = "°C";

  if (tempIsF) {
    change = (deg * 9) / 5 + 32;
    changeChar = "°F";
  } else {
    change = (deg - 32) / 1.8;
    changeChar = "°C";
  }
  DOM.tempBody.innerHTML = parseInt(change);
  DOM.degBody.innerHTML = changeChar;
};

const getData = ({ data, status }) => {
  if (status == 200) {
    // $(".card>div").removeClass("hide");
    // $(".loader").addClass("hide");
    var weatherObj = data;
    var weatherDes = data["weather"][0]["main"];
    var weatherTemp = data["main"]["temp"];
    var weatherCountry = data["sys"]["country"];
    var weatherPlace = data["name"];
    weatherCountry = country(weatherCountry);
    console.log(weatherCountry);

    DOM.tempBody.innerHTML = parseInt(weatherTemp);
    DOM.countryHead.innerHTML = weatherCountry;
    DOM.placeHead.innerHTML =
      `<i class="card__heading--icon"> <img src="./img/place.png" alt="place" /> </i>` +
      weatherPlace;
    DOM.desDescription.innerHTML = weatherDes;

    // $(".card__description--des").text(weatherDes);
    IconGen("rain");
    // $(".card__footer--temp").text(parseInt(weatherTemp));
    // $(".card__heading--place").text(weatherPlace);
    // $(".card__heading--country").text(weatherCountry);
  }
};

DOM.findmeButton.addEventListener("click", geoFunction);
DOM.degBody.addEventListener("click", changeDeg);

//init

const init = () => {
  let response = api("lat=16.799376", "lon=96.1508655");
  response.then((res) => {
    console.log(res);
    getData(res);
  });
};

init();

// $(document).ready(function () {
//   var tempIsF = false;
//   var lat;
//   var lon;

//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//       lat = "lat=" + position.coords.latitude;
//       lon = "lon=" + position.coords.longitude;
//       getData(lat, lon);
//     });
//   } else {
//     alert("Your browser doesn't supoort geo location.");
//   }

//   $(".card__footer--deg").click(function () {
//     tempIsF = !tempIsF;
//     var deg = parseInt($(".card__footer--temp").text());
//     var changeNum = 0;
//     var changeChar = "°C";

//     if (tempIsF) {
//       change = (deg * 9) / 5 + 32;
//       changeChar = "°F";
//     } else {
//       change = (deg - 32) / 1.8;
//       changeChar = "°C";
//     }
//     $(".card__footer--temp").text(parseInt(change));
//     $(".card__footer--deg").text(changeChar);
//   });
// });

// function getData(lat, lon) {
//   $.get(api + lat + "&" + lon, function (data, status) {
//     if (status == "success") {
//       $(".card>div").removeClass("hide");
//       $(".loader").addClass("hide");

//       var weatherObj = data;
//       var weatherDes = data["weather"][0]["main"];
//       var weatherTemp = data["main"]["temp"];
//       var weatherCountry = data["sys"]["country"];
//       var weatherPlace = data["name"];

//       if (isoCountries.hasOwnProperty(weatherCountry)) {
//         weatherCountry = isoCountries[weatherCountry];
//       }
//       $(".card__description--des").text(weatherDes);
//       IconGen(weatherDes);
//       $(".card__footer--temp").text(parseInt(weatherTemp));
//       $(".card__heading--place").text(weatherPlace);
//       $(".card__heading--country").text(weatherCountry);
//     }
//   });
// }
