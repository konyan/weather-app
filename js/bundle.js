/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var isoCountries = {\n  AF: \"Afghanistan\",\n  AX: \"Aland Islands\",\n  AL: \"Albania\",\n  DZ: \"Algeria\",\n  AS: \"American Samoa\",\n  AD: \"Andorra\",\n  AO: \"Angola\",\n  AI: \"Anguilla\",\n  AQ: \"Antarctica\",\n  AG: \"Antigua And Barbuda\",\n  AR: \"Argentina\",\n  AM: \"Armenia\",\n  AW: \"Aruba\",\n  AU: \"Australia\",\n  AT: \"Austria\",\n  AZ: \"Azerbaijan\",\n  BS: \"Bahamas\",\n  BH: \"Bahrain\",\n  BD: \"Bangladesh\",\n  BB: \"Barbados\",\n  BY: \"Belarus\",\n  BE: \"Belgium\",\n  BZ: \"Belize\",\n  BJ: \"Benin\",\n  BM: \"Bermuda\",\n  BT: \"Bhutan\",\n  BO: \"Bolivia\",\n  BA: \"Bosnia And Herzegovina\",\n  BW: \"Botswana\",\n  BV: \"Bouvet Island\",\n  BR: \"Brazil\",\n  IO: \"British Indian Ocean Territory\",\n  BN: \"Brunei Darussalam\",\n  BG: \"Bulgaria\",\n  BF: \"Burkina Faso\",\n  BI: \"Burundi\",\n  KH: \"Cambodia\",\n  CM: \"Cameroon\",\n  CA: \"Canada\",\n  CV: \"Cape Verde\",\n  KY: \"Cayman Islands\",\n  CF: \"Central African Republic\",\n  TD: \"Chad\",\n  CL: \"Chile\",\n  CN: \"China\",\n  CX: \"Christmas Island\",\n  CC: \"Cocos (Keeling) Islands\",\n  CO: \"Colombia\",\n  KM: \"Comoros\",\n  CG: \"Congo\",\n  CD: \"Congo, Democratic Republic\",\n  CK: \"Cook Islands\",\n  CR: \"Costa Rica\",\n  CI: \"Cote D'Ivoire\",\n  HR: \"Croatia\",\n  CU: \"Cuba\",\n  CY: \"Cyprus\",\n  CZ: \"Czech Republic\",\n  DK: \"Denmark\",\n  DJ: \"Djibouti\",\n  DM: \"Dominica\",\n  DO: \"Dominican Republic\",\n  EC: \"Ecuador\",\n  EG: \"Egypt\",\n  SV: \"El Salvador\",\n  GQ: \"Equatorial Guinea\",\n  ER: \"Eritrea\",\n  EE: \"Estonia\",\n  ET: \"Ethiopia\",\n  FK: \"Falkland Islands (Malvinas)\",\n  FO: \"Faroe Islands\",\n  FJ: \"Fiji\",\n  FI: \"Finland\",\n  FR: \"France\",\n  GF: \"French Guiana\",\n  PF: \"French Polynesia\",\n  TF: \"French Southern Territories\",\n  GA: \"Gabon\",\n  GM: \"Gambia\",\n  GE: \"Georgia\",\n  DE: \"Germany\",\n  GH: \"Ghana\",\n  GI: \"Gibraltar\",\n  GR: \"Greece\",\n  GL: \"Greenland\",\n  GD: \"Grenada\",\n  GP: \"Guadeloupe\",\n  GU: \"Guam\",\n  GT: \"Guatemala\",\n  GG: \"Guernsey\",\n  GN: \"Guinea\",\n  GW: \"Guinea-Bissau\",\n  GY: \"Guyana\",\n  HT: \"Haiti\",\n  HM: \"Heard Island & Mcdonald Islands\",\n  VA: \"Holy See (Vatican City State)\",\n  HN: \"Honduras\",\n  HK: \"Hong Kong\",\n  HU: \"Hungary\",\n  IS: \"Iceland\",\n  IN: \"India\",\n  ID: \"Indonesia\",\n  IR: \"Iran, Islamic Republic Of\",\n  IQ: \"Iraq\",\n  IE: \"Ireland\",\n  IM: \"Isle Of Man\",\n  IL: \"Israel\",\n  IT: \"Italy\",\n  JM: \"Jamaica\",\n  JP: \"Japan\",\n  JE: \"Jersey\",\n  JO: \"Jordan\",\n  KZ: \"Kazakhstan\",\n  KE: \"Kenya\",\n  KI: \"Kiribati\",\n  KR: \"Korea\",\n  KW: \"Kuwait\",\n  KG: \"Kyrgyzstan\",\n  LA: \"Lao People's Democratic Republic\",\n  LV: \"Latvia\",\n  LB: \"Lebanon\",\n  LS: \"Lesotho\",\n  LR: \"Liberia\",\n  LY: \"Libyan Arab Jamahiriya\",\n  LI: \"Liechtenstein\",\n  LT: \"Lithuania\",\n  LU: \"Luxembourg\",\n  MO: \"Macao\",\n  MK: \"Macedonia\",\n  MG: \"Madagascar\",\n  MW: \"Malawi\",\n  MY: \"Malaysia\",\n  MV: \"Maldives\",\n  ML: \"Mali\",\n  MT: \"Malta\",\n  MH: \"Marshall Islands\",\n  MQ: \"Martinique\",\n  MR: \"Mauritania\",\n  MU: \"Mauritius\",\n  YT: \"Mayotte\",\n  MX: \"Mexico\",\n  FM: \"Micronesia, Federated States Of\",\n  MD: \"Moldova\",\n  MC: \"Monaco\",\n  MN: \"Mongolia\",\n  ME: \"Montenegro\",\n  MS: \"Montserrat\",\n  MA: \"Morocco\",\n  MZ: \"Mozambique\",\n  MM: \"Myanmar\",\n  NA: \"Namibia\",\n  NR: \"Nauru\",\n  NP: \"Nepal\",\n  NL: \"Netherlands\",\n  AN: \"Netherlands Antilles\",\n  NC: \"New Caledonia\",\n  NZ: \"New Zealand\",\n  NI: \"Nicaragua\",\n  NE: \"Niger\",\n  NG: \"Nigeria\",\n  NU: \"Niue\",\n  NF: \"Norfolk Island\",\n  MP: \"Northern Mariana Islands\",\n  NO: \"Norway\",\n  OM: \"Oman\",\n  PK: \"Pakistan\",\n  PW: \"Palau\",\n  PS: \"Palestinian Territory, Occupied\",\n  PA: \"Panama\",\n  PG: \"Papua New Guinea\",\n  PY: \"Paraguay\",\n  PE: \"Peru\",\n  PH: \"Philippines\",\n  PN: \"Pitcairn\",\n  PL: \"Poland\",\n  PT: \"Portugal\",\n  PR: \"Puerto Rico\",\n  QA: \"Qatar\",\n  RE: \"Reunion\",\n  RO: \"Romania\",\n  RU: \"Russian Federation\",\n  RW: \"Rwanda\",\n  BL: \"Saint Barthelemy\",\n  SH: \"Saint Helena\",\n  KN: \"Saint Kitts And Nevis\",\n  LC: \"Saint Lucia\",\n  MF: \"Saint Martin\",\n  PM: \"Saint Pierre And Miquelon\",\n  VC: \"Saint Vincent And Grenadines\",\n  WS: \"Samoa\",\n  SM: \"San Marino\",\n  ST: \"Sao Tome And Principe\",\n  SA: \"Saudi Arabia\",\n  SN: \"Senegal\",\n  RS: \"Serbia\",\n  SC: \"Seychelles\",\n  SL: \"Sierra Leone\",\n  SG: \"Singapore\",\n  SK: \"Slovakia\",\n  SI: \"Slovenia\",\n  SB: \"Solomon Islands\",\n  SO: \"Somalia\",\n  ZA: \"South Africa\",\n  GS: \"South Georgia And Sandwich Isl.\",\n  ES: \"Spain\",\n  LK: \"Sri Lanka\",\n  SD: \"Sudan\",\n  SR: \"Suriname\",\n  SJ: \"Svalbard And Jan Mayen\",\n  SZ: \"Swaziland\",\n  SE: \"Sweden\",\n  CH: \"Switzerland\",\n  SY: \"Syrian Arab Republic\",\n  TW: \"Taiwan\",\n  TJ: \"Tajikistan\",\n  TZ: \"Tanzania\",\n  TH: \"Thailand\",\n  TL: \"Timor-Leste\",\n  TG: \"Togo\",\n  TK: \"Tokelau\",\n  TO: \"Tonga\",\n  TT: \"Trinidad And Tobago\",\n  TN: \"Tunisia\",\n  TR: \"Turkey\",\n  TM: \"Turkmenistan\",\n  TC: \"Turks And Caicos Islands\",\n  TV: \"Tuvalu\",\n  UG: \"Uganda\",\n  UA: \"Ukraine\",\n  AE: \"United Arab Emirates\",\n  GB: \"United Kingdom\",\n  US: \"United States\",\n  UM: \"United States Outlying Islands\",\n  UY: \"Uruguay\",\n  UZ: \"Uzbekistan\",\n  VU: \"Vanuatu\",\n  VE: \"Venezuela\",\n  VN: \"Viet Nam\",\n  VG: \"Virgin Islands, British\",\n  VI: \"Virgin Islands, U.S.\",\n  WF: \"Wallis And Futuna\",\n  EH: \"Western Sahara\",\n  YE: \"Yemen\",\n  ZM: \"Zambia\",\n  ZW: \"Zimbabwe\",\n};\n\nvar api = \"https://fcc-weather-api.glitch.me/api/current?\";\n\n$(document).ready(function () {\n  var tempIsF = false;\n  var lat;\n  var lon;\n\n  if (navigator.geolocation) {\n    navigator.geolocation.getCurrentPosition(function (position) {\n      lat = \"lat=\" + position.coords.latitude;\n      lon = \"lon=\" + position.coords.longitude;\n      getData(lat, lon);\n    });\n  } else {\n    alert(\"Your browser doesn't supoort geo location.\");\n  }\n\n  $(\".card__footer--deg\").click(function () {\n    tempIsF = !tempIsF;\n    var deg = parseInt($(\".card__footer--temp\").text());\n    var changeNum = 0;\n    var changeChar = \"°C\";\n\n    if (tempIsF) {\n      change = (deg * 9) / 5 + 32;\n      changeChar = \"°F\";\n    } else {\n      change = (deg - 32) / 1.8;\n      changeChar = \"°C\";\n    }\n    $(\".card__footer--temp\").text(parseInt(change));\n    $(\".card__footer--deg\").text(changeChar);\n  });\n});\n\nfunction getData(lat, lon) {\n  $.get(api + lat + \"&\" + lon, function (data, status) {\n    if (status == \"success\") {\n      $(\".card>div\").removeClass(\"hide\");\n      $(\".loader\").addClass(\"hide\");\n\n      var weatherObj = data;\n      var weatherDes = data[\"weather\"][0][\"main\"];\n      var weatherTemp = data[\"main\"][\"temp\"];\n      var weatherCountry = data[\"sys\"][\"country\"];\n      var weatherPlace = data[\"name\"];\n\n      if (isoCountries.hasOwnProperty(weatherCountry)) {\n        weatherCountry = isoCountries[weatherCountry];\n      }\n      $(\".card__description--des\").text(weatherDes);\n      IconGen(weatherDes);\n      $(\".card__footer--temp\").text(parseInt(weatherTemp));\n      $(\".card__heading--place\").text(weatherPlace);\n      $(\".card__heading--country\").text(weatherCountry);\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });