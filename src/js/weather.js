export default function (desc) {
  var desc = desc.toLowerCase();
  switch (desc) {
    case "drizzle":
      addIcon(desc);
      break;
    case "clouds":
      addIcon(desc);
      break;
    case "rain":
      addIcon(desc);
      break;
    case "snow":
      addIcon(desc);
      break;
    case "clear":
      addIcon(desc);
      break;
    case "thunderstorm":
      addIcon(desc);
      break;
    default:
      document
        .querySelector(".card__description .clouds")
        .classList.remove("hide");
  }
}

function addIcon(desc) {
  document
    .querySelector(".card__description--icon-group")
    .insertAdjacentHTML("afterbegin", dirzzleHtml);
}

const dirzzleHtml = `
<div class="card__description--icon icon sun-shower drizzle"> <div class="cloud"></div> <div class="sun"> <div class="rays"></div> </div> <div class="rain"></div> </div>
`;

const thunderstormHtml = `
<div class="card__description--icon icon thunder-storm thunderstorm" > <div class="cloud"></div> <div class="lightning"> <div class="bolt"></div> <div class="bolt"></div> </div> </div>
`;

const cloudsHtml = `
<div class="card__description--icon icon cloudy clouds"> <div class="cloud"></div> <div class="cloud"></div> </div>
`;

const snowHtml = `
<div class="card__description--icon icon flurries snow"> <div class="cloud"></div> <div class="snow"> <div class="flake"></div> <div class="flake"></div> </div> </div>
`;

const clearHtml = `
<div class="card__description--icon icon sunny clear"> <div class="sun"> <div class="rays"></div> </div> </div>`;

const rainHtml = `
<div class="card__description--icon icon rainy rain"> <div class="cloud"></div> <div class="rain"></div> </div>`;
