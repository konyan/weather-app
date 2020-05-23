import { apiCity, apiPosition } from "./api";
import country from "./countries";
import IconGen from "./weather";
import DOM from "./dom";

let tempIsF = false;

const changeDeg = () => {
  tempIsF = !tempIsF;

  const deg = parseInt(DOM.tempBody.innerHTML, 10);
  let change = 0;
  let changeChar = "°C";

  if (tempIsF) {
    change = (deg * 9) / 5 + 32;
    changeChar = "°F";
  } else {
    change = (deg - 32) / 1.8;
    changeChar = "°C";
  }
  DOM.tempBody.innerHTML = parseInt(change, 10);
  DOM.degBody.innerHTML = changeChar;
};

const getData = ({ data, status }) => {
  if (status === 200) {
    // $(".card>div").removeClass("hide");
    // $(".loader").addClass("hide");
    const weatherDes = data.weather[0].main;
    const weatherTemp = data.main.temp;
    let weatherCountry = data.sys.country;
    const weatherPlace = data.name;
    weatherCountry = country(weatherCountry);

    DOM.tempBody.innerHTML = parseInt(weatherTemp, 10);
    DOM.countryHead.innerHTML = weatherCountry;
    DOM.placeHead.innerHTML = `<i class="card__heading--icon"> <img src="./img/place.png" alt="place" /> </i>${weatherPlace}`;
    DOM.desDescription.innerHTML = weatherDes;

    IconGen("rain");
  }
};

const geoFunction = () => {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition((error) => {
      if (error.code === error.PERMISSION_DENIED) {
        document.getElementById("alert").classList.remove("hide");
      }
    });
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = `lat=${position.coords.latitude}`;
      const lon = `lon=${position.coords.longitude}`;
      const response = apiPosition(lat, lon);
      response.then((res) => {
        getData(res);
      });
    });
  } else {
    document.getElementById("alert").classList.remove("hide");
  }
};

const getCityFunction = () => {
  const val = DOM.searchCityInput.value;
  console.log("HELLO", val);
  if (val != "") {
    const response = apiCity(val);
    response.then((res) => {
      console.log("RES", res);
      getData(res);
    });
  }
};

DOM.findmeButton.addEventListener("click", geoFunction);
DOM.degBody.addEventListener("click", changeDeg);
DOM.findCityButton.addEventListener("click", getCityFunction);
document.addEventListener("keypress", function (e) {
  if (e.keyCode === 13 || e.which === 13) {
    getCityFunction();
  }
});
// $(".card__description--des").text(weatherDes);
// init

const init = () => {
  const response = apiPosition("lat=16.799376", "lon=96.1508655");
  response.then((res) => {
    getData(res);
  });
};

init();
