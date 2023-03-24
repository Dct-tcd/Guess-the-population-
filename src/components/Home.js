import React, { useEffect, useState } from "react";
import numberToWords from "number-to-words";
const Home = () => {
  const [data, setdata] = useState([
    {
      country: "Afghanistan",
      population: 37172386,
    },
    {
      country: "Albania",
      population: 2866376,
    },
    {
      country: "Algeria",
      population: 42228429,
    },
    {
      country: "Andorra",
      population: 77006,
    },
    {
      country: "Angola",
      population: 30809762,
    },
    {
      country: "Antarctica",
      population: 1106,
    },
    {
      country: "Antigua and Barbuda",
      population: 96286,
    },
    {
      country: "Argentina",
      population: 44494502,
    },
    {
      country: "Armenia",
      population: 2951776,
    },
    {
      country: "Australia",
      population: 24982688,
    },
    {
      country: "Austria",
      population: 8840521,
    },
    {
      country: "Azerbaijan",
      population: 9939800,
    },
    {
      country: "Bahamas",
      population: 385640,
    },
    {
      country: "Bahrain",
      population: 1569439,
    },
    {
      country: "Bangladesh",
      population: 161356039,
    },
    {
      country: "Barbados",
      population: 286641,
    },
    {
      country: "Belarus",
      population: 9483499,
    },
    {
      country: "Belgium",
      population: 11433256,
    },
    {
      country: "Bermuda",
      population: 63973,
    },
    {
      country: "Bhutan",
      population: 754394,
    },
    {
      country: "Bolivia",
      population: 11353142,
    },
    {
      country: "Botswana",
      population: 2254126,
    },
    {
      country: "Brazil",
      population: 209469333,
    },
    {
      country: "Bulgaria",
      population: 7025037,
    },
    {
      country: "Burkina Faso",
      population: 19751535,
    },
    {
      country: "Burundi",
      population: 11175378,
    },
    {
      country: "Cambodia",
      population: 16249798,
    },
    {
      country: "Cameroon",
      population: 25216237,
    },
    {
      country: "Canada",
      population: 37057765,
    },
    {
      country: "Central African Republic",
      population: 4666377,
    },
    {
      country: "Chad",
      population: 15477751,
    },
    {
      country: "Chile",
      population: 18729160,
    },
    {
      country: "China",
      population: 1392730000,
    },
    {
      country: "Colombia",
      population: 49648685,
    },
    {
      country: "Congo",
      population: 5244363,
    },
    {
      country: "Costa Rica",
      population: 4999441,
    },
    {
      country: "Croatia",
      population: 4087843,
    },
    {
      country: "Cuba",
      population: 11338138,
    },
    {
      country: "Cyprus",
      population: 1189265,
    },
    {
      country: "Czech Republic",
      population: 10629928,
    },
    {
      country: "Denmark",
      population: 5793636,
    },
    {
      country: "Djibouti",
      population: 958920,
    },
    {
      country: "Dominica",
      population: 71625,
    },
    {
      country: "Dominican Republic",
      population: 10627165,
    },
    {
      country: "East Timor",
      population: 1267972,
    },
    {
      country: "Ecuador",
      population: 17084357,
    },
    {
      country: "Egypt",
      population: 98423595,
    },
    {
      country: "El Salvador",
      population: 6420744,
    },
    {
      country: "England",
      population: 55619400,
    },
    {
      country: "Equatorial Guinea",
      population: 1308974,
    },
    {
      country: "Eritrea",
      population: 6213972,
    },
    {
      country: "Estonia",
      population: 1321977,
    },
    {
      country: "Ethiopia",
      population: 109224559,
    },
    {
      country: "Fiji Islands",
      population: 883483,
    },
    {
      country: "Finland",
      population: 5515525,
    },
    {
      country: "France",
      population: 66977107,
    },
    {
      country: "French Guiana",
      population: 290691,
    },
    {
      country: "French Polynesia",
      population: 277679,
    },
    {
      country: "Gabon",
      population: 2119275,
    },
    {
      country: "Gambia",
      population: 2280102,
    },
    {
      country: "Georgia",
      population: 3726549,
    },
    {
      country: "Germany",
      population: 82905782,
    },
    {
      country: "Ghana",
      population: 29767108,
    },
    {
      country: "Gibraltar",
      population: 33718,
    },
    {
      country: "Greece",
      population: 10731726,
    },
    {
      country: "Greenland",
      population: 56025,
    },
    {
      country: "Grenada",
      population: 111454,
    },
    {
      country: "Guadeloupe",
      population: 395700,
    },
    {
      country: "Guam",
      population: 165768,
    },
    {
      country: "Guatemala",
      population: 17247807,
    },
    {
      country: "Guinea",
      population: 12414318,
    },
    {
      country: "Guinea-Bissau",
      population: 1874309,
    },
    {
      country: "Guyana",
      population: 779004,
    },
    {
      country: "Haiti",
      population: 11123176,
    },
    {
      country: "Vatican City",
      population: 825,
    },
    {
      country: "Honduras",
      population: 9587522,
    },
    {
      country: "Hong Kong",
      population: 7451000,
    },
    {
      country: "Hungary",
      population: 9775564,
    },
    {
      country: "Iceland",
      population: 352721,
    },
    {
      country: "India",
      population: 1352617328,
    },
    {
      country: "Indonesia",
      population: 267663435,
    },
    {
      country: "Iran",
      population: 81800269,
    },
    {
      country: "Iraq",
      population: 38433600,
    },
    {
      country: "Ireland",
      population: 4867309,
    },
    {
      country: "Israel",
      population: 8882800,
    },
    {
      country: "Italy",
      population: 60421760,
    },
    {
      country: "Jamaica",
      population: 2934855,
    },
    {
      country: "Japan",
      population: 126529100,
    },
    {
      country: "Jordan",
      population: 9956011,
    },
    {
      country: "Kazakhstan",
      population: 18272430,
    },
    {
      country: "Kenya",
      population: 51393010,
    },
    {
      country: "Kiribati",
      population: 115847,
    },
    {
      country: "Kuwait",
      population: 4137309,
    },
    {
      country: "Kyrgyzstan",
      population: 6322800,
    },
    {
      country: "Laos",
      population: 7061507,
    },
    {
      country: "Latvia",
      population: 1927174,
    },
    {
      country: "Lebanon",
      population: 6848925,
    },
    {
      country: "Lesotho",
      population: 2108132,
    },
    {
      country: "Liberia",
      population: 4818977,
    },
    {
      country: "Libya",
      population: 6678567,
    },
    {
      country: "Liechtenstein",
      population: 37910,
    },
    {
      country: "Lithuania",
      population: 2801543,
    },
    {
      country: "Luxembourg",
      population: 607950,
    },
    {
      country: "Macao",
      population: 631636,
    },
    {
      country: "North Macedonia",
      population: 2084367,
    },
    {
      country: "Madagascar",
      population: 26262368,
    },
    {
      country: "Malawi",
      population: 18143315,
    },
    {
      country: "Malaysia",
      population: 31528585,
    },
    {
      country: "Maldives",
      population: 515696,
    },
    {
      country: "Mali",
      population: 19077690,
    },
    {
      country: "Malta",
      population: 484630,
    },
    {
      country: "Mauritania",
      population: 4403319,
    },
    {
      country: "Mauritius",
      population: 1265303,
    },
    {
      country: "Mexico",
      population: 126190788,
    },
    {
      country: "Moldova",
      population: 2706049,
    },
    {
      country: "Mongolia",
      population: 3170208,
    },
    {
      country: "Montenegro",
      population: 631219,
    },
    {
      country: "Morocco",
      population: 36029138,
    },
    {
      country: "Mozambique",
      population: 29495962,
    },
    {
      country: "Myanmar",
      population: 53708395,
    },
    {
      country: "Namibia",
      population: 2448255,
    },
    {
      country: "Nepal",
      population: 28087871,
    },
    {
      country: "Netherlands",
      population: 17231624,
    },
    {
      country: "New Caledonia",
      population: 284060,
    },
    {
      country: "New Zealand",
      population: 4841000,
    },
    {
      country: "Nicaragua",
      population: 6465513,
    },
    {
      country: "Niger",
      population: 22442948,
    },
    {
      country: "Nigeria",
      population: 195874740,
    },
    {
      country: "North korea",
      population: 25549819,
    },
    {
      country: "Norway",
      population: 5311916,
    },
    {
      country: "Oman",
      population: 4829483,
    },
    {
      country: "Pakistan",
      population: 212215030,
    },
    {
      country: "Palestine",
      population: 4569087,
    },
    {
      country: "Panama",
      population: 4176873,
    },
    {
      country: "Papua New Guinea",
      population: 8606316,
    },
    {
      country: "Paraguay",
      population: 6956071,
    },
    {
      country: "Peru",
      population: 31989256,
    },
    {
      country: "Philippines",
      population: 106651922,
    },
    {
      country: "Poland",
      population: 37974750,
    },
    {
      country: "Portugal",
      population: 10283822,
    },
    {
      country: "Puerto Rico",
      population: 3195153,
    },
    {
      country: "Qatar",
      population: 2781677,
    },
    {
      country: "Reunion",
      population: 859959,
    },
    {
      country: "Romania",
      population: 19466145,
    },
    {
      country: "Russia",
      population: 144478050,
    },
    {
      country: "Rwanda",
      population: 12301939,
    },
    {
      country: "Saint Kitts and Nevis",
      population: 52441,
    },
    {
      country: "Saint Lucia",
      population: 181889,
    },
    {
      country: "Saint Vincent and the Grenadines",
      population: 110210,
    },
    {
      country: "Samoa",
      population: 196130,
    },
    {
      country: "San Marino",
      population: 33785,
    },
    {
      country: "Saudi Arabia",
      population: 33699947,
    },
    {
      country: "Scotland",
      population: 5424800,
    },
    {
      country: "Senegal",
      population: 15854360,
    },
    {
      country: "Serbia",
      population: 6963764,
    },
    {
      country: "Seychelles",
      population: 96762,
    },
    {
      country: "Sierra Leone",
      population: 7650154,
    },
    {
      country: "Singapore",
      population: 5638676,
    },
    {
      country: "Slovakia",
      population: 5446771,
    },
    {
      country: "Slovenia",
      population: 2073894,
    },
    {
      country: "Solomon Islands",
      population: 652858,
    },
    {
      country: "Somalia",
      population: 15008154,
    },
    {
      country: "South Africa",
      population: 57779622,
    },
    {
      country: "South Georgia and the South Sandwich Islands",
      population: 30,
    },
    {
      country: "South korea",
      population: 51606633,
    },
    {
      country: "Spain",
      population: 46796540,
    },
    {
      country: "Sri Lanka",
      population: 21670000,
    },
    {
      country: "Sudan",
      population: 41801533,
    },
    {
      country: "Suriname",
      population: 575991,
    },
    {
      country: "Swaziland",
      population: 1136191,
    },
    {
      country: "Sweden",
      population: 10175214,
    },
    {
      country: "Switzerland",
      population: 8513227,
    },
    {
      country: "Syria",
      population: 16906283,
    },
    {
      country: "Tajikistan",
      population: 9100837,
    },
    {
      country: "Tanzania",
      population: 56318348,
    },
    {
      country: "Thailand",
      population: 69428524,
    },
    {
      country: "The Democratic Republic of Congo",
      population: 84068091,
    },
    {
      country: "Tonga",
      population: 103197,
    },
    {
      country: "Trinidad and Tobago",
      population: 1389858,
    },
    {
      country: "Tunisia",
      population: 11565204,
    },
    {
      country: "Turkey",
      population: 82319724,
    },
    {
      country: "Turkmenistan",
      population: 5850908,
    },
    {
      country: "Uganda",
      population: 42723139,
    },
    {
      country: "Ukraine",
      population: 44622516,
    },
    {
      country: "United Arab Emirates",
      population: 9630959,
    },
    {
      country: "United Kingdom",
      population: 66460344,
    },
    {
      country: "United States",
      population: 326687501,
    },

    {
      country: "Uruguay",
      population: 3449299,
    },
    {
      country: "Uzbekistan",
      population: 32955400,
    },
    {
      country: "Vanuatu",
      population: 292680,
    },
    {
      country: "Venezuela",
      population: 28870195,
    },
    {
      country: "Vietnam",
      population: 95540395,
    },
    {
      country: "Wales",
      population: 3139000,
    },

    {
      country: "Yemen",
      population: 28498687,
    },
    {
      country: "Zambia",
      population: 17351822,
    },
    {
      country: "Zimbabwe",
      population: 14439018,
    },
  ]);
  const [streaker, setstreaker] = useState(0);
  const [cont1, setcont1] = useState("");
  const [cont2, setcont2] = useState("");
  const [index1, setindex1] = useState(79);
  const [index2, setindex2] = useState(32);
  const [popu1, setpopu1] = useState(0);
  const [popu2, setpopu2] = useState(0);
  const [user, setuser] = useState("Dev");

  console.log(data.length);
  //   const [code1, setcode1] = useState()
  //   const [code2, setcode2] = useState()
  // let ans=0;
  // for(let i=0;i<data.length;i++)
  //     {
  //   if(data[i].country=="China") console.log(ans);
  //   ans++;
  // }
  // console.log(data.length)
  let codes = [
    { name: "Israel", dial_code: "+972", code: "IL" },
    { name: "Afghanistan", dial_code: "+93", code: "AF" },
    { name: "Albania", dial_code: "+355", code: "AL" },
    { name: "Algeria", dial_code: "+213", code: "DZ" },
    { name: "AmericanSamoa", dial_code: "+1 684", code: "AS" },
    { name: "Andorra", dial_code: "+376", code: "AD" },
    { name: "Angola", dial_code: "+244", code: "AO" },
    { name: "Anguilla", dial_code: "+1 264", code: "AI" },
    { name: "Antigua and Barbuda", dial_code: "+1268", code: "AG" },
    { name: "Argentina", dial_code: "+54", code: "AR" },
    { name: "Armenia", dial_code: "+374", code: "AM" },
    { name: "Aruba", dial_code: "+297", code: "AW" },
    { name: "Australia", dial_code: "+61", code: "AU" },
    { name: "Austria", dial_code: "+43", code: "AT" },
    { name: "Azerbaijan", dial_code: "+994", code: "AZ" },
    { name: "Bahamas", dial_code: "+1 242", code: "BS" },
    { name: "Bahrain", dial_code: "+973", code: "BH" },
    { name: "Bangladesh", dial_code: "+880", code: "BD" },
    { name: "Barbados", dial_code: "+1 246", code: "BB" },
    { name: "Belarus", dial_code: "+375", code: "BY" },
    { name: "Belgium", dial_code: "+32", code: "BE" },
    { name: "Belize", dial_code: "+501", code: "BZ" },
    { name: "Benin", dial_code: "+229", code: "BJ" },
    { name: "Bermuda", dial_code: "+1 441", code: "BM" },
    { name: "Bhutan", dial_code: "+975", code: "BT" },
    { name: "Bosnia and Herzegovina", dial_code: "+387", code: "BA" },
    { name: "Botswana", dial_code: "+267", code: "BW" },
    { name: "Brazil", dial_code: "+55", code: "BR" },
    { name: "British Indian Ocean Territory", dial_code: "+246", code: "IO" },
    { name: "Bulgaria", dial_code: "+359", code: "BG" },
    { name: "Burkina Faso", dial_code: "+226", code: "BF" },
    { name: "Burundi", dial_code: "+257", code: "BI" },
    { name: "Cambodia", dial_code: "+855", code: "KH" },
    { name: "Cameroon", dial_code: "+237", code: "CM" },
    { name: "Canada", dial_code: "+1", code: "CA" },
    { name: "Cape Verde", dial_code: "+238", code: "CV" },
    { name: "Cayman Islands", dial_code: "+ 345", code: "KY" },
    { name: "Central African Republic", dial_code: "+236", code: "CF" },
    { name: "Chad", dial_code: "+235", code: "TD" },
    { name: "Chile", dial_code: "+56", code: "CL" },
    { name: "China", dial_code: "+86", code: "CN" },
    { name: "Christmas Island", dial_code: "+61", code: "CX" },
    { name: "Colombia", dial_code: "+57", code: "CO" },
    { name: "Comoros", dial_code: "+269", code: "KM" },
    { name: "Congo", dial_code: "+242", code: "CG" },
    { name: "Cook Islands", dial_code: "+682", code: "CK" },
    { name: "Costa Rica", dial_code: "+506", code: "CR" },
    { name: "Croatia", dial_code: "+385", code: "HR" },
    { name: "Cuba", dial_code: "+53", code: "CU" },
    { name: "Cyprus", dial_code: "+537", code: "CY" },
    { name: "Czech Republic", dial_code: "+420", code: "CZ" },
    { name: "Denmark", dial_code: "+45", code: "DK" },
    { name: "Djibouti", dial_code: "+253", code: "DJ" },
    { name: "Dominica", dial_code: "+1 767", code: "DM" },
    { name: "Dominican Republic", dial_code: "+1 849", code: "DO" },
    { name: "Ecuador", dial_code: "+593", code: "EC" },
    { name: "Egypt", dial_code: "+20", code: "EG" },
    { name: "El Salvador", dial_code: "+503", code: "SV" },
    { name: "Equatorial Guinea", dial_code: "+240", code: "GQ" },
    { name: "Eritrea", dial_code: "+291", code: "ER" },
    { name: "Estonia", dial_code: "+372", code: "EE" },
    { name: "Ethiopia", dial_code: "+251", code: "ET" },
    { name: "Faroe Islands", dial_code: "+298", code: "FO" },
    { name: "Fiji", dial_code: "+679", code: "FJ" },
    { name: "Finland", dial_code: "+358", code: "FI" },
    { name: "France", dial_code: "+33", code: "FR" },
    { name: "French Guiana", dial_code: "+594", code: "GF" },
    { name: "French Polynesia", dial_code: "+689", code: "PF" },
    { name: "Gabon", dial_code: "+241", code: "GA" },
    { name: "Gambia", dial_code: "+220", code: "GM" },
    { name: "Georgia", dial_code: "+995", code: "GE" },
    { name: "Germany", dial_code: "+49", code: "DE" },
    { name: "Ghana", dial_code: "+233", code: "GH" },
    { name: "Gibraltar", dial_code: "+350", code: "GI" },
    { name: "Greece", dial_code: "+30", code: "GR" },
    { name: "Greenland", dial_code: "+299", code: "GL" },
    { name: "Grenada", dial_code: "+1 473", code: "GD" },
    { name: "Guadeloupe", dial_code: "+590", code: "GP" },
    { name: "Guam", dial_code: "+1 671", code: "GU" },
    { name: "Guatemala", dial_code: "+502", code: "GT" },
    { name: "Guinea", dial_code: "+224", code: "GN" },
    { name: "Guinea-Bissau", dial_code: "+245", code: "GW" },
    { name: "Guyana", dial_code: "+595", code: "GY" },
    { name: "Haiti", dial_code: "+509", code: "HT" },
    { name: "Honduras", dial_code: "+504", code: "HN" },
    { name: "Hungary", dial_code: "+36", code: "HU" },
    { name: "Iceland", dial_code: "+354", code: "IS" },
    { name: "India", dial_code: "+91", code: "IN" },
    { name: "Indonesia", dial_code: "+62", code: "ID" },
    { name: "Iraq", dial_code: "+964", code: "IQ" },
    { name: "Ireland", dial_code: "+353", code: "IE" },
    { name: "Israel", dial_code: "+972", code: "IL" },
    { name: "Italy", dial_code: "+39", code: "IT" },
    { name: "Jamaica", dial_code: "+1 876", code: "JM" },
    { name: "Japan", dial_code: "+81", code: "JP" },
    { name: "Jordan", dial_code: "+962", code: "JO" },
    { name: "Kazakhstan", dial_code: "+7 7", code: "KZ" },
    { name: "Kenya", dial_code: "+254", code: "KE" },
    { name: "Kiribati", dial_code: "+686", code: "KI" },
    { name: "Kuwait", dial_code: "+965", code: "KW" },
    { name: "Kyrgyzstan", dial_code: "+996", code: "KG" },
    { name: "Latvia", dial_code: "+371", code: "LV" },
    { name: "Lebanon", dial_code: "+961", code: "LB" },
    { name: "Lesotho", dial_code: "+266", code: "LS" },
    { name: "Liberia", dial_code: "+231", code: "LR" },
    { name: "Liechtenstein", dial_code: "+423", code: "LI" },
    { name: "Lithuania", dial_code: "+370", code: "LT" },
    { name: "Luxembourg", dial_code: "+352", code: "LU" },
    { name: "Madagascar", dial_code: "+261", code: "MG" },
    { name: "Malawi", dial_code: "+265", code: "MW" },
    { name: "Malaysia", dial_code: "+60", code: "MY" },
    { name: "Maldives", dial_code: "+960", code: "MV" },
    { name: "Mali", dial_code: "+223", code: "ML" },
    { name: "Malta", dial_code: "+356", code: "MT" },
    { name: "Marshall Islands", dial_code: "+692", code: "MH" },
    { name: "Martinique", dial_code: "+596", code: "MQ" },
    { name: "Mauritania", dial_code: "+222", code: "MR" },
    { name: "Mauritius", dial_code: "+230", code: "MU" },
    { name: "Mayotte", dial_code: "+262", code: "YT" },
    { name: "Mexico", dial_code: "+52", code: "MX" },
    { name: "Monaco", dial_code: "+377", code: "MC" },
    { name: "Mongolia", dial_code: "+976", code: "MN" },
    { name: "Montenegro", dial_code: "+382", code: "ME" },
    { name: "Montserrat", dial_code: "+1664", code: "MS" },
    { name: "Morocco", dial_code: "+212", code: "MA" },
    { name: "Myanmar", dial_code: "+95", code: "MM" },
    { name: "Namibia", dial_code: "+264", code: "NA" },
    { name: "Nauru", dial_code: "+674", code: "NR" },
    { name: "Nepal", dial_code: "+977", code: "NP" },
    { name: "Netherlands", dial_code: "+31", code: "NL" },
    { name: "Netherlands Antilles", dial_code: "+599", code: "AN" },
    { name: "New Caledonia", dial_code: "+687", code: "NC" },
    { name: "New Zealand", dial_code: "+64", code: "NZ" },
    { name: "Nicaragua", dial_code: "+505", code: "NI" },
    { name: "Niger", dial_code: "+227", code: "NE" },
    { name: "Nigeria", dial_code: "+234", code: "NG" },
    { name: "Niue", dial_code: "+683", code: "NU" },
    { name: "Norfolk Island", dial_code: "+672", code: "NF" },
    { name: "Northern Mariana Islands", dial_code: "+1 670", code: "MP" },
    { name: "Norway", dial_code: "+47", code: "NO" },
    { name: "Oman", dial_code: "+968", code: "OM" },
    { name: "Pakistan", dial_code: "+92", code: "PK" },
    { name: "Palau", dial_code: "+680", code: "PW" },
    { name: "Panama", dial_code: "+507", code: "PA" },
    { name: "Papua New Guinea", dial_code: "+675", code: "PG" },
    { name: "Paraguay", dial_code: "+595", code: "PY" },
    { name: "Peru", dial_code: "+51", code: "PE" },
    { name: "Philippines", dial_code: "+63", code: "PH" },
    { name: "Poland", dial_code: "+48", code: "PL" },
    { name: "Portugal", dial_code: "+351", code: "PT" },
    { name: "Puerto Rico", dial_code: "+1 939", code: "PR" },
    { name: "Qatar", dial_code: "+974", code: "QA" },
    { name: "Romania", dial_code: "+40", code: "RO" },
    { name: "Rwanda", dial_code: "+250", code: "RW" },
    { name: "Samoa", dial_code: "+685", code: "WS" },
    { name: "San Marino", dial_code: "+378", code: "SM" },
    { name: "Saudi Arabia", dial_code: "+966", code: "SA" },
    { name: "Senegal", dial_code: "+221", code: "SN" },
    { name: "Serbia", dial_code: "+381", code: "RS" },
    { name: "Seychelles", dial_code: "+248", code: "SC" },
    { name: "Sierra Leone", dial_code: "+232", code: "SL" },
    { name: "Singapore", dial_code: "+65", code: "SG" },
    { name: "Slovakia", dial_code: "+421", code: "SK" },
    { name: "Slovenia", dial_code: "+386", code: "SI" },
    { name: "Solomon Islands", dial_code: "+677", code: "SB" },
    { name: "South Africa", dial_code: "+27", code: "ZA" },
    {
      name: "South Georgia and the South Sandwich Islands",
      dial_code: "+500",
      code: "GS",
    },
    { name: "Spain", dial_code: "+34", code: "ES" },
    { name: "Sri Lanka", dial_code: "+94", code: "LK" },
    { name: "Sudan", dial_code: "+249", code: "SD" },
    { name: "Suriname", dial_code: "+597", code: "SR" },
    { name: "Swaziland", dial_code: "+268", code: "SZ" },
    { name: "Sweden", dial_code: "+46", code: "SE" },
    { name: "Switzerland", dial_code: "+41", code: "CH" },
    { name: "Tajikistan", dial_code: "+992", code: "TJ" },
    { name: "Thailand", dial_code: "+66", code: "TH" },
    { name: "Togo", dial_code: "+228", code: "TG" },
    { name: "Tokelau", dial_code: "+690", code: "TK" },
    { name: "Tonga", dial_code: "+676", code: "TO" },
    { name: "Trinidad and Tobago", dial_code: "+1 868", code: "TT" },
    { name: "Tunisia", dial_code: "+216", code: "TN" },
    { name: "Turkey", dial_code: "+90", code: "TR" },
    { name: "Turkmenistan", dial_code: "+993", code: "TM" },
    { name: "Turks and Caicos Islands", dial_code: "+1 649", code: "TC" },
    { name: "Tuvalu", dial_code: "+688", code: "TV" },
    { name: "Uganda", dial_code: "+256", code: "UG" },
    { name: "Ukraine", dial_code: "+380", code: "UA" },
    { name: "United Arab Emirates", dial_code: "+971", code: "AE" },
    { name: "United Kingdom", dial_code: "+44", code: "GB" },
    { name: "England", dial_code: "+44", code: "GB" },
    { name: "United States", dial_code: "+1", code: "US" },
    { name: "Uruguay", dial_code: "+598", code: "UY" },
    { name: "Uzbekistan", dial_code: "+998", code: "UZ" },
    { name: "Vanuatu", dial_code: "+678", code: "VU" },
    { name: "Wallis and Futuna", dial_code: "+681", code: "WF" },
    { name: "Yemen", dial_code: "+967", code: "YE" },
    { name: "Zambia", dial_code: "+260", code: "ZM" },
    { name: "Zimbabwe", dial_code: "+263", code: "ZW" },
    { name: "land Islands", dial_code: "", code: "AX" },
    { name: "Antarctica", dial_code: null, code: "AQ" },
    { name: "Bolivia", dial_code: "+591", code: "BO" },
    { name: "Brunei Darussalam", dial_code: "+673", code: "BN" },
    { name: "Cocos Islands", dial_code: "+61", code: "CC" },
    {
      name: "The Democratic Republic of the Congo",
      dial_code: "+243",
      code: "CD",
    },
    { name: "Cote d'Ivoire", dial_code: "+225", code: "CI" },
    { name: "Falkland Islands (Malvinas)", dial_code: "+500", code: "FK" },
    { name: "Guernsey", dial_code: "+44", code: "GG" },
    { name: "Vatican City ", dial_code: "+379", code: "VA" },
    { name: "Hong Kong", dial_code: "+852", code: "HK" },
    { name: "Iran", dial_code: "+98", code: "IR" },
    { name: "Isle of Man", dial_code: "+44", code: "IM" },
    { name: "Jersey", dial_code: "+44", code: "JE" },
    {
      name: "North korea",
      dial_code: "+850",
      code: "KP",
    },
    { name: "South korea", dial_code: "+82", code: "KR" },
    { name: "Laos", dial_code: "+856", code: "LA" },
    { name: "Libya", dial_code: "+218", code: "LY" },
    { name: "Macao", dial_code: "+853", code: "MO" },
    {
      name: "North Macedonia",
      dial_code: "+389",
      code: "MK",
    },
    { name: "Micronesia, Federated States of", dial_code: "+691", code: "FM" },
    { name: "Moldova", dial_code: "+373", code: "MD" },
    { name: "Mozambique", dial_code: "+258", code: "MZ" },
    { name: "Palestine", dial_code: "+970", code: "PS" },
    { name: "Pitcairn", dial_code: "+872", code: "PN" },
    { name: "Réunion", dial_code: "+262", code: "RE" },
    { name: "Russia", dial_code: "+7", code: "RU" },
    { name: "Saint Barthélemy", dial_code: "+590", code: "BL" },
    {
      name: "Saint Helena, Ascension and Tristan Da Cunha",
      dial_code: "+290",
      code: "SH",
    },
    { name: "Saint Kitts and Nevis", dial_code: "+1 869", code: "KN" },
    { name: "Saint Lucia", dial_code: "+1 758", code: "LC" },
    { name: "Saint Martin", dial_code: "+590", code: "MF" },
    { name: "Saint Pierre and Miquelon", dial_code: "+508", code: "PM" },
    {
      name: "Saint Vincent and the Grenadines",
      dial_code: "+1 784",
      code: "VC",
    },
    { name: "Sao Tome and Principe", dial_code: "+239", code: "ST" },
    { name: "Somalia", dial_code: "+252", code: "SO" },
    { name: "Svalbard ", dial_code: "+47", code: "SJ" },
    { name: "Syria", dial_code: "+963", code: "SY" },
    { name: "Taiwan", dial_code: "+886", code: "TW" },
    { name: "Tanzania", dial_code: "+255", code: "TZ" },
    { name: "East Timor", dial_code: "+670", code: "TL" },
    { name: "Venezuela", dial_code: "+58", code: "VE" },
    { name: "Viet Nam", dial_code: "+84", code: "VN" },
    { name: "Virgin Islands, British", dial_code: "+1 284", code: "VG" },
    { name: "Virgin Islands, U.S.", dial_code: "+1 340", code: "VI" },
  ];

  //   useEffect(() => {
  //  useEffect(() => {
  //    let ans = prompt("Enter your name");
  //     setuser(ans);

  //  }, [])

  const getFlag = (country) => {
    let coder;
    for (let i = 0; i < codes.length; i++) {
      // console.log(codes.name);
      if (codes[i].name == country) coder = codes[i].code;
    }
    // console.log(coder)
    return `https://flagsapi.com/${coder}/shiny/64.png`;
  };

  //    }, [popu1,popu2,index1,index2])

  const validator1 = () => {
    // console.log(index1, index2, data[index1].country, data[index2].country);
    // style={{onhave}}
    let randind1 = parseInt(Math.random() * (196 - 0) + 0);
    let randind2 = parseInt(Math.random() * (196 - 0) + 0);

    //   console.log(index1);

    let val1 = parseInt(data[index1].population),
      val2 = parseInt(data[index2].population);

    // console.log(data[index1].population , data[index2].population)

    if (val1 < val2) {
      setstreaker(streaker + 1);
      while (randind1 == index1 || randind1 == index2) {
        randind1 = parseInt(Math.random() * (196 - 0) + 0);
      }
      setindex2(randind1);
      setcont2(data[index2].country);
    } else {
      setstreaker(0);

      setpopu1(data[index1].population);
      setpopu2(data[index2].population);

      while (
        randind1 == index1 ||
        randind1 == index2 ||
        randind2 == index1 ||
        randind2 == index2 ||
        randind1 == randind2
      ) {
        randind1 = parseInt(Math.random() * (196 - 0) + 0);
        randind2 = parseInt(Math.random() * (196 - 0) + 0);
      }

      setTimeout(() => {
        setindex1(randind1);
        setcont1(data[index1].country);

        setindex2(randind2);
        setcont2(data[index2].country);

        setpopu1(0);
        setpopu2(0);
      }, 3000);
    }
  };
  //   getFlag();
  function Changer(num) {
    var str = num.toString().split(".");
    if (str[0].length >= 5) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
    if (str[1] && str[1].length >= 5) {
      str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    }
    return str.join(".");
  }

  const validator2 = () => {
    let randind1 = parseInt(Math.random() * (196 - 0) + 0);
    let randind2 = parseInt(Math.random() * (196 - 0) + 0);

    let val1 = parseInt(data[index1].population),
      val2 = parseInt(data[index2].population);

    // console.log(data[index1].population, data[index2].population);

    if (val1 > val2) {
      setstreaker(streaker + 1);

      while (randind1 == index1 || randind1 == index2) {
        randind1 = parseInt(Math.random() * (196 - 0) + 0);
      }
      setindex1(randind1);
      setcont1(data[index1].country);
    } else {
      setstreaker(0);
      setpopu1(data[index1].population);
      setpopu2(data[index2].population);

      while (
        randind1 == index1 ||
        randind1 == index2 ||
        randind2 == index1 ||
        randind2 == index2 ||
        randind1 == randind2
      ) {
        randind1 = parseInt(Math.random() * (196 - 0) + 0);
        randind2 = parseInt(Math.random() * (196 - 0) + 0);
      }

      setTimeout(() => {
        setindex1(randind1);
        setcont1(data[index1].country);

        setindex2(randind2);
        setcont2(data[index2].country);
        setpopu1(0);
        setpopu2(0);
      }, 3000);
    }
  };

  if (streaker >= 10) {
    let randind1 = parseInt(Math.random() * (196 - 0) + 0);
    let randind2 = parseInt(Math.random() * (196 - 0) + 0);

    while (
      randind1 == index1 ||
      randind1 == index2 ||
      randind2 == index1 ||
      randind2 == index2 ||
      randind1 == randind2
    ) {
      randind1 = parseInt(Math.random() * (196 - 0) + 0);
      randind2 = parseInt(Math.random() * (196 - 0) + 0);
    }

    setindex1(randind1);
    setcont1(data[index1].country);

    setindex2(randind2);
    setcont2(data[index2].country);
    setpopu1(0);
    setpopu2(0);
    setstreaker(0);
  }

  return (
    <>
      <h1 style={{ marginTop: "4%" }}>
        {" "}
        Which country has Smaller population ?
      </h1>
      <div
        style={{
          marginTop: "4%",
          marginLeft: "8%",
          marginRight: "8%",
          marginBottom: "5%",
          boxShadow: "150px 150px 150px 150px lightblue",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#F8F8FF",
          borderRadius: "20px",
        }}
      >
        <div
          className="Card"
          style={{
            borderColor: "deepskyblue",
            backgroundColor: "lightblue",
            borderStyle: "initial",
            marginLeft: "12%",
            marginRight: "12%",

            margin: "10%",
            padding: "4%",
            borderRadius: "20px",
            cursor: "pointer",
            fontSize: "large",
            boxShadow: "5px 5px lightgrey",
          }}
          onClick={validator1}
        >
          <img
            src={getFlag(data[index1].country)}
            style={{ marginRight: "10px" }}
          ></img>

          {data[index1].country}
          <div style={{ visibility: popu1 == 0 ? "hidden" : "visible" }}>
            {Changer(popu1)}
          </div>
        </div>
        <h3
          style={{
            marginTop: "2%",
            padding: "1px",
            borderRadius: "5px",
            fontStyle: "italic",
            //    display:"flex",
            // border:"inset"
            color:"royalblue"
          }}
        >
          Streak : {streaker}
        </h3>
        <div
          style={{
            borderColor: "magenta",
            backgroundColor: "lightblue",
            borderStyle: "initial",
            margin: "10%",
            marginLeft: "12%",
            marginRight: "12%",

            padding: "4%",
            borderRadius: "20px",
            cursor: "pointer",
            fontSize: "large",
            boxShadow: "5px 5px lightgrey",
          }}
          onClick={validator2}
        >
          <img
            src={getFlag(data[index2].country)}
            style={{ marginRight: "10px" }}
          ></img>

          {data[index2].country}

          <div style={{ visibility: popu2 == 0 ? "hidden" : "visible" }}>
            {Changer(popu2)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
