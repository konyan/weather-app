function IconGen(desc) {
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
      $("div.clouds").removeClass("hide");
  }
}

function addIcon(desc) {
  $(".card__description ." + desc).removeClass("hide");
}
