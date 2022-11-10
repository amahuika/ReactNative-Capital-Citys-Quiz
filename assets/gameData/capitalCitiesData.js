const capitalCitiesData = [
  {
    country: "Afghanistan",
    capital: "Kabul",
    continent: "Asia",
  },
  {
    country: "Albania",
    capital: "Tirana",
    continent: "Europe",
  },
  {
    country: "Algeria",
    capital: "Algiers",
    continent: "Africa",
  },
  {
    country: "Andorra",
    capital: "Andorra la Vella",
    continent: "Europe",
  },
  {
    country: "Angola",
    capital: "Luanda",
    continent: "Africa",
  },
  {
    country: "Antigua and Barbuda",
    capital: "St. John's",
    continent: "America",
  },
  {
    country: "Argentina",
    capital: "Buenos Aires",
    continent: "America",
  },
  {
    country: "Armenia",
    capital: "Yerevan",
    continent: "Asia",
  },
  {
    country: "Australia",
    capital: "Canberra",
    continent: "Oceania",
  },
  {
    country: "Austria",
    capital: "Vienna",
    continent: "Europe",
  },
  {
    country: "Azerbaijan",
    capital: "Baku",
    continent: "Asia",
  },
  {
    country: "Bahamas",
    capital: "Nassau",
    continent: "America",
  },
  {
    country: "Bahrain",
    capital: "Manama",
    continent: "Asia",
  },
  {
    country: "Bangladesh",
    capital: "Dhaka",
    continent: "Asia",
  },
  {
    country: "Barbados",
    capital: "Bridgetown",
    continent: "America",
  },
  {
    country: "Belarus",
    capital: "Minsk",
    continent: "Europe",
  },
  {
    country: "Belgium",
    capital: "Brussels",
    continent: "Europe",
  },
  {
    country: "Belize",
    capital: "Belmopan",
    continent: "America",
  },
  {
    country: "Benin",
    capital: "Porto Novo",
    continent: "Africa",
  },
  {
    country: "Bhutan",
    capital: "Thimphu",
    continent: "Asia",
  },
  {
    country: "Bolivia",
    capital: "Sucre",
    continent: "America",
  },
  {
    country: "Bosnia and Herzegovina",
    capital: "Sarajevo",
    continent: "Europe",
  },
  {
    country: "Botswana",
    capital: "Gaborone",
    continent: "Africa",
  },
  {
    country: "Brazil",
    capital: "Brasilia",
    continent: "America",
  },
  {
    country: "Brunei",
    capital: "Bandar Seri Begawan",
    continent: "Asia",
  },
  {
    country: "Bulgaria",
    capital: "Sofia",
    continent: "Europe",
  },
  {
    country: "Burkina Faso",
    capital: "Ouagadougou",
    continent: "Africa",
  },
  {
    country: "Burundi",
    capital: "Bujumbura",
    continent: "Africa",
  },
  {
    country: "Cambodia",
    capital: "Phnom Penh",
    continent: "Asia",
  },
  {
    country: "Cameroon",
    capital: "Yaoundé",
    continent: "Africa",
  },
  {
    country: "Canada",
    capital: "Ottawa",
    continent: "America",
  },
  {
    country: "Cape Verde",
    capital: "Praia",
    continent: "Africa",
  },
  {
    country: "Central African Republic",
    capital: "Bangui",
    continent: "Africa",
  },
  {
    country: "Chad",
    capital: "N'Djamena",
    continent: "Africa",
  },
  {
    country: "Chile",
    capital: "Santiago",
    continent: "America",
  },
  {
    country: "China",
    capital: "Beijing",
    continent: "Asia",
  },
  {
    country: "Colombia",
    capital: "Bogota",
    continent: "America",
  },
  {
    country: "Comoros",
    capital: "Moroni",
    continent: "Africa",
  },
  {
    country: "Costa Rica",
    capital: "San José",
    continent: "America",
  },
  {
    country: "Croatia",
    capital: "Zagreb",
    continent: "Europe",
  },
  {
    country: "Cuba",
    capital: "Havana",
    continent: "America",
  },
  {
    country: "Cyprus",
    capital: "Nicosia",
    continent: "Europe",
  },
  {
    country: "Czech Republic",
    capital: "Prague",
    continent: "Europe",
  },
  {
    country: "Democratic Republic of Congo",
    capital: "Kinshasa",
    continent: "Africa",
  },
  {
    country: "Denmark",
    capital: "Copenagen",
    continent: "Europe",
  },
  {
    country: "Djibouti",
    capital: "Djibouti",
    continent: "Africa",
  },
  {
    country: "Dominica",
    capital: "Roseau",
    continent: "America",
  },
  {
    country: "Dominican Republic",
    capital: "Santo Domingo",
    continent: "America",
  },
  {
    country: "East Timor",
    capital: "Dili",
    continent: "Oceania",
  },
  {
    country: "Ecuador",
    capital: "Quito",
    continent: "America",
  },
  {
    country: "Egypt",
    capital: "Cairo",
    continent: "Africa",
  },
  {
    country: "El Salvador",
    capital: "San Salvador",
    continent: "America",
  },
  {
    country: "Equatorial Guinea",
    capital: "Malabo",
    continent: "Africa",
  },
  {
    country: "Eritrea",
    capital: "Asmara",
    continent: "Africa",
  },
  {
    country: "Estonia",
    capital: "Tallinn",
    continent: "Europe",
  },
  {
    country: "Eswatini",
    capital: "Mbabane",
    continent: "Africa",
  },
  {
    country: "Ethiopia",
    capital: "Addis Ababa",
    continent: "Africa",
  },
  {
    country: "Fiji",
    capital: "Suva",
    continent: "Oceania",
  },
  {
    country: "Finland",
    capital: "Helsinki",
    continent: "Europe",
  },
  {
    country: "France",
    capital: "Paris",
    continent: "Europe",
  },
  {
    country: "Gabon",
    capital: "Libreville",
    continent: "Africa",
  },
  {
    country: "Gambia",
    capital: "Banjul",
    continent: "Africa",
  },
  {
    country: "Georgia",
    capital: "Tbilisi",
    continent: "Asia",
  },
  {
    country: "Germany",
    capital: "Berlin",
    continent: "Europe",
  },
  {
    country: "Ghana",
    capital: "Accra",
    continent: "Africa",
  },
  {
    country: "Greece",
    capital: "Athens",
    continent: "Europe",
  },
  {
    country: "Grenada",
    capital: "St. George's",
    continent: "America",
  },
  {
    country: "Guatemala",
    capital: "Guatemala City",
    continent: "America",
  },
  {
    country: "Guinea",
    capital: "Conakry",
    continent: "Africa",
  },
  {
    country: "Guinea-Bissau",
    capital: "Bissau",
    continent: "Africa",
  },
  {
    country: "Guyana",
    capital: "Georgetown",
    continent: "America",
  },
  {
    country: "Haiti",
    capital: "Port-au-Prince",
    continent: "America",
  },
  {
    country: "Honduras",
    capital: "Tegucigalpa",
    continent: "America",
  },
  {
    country: "Hungary",
    capital: "Budapest",
    continent: "Europe",
  },
  {
    country: "Iceland",
    capital: "Reykjavík",
    continent: "Europe",
  },
  {
    country: "India",
    capital: "New Delhi",
    continent: "Asia",
  },
  {
    country: "Indonesia",
    capital: "Jakarta",
    continent: "Asia",
  },
  {
    country: "Iran",
    capital: "Tehran",
    continent: "Asia",
  },
  {
    country: "Iraq",
    capital: "Baghdad",
    continent: "Asia",
  },
  {
    country: "Ireland",
    capital: "Dublin",
    continent: "Europe",
  },
  {
    country: "Israel",
    capital: "Jerusalem",
    continent: "Asia",
  },
  {
    country: "Italy",
    capital: "Rome",
    continent: "Europe",
  },
  {
    country: "Ivory Coast",
    capital: "Yamoussoukro",
    continent: "Africa",
  },
  {
    country: "Jamaica",
    capital: "Kingston",
    continent: "America",
  },
  {
    country: "Japan",
    capital: "Tokyo",
    continent: "Asia",
  },
  {
    country: "Jordan",
    capital: "Amman",
    continent: "Asia",
  },
  {
    country: "Kazakhstan",
    capital: "Astana",
    continent: "Asia",
  },
  {
    country: "Kenya",
    capital: "Nairobi",
    continent: "Africa",
  },
  {
    country: "Kiribati",
    capital: "Tarawa",
    continent: "Oceania",
  },
  {
    country: "Korea, North",
    capital: "Pyongyang",
    continent: "Asia",
  },
  {
    country: "Korea, South",
    capital: "Seoul",
    continent: "Asia",
  },
  {
    country: "Kosovo",
    capital: "Pristina",
    continent: "Europe",
  },
  {
    country: "Kuwait",
    capital: "Kuwait City",
    continent: "Asia",
  },
  {
    country: "Kyrgyzstan",
    capital: "Bishkek",
    continent: "Asia",
  },
  {
    country: "Laos",
    capital: "Vientiane",
    continent: "Asia",
  },
  {
    country: "Latvia",
    capital: "Riga",
    continent: "Europe",
  },
  {
    country: "Lebanon",
    capital: "Beirut",
    continent: "Asia",
  },
  {
    country: "Lesotho",
    capital: "Maseru",
    continent: "Africa",
  },
  {
    country: "Liberia",
    capital: "Monrovia",
    continent: "Africa",
  },
  {
    country: "Libya",
    capital: "Tripoli",
    continent: "Africa",
  },
  {
    country: "Liechtenstein",
    capital: "Vaduz",
    continent: "Europe",
  },
  {
    country: "Lithuania",
    capital: "Vilnius",
    continent: "Europe",
  },
  {
    country: "Luxembourg",
    capital: "Luxembourg",
    continent: "Europe",
  },
  {
    country: "Madagascar",
    capital: "Antananarivo",
    continent: "Africa",
  },
  {
    country: "Malawi",
    capital: "Lilongwe",
    continent: "Africa",
  },
  {
    country: "Malaysia",
    capital: "Kuala Lumpur",
    continent: "Asia",
  },
  {
    country: "Maldives",
    capital: "Malé",
    continent: "Asia",
  },
  {
    country: "Mali",
    capital: "Bamako",
    continent: "Africa",
  },
  {
    country: "Malta",
    capital: "Valletta",
    continent: "Europe",
  },
  {
    country: "Marshall Islands",
    capital: "Majuro",
    continent: "Oceania",
  },
  {
    country: "Mauritania",
    capital: "Nouakchott",
    continent: "Africa",
  },
  {
    country: "Mauritius",
    capital: "Port Louis",
    continent: "Africa",
  },
  {
    country: "Mexico",
    capital: "Mexico City",
    continent: "America",
  },
  {
    country: "Micronesia",
    capital: "Palikir",
    continent: "Oceania",
  },
  {
    country: "Moldova",
    capital: "Chisinau",
    continent: "Europe",
  },
  {
    country: "Monaco",
    capital: "Monaco",
    continent: "Europe",
  },
  {
    country: "Mongolia",
    capital: "Ulaanbaatar",
    continent: "Asia",
  },
  {
    country: "Montenegro",
    capital: "Podgorica",
    continent: "Europe",
  },
  {
    country: "Morocco",
    capital: "Rabat",
    continent: "Africa",
  },
  {
    country: "Mozambique",
    capital: "Maputo",
    continent: "Africa",
  },
  {
    country: "Myanmar",
    capital: "Naypyidaw",
    continent: "Asia",
  },
  {
    country: "Namibia",
    capital: "Windhoek",
    continent: "Africa",
  },
  {
    country: "Nauru",
    capital: "Yaren",
    continent: "Oceania",
  },
  {
    country: "Nepal",
    capital: "Kathmandu",
    continent: "Asia",
  },
  {
    country: "Netherlands",
    capital: "Amsterdam",
    continent: "Europe",
  },
  {
    country: "New Zealand",
    capital: "Wellington",
    continent: "Oceania",
  },
  {
    country: "Nicaragua",
    capital: "Managua",
    continent: "America",
  },
  {
    country: "Niger",
    capital: "Niamey",
    continent: "Africa",
  },
  {
    country: "Nigeria",
    capital: "Abuja",
    continent: "Africa",
  },
  {
    country: "North Macedonia",
    capital: "Skopje",
    continent: "Europe",
  },
  {
    country: "Norway",
    capital: "Oslo",
    continent: "Europe",
  },
  {
    country: "Oman",
    capital: "Muscat",
    continent: "Asia",
  },
  {
    country: "Pakistan",
    capital: "Islamabad",
    continent: "Asia",
  },
  {
    country: "Palau",
    capital: "Melekeok",
    continent: "Oceania",
  },
  {
    country: "Palestine",
    capital: "East Jerusalem",
    continent: "Asia",
  },
  {
    country: "Panama",
    capital: "Panama City",
    continent: "America",
  },
  {
    country: "Papua New Guinea",
    capital: "Port Moresby",
    continent: "Oceania",
  },
  {
    country: "Paraguay",
    capital: "Asunción",
    continent: "America",
  },
  {
    country: "Peru",
    capital: "Lima",
    continent: "America",
  },
  {
    country: "Philippines",
    capital: "Manila",
    continent: "Asia",
  },
  {
    country: "Poland",
    capital: "Warsaw",
    continent: "Europe",
  },
  {
    country: "Portugal",
    capital: "Lisbon",
    continent: "Europe",
  },
  {
    country: "Qatar",
    capital: "Doha",
    continent: "Asia",
  },
  {
    country: "Republic of the Congo",
    capital: "Brazzaville",
    continent: "Africa",
  },
  {
    country: "Romania",
    capital: "Bucharest",
    continent: "Europe",
  },
  {
    country: "Russia",
    capital: "Moscow",
    continent: "Europe",
  },
  {
    country: "Rwanda",
    capital: "Kigali",
    continent: "Africa",
  },
  {
    country: "Saint Kitts and Nevis",
    capital: "Basseterre",
    continent: "America",
  },
  {
    country: "Saint Lucia",
    capital: "Castries",
    continent: "America",
  },
  {
    country: "Saint Vincent and the Grenadines",
    capital: "Kingstown",
    continent: "America",
  },

  {
    country: "Samoa",
    capital: "Apia",
    continent: "Oceania",
  },
  {
    country: "San Marino",
    capital: "San Marino",
    continent: "Europe",
  },
  {
    country: "São Tomé and Príncipe",
    capital: "São Tomé",
    continent: "Africa",
  },
  {
    country: "Saudi Arabia",
    capital: "Riyadh",
    continent: "Asia",
  },
  {
    country: "Senegal",
    capital: "Dakar",
    continent: "Africa",
  },
  {
    country: "Serbia",
    capital: "Belgrade",
    continent: "Europe",
  },
  {
    country: "Seychelles",
    capital: "Victoria",
    continent: "Africa",
  },
  {
    country: "Sierra Leone",
    capital: "Freetown",
    continent: "Africa",
  },
  {
    country: "Singapore",
    capital: "Singapore",
    continent: "Asia",
  },
  {
    country: "Slovakia",
    capital: "Bratislava",
    continent: "Europe",
  },
  {
    country: "Slovenia",
    capital: "Ljubljana",
    continent: "Europe",
  },
  {
    country: "Solomon Islands",
    capital: "Honiara",
    continent: "Oceania",
  },
  {
    country: "Somalia",
    capital: "Mogadishu",
    continent: "Africa",
  },
  {
    country: "South Africa",
    capital: "Pretoria",
    continent: "Africa",
  },
  {
    country: "South Sudan",
    capital: "Juba",
    continent: "Africa",
  },
  {
    country: "Spain",
    capital: "Madrid",
    continent: "Europe",
  },
  {
    country: "Sri Lanka",
    capital: "Sri Jayawardenapura Kotte",
    continent: "Asia",
  },
  {
    country: "Sudan",
    capital: "Khartoum",
    continent: "Africa",
  },
  {
    country: "Suriname",
    capital: "Paramaribo",
    continent: "America",
  },
  {
    country: "Sweden",
    capital: "Stockholm",
    continent: "Europe",
  },
  {
    country: "Switzerland",
    capital: "Bern",
    continent: "Europe",
  },
  {
    country: "Syria",
    capital: "Damascus",
    continent: "Asia",
  },
  {
    country: "Taiwan",
    capital: "Taipei",
    continent: "Asia",
  },
  {
    country: "Tajikistan",
    capital: "Dushanbe",
    continent: "Asia",
  },
  {
    country: "Tanzania",
    capital: "Dodoma",
    continent: "Africa",
  },
  {
    country: "Thailand",
    capital: "Bangkok",
    continent: "Asia",
  },
  {
    country: "Togo",
    capital: "Lomé",
    continent: "Africa",
  },
  {
    country: "Tonga",
    capital: "Nukualofa",
    continent: "Oceania",
  },
  {
    country: "Trinidad and Tobago",
    capital: "Port of Spain",
    continent: "America",
  },
  {
    country: "Tunisia",
    capital: "Tunis",
    continent: "Africa",
  },
  {
    country: "Turkey",
    capital: "Ankara",
    continent: "Asia",
  },
  {
    country: "Turkmenistan",
    capital: "Ashgabat",
    continent: "Asia",
  },
  {
    country: "Tuvalu",
    capital: "Funafuti",
    continent: "Oceania",
  },
  {
    country: "Uganda",
    capital: "Kampala",
    continent: "Africa",
  },
  {
    country: "Ukraine",
    capital: "Kiev",
    continent: "Europe",
  },
  {
    country: "United Arab Emirates",
    capital: "Abu Dhabi",
    continent: "Asia",
  },
  {
    country: "United Kingdom",
    capital: "London",
    continent: "Europe",
  },
  {
    country: "United States",
    capital: "Washington D.C.",
    continent: "America",
  },
  {
    country: "Uruguay",
    capital: "Montevideo",
    continent: "America",
  },
  {
    country: "Uzbekistan",
    capital: "Tashkent",
    continent: "Asia",
  },
  {
    country: "Vanuatu",
    capital: "Port Vila",
    continent: "Oceania",
  },
  {
    country: "Vatican City",
    capital: "Vatican City",
    continent: "Europe",
  },
  {
    country: "Venezuela",
    capital: "Caracas",
    continent: "America",
  },
  {
    country: "Vietnam",
    capital: "Hanoi",
    continent: "Asia",
  },
  {
    country: "Yemen",
    capital: "Sana'a",
    continent: "Asia",
  },
  {
    country: "Zambia",
    capital: "Lusaka",
    continent: "Africa",
  },
  {
    country: "Zimbabwe",
    capital: "Harare",
    continent: "Africa",
  },
];

export default capitalCitiesData;
