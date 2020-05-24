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

function addIcon(template) {
  document
    .querySelector(".card__description--icon-group")
    .insertAdjacentHTML("afterbegin", template);
}

export default (desc) => {
  switch (desc.toLowerCase()) {
    case "drizzle":
      addIcon(dirzzleHtml);
      break;
    case "clouds":
      addIcon(cloudsHtml);
      break;
    case "rain":
      addIcon(rainHtml);
      break;
    case "snow":
      addIcon(snowHtml);
      break;
    case "clear":
      addIcon(clearHtml);
      break;
    case "thunderstorm":
      addIcon(thunderstormHtml);
      break;
    default:
      addIcon(cloudsHtml);
  }
};
