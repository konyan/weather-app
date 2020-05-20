import api from "./api";
import country from "./countries";
import IconGen from "./weather";
import DOM from "./dom";

let tempIsF = false;

const changeDeg = () => {
  tempIsF = !tempIsF;

  let deg = parseInt(DOM.tempBody.innerHTML);
  let change = 0;
  let changeChar = "°C";

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
    let weatherObj = data;
    let weatherDes = data["weather"][0]["main"];
    let weatherTemp = data["main"]["temp"];
    let weatherCountry = data["sys"]["country"];
    let weatherPlace = data["name"];
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

const geoFunction = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = `lat=${position.coords.latitude}`;
      const lon = `lon=${position.coords.longitude}`;
      const response = api(lat, lon);
      response.then((res) => {
        getData(res);
      });
    });
  } else {
    alert("Your browser doesn't supoort geo location.");
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
