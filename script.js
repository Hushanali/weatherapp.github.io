// Search active

const searchEl = document.querySelector(".search");
const searchbarEl = document.querySelector(".search-bar-container");
const ErrorEl = document.getElementById("error");

searchEl.addEventListener("click", () => {
  searchbarEl.classList.toggle("active");
});

// weather App

const WeatherApp = {
  Key: "7d70a3b2eefe66a371c4c54795620b44",
  Hosturl: "https://api.openweathermap.org/data/2.5/weather",
};

// search input

const searchInput = document.getElementById("searchinput");

searchInput.addEventListener("keypress", (e) => {
  if (e.target.value && e.key === "Enter") {
    console.log(searchInput.value);
    GetWeather(searchInput.value);
    document.querySelector(".main").style.display = "flex";
    document.querySelector(".weather-info").style.display = "flex";
  }
});

// Get weather

async function GetWeather(city) {
  try {
    await fetch(
      `${WeatherApp.Hosturl}?q=${city}&appid=${WeatherApp.Key}&units=metric`
    )
      .then((weather) => {
        return weather.json();
      })
      .then(showWeather);
  } catch (error) {
    ErrorEl.style.display = "flex";
    ErrorEl.innerHTML = `&#10060 An error happened... Try again later &#128542 &#10071`;
    document.querySelector(".main").style.display = "none";
    document.querySelector(".weather-info").style.display = "none";
  }
}

// show Weather

function showWeather(weather) {
  console.log(weather);

  const WeatherEl = document.getElementById("weatherEl");
  WeatherEl.innerHTML = `<i class="fa-solid fa-cloud"></i>`;

  let weatherType = document.getElementById("weatherType");
  weatherType.innerText = `${weather.weather[0].main}`;

  const mintempEl = document.getElementById("mintempEl");
  mintempEl.innerText = `Min Temperature`;

  const maxtempEl = document.getElementById("maxtempEl");
  maxtempEl.innerText = `Max Temperature`;

  let city = document.getElementById("city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let Temperature = document.getElementById("Temperature");
  Temperature.innerHTML = `${Math.round(weather.main.temp)}&#8451`;

  let minTemp = document.getElementById("min-temp");
  minTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&#8451`;

  let maxTemp = document.getElementById("max-temp");
  maxTemp.innerHTML = `${Math.ceil(weather.main.temp_max)}&#8451`;

  const feelsEl = document.getElementById("feelsEl");
  feelsEl.innerText = `feels like`;

  let feelsTemp = document.getElementById("feelsTemp");
  feelsTemp.innerHTML = `${Math.ceil(weather.main.feels_like)}&#8451`;

  const humidityEl = document.getElementById("humidityEl");
  humidityEl.innerText = `Humidity`;

  let humidityTemp = document.getElementById("humidityTemp");
  humidityTemp.innerHTML = `${Math.ceil(weather.main.humidity)}&#8451`;

  let date = document.getElementById("Date");
  let TodayDate = new Date();
  date.innerText = DateManage(TodayDate);

  if (weatherType.textContent === "Rain") {
    document.body.style.backgroundImage = "url(/images/rain.jpg)";
    WeatherEl.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
  } else if (weatherType.textContent === "Snow") {
    document.body.style.backgroundImage = "url(/images/snow.jpg)";
    WeatherEl.innerHTML = `<i class="fa-solid fa-snowman"></i>`;
  } else if (weatherType.textContent === "Haze") {
    document.body.style.backgroundImage = "url(/images/haze.jpg)";
    WeatherEl.innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`;
  } else if (weatherType.textContent === "Smoke") {
    document.body.style.backgroundImage = "url(/images/haze.jpg)";
  } else if (weatherType.textContent === "sunny") {
    document.body.style.backgroundImage = "url(/images/sunny.jpg)";
    WeatherEl.innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`;
  } else if (weatherType.textContent === "Fog") {
    document.body.style.backgroundImage = "url(/images/fog.jpg)";
  } else if (weatherType.textContent === "Mist") {
    document.body.style.backgroundImage = "url(/images/fog.jpg)";
  } else if (weatherType.textContent === "Clouds") {
    document.body.style.backgroundImage = "url(/images/clouds.jpg)";
  } else if (weatherType.textContent === "Clear") {
    document.body.style.backgroundImage = "url(/images/clear.jpg)";
  }
}

// Date manage

function DateManage(DateList) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let Year = DateList.getFullYear();
  let Month = Months[DateList.getMonth()];
  let date = DateList.getDate();
  let Day = days[DateList.getDay()];

  return `${date} ${Month} ${Day}, ${Year}`;
}

// Date manage End

// onClick cities
// 1
const mumbaiEl = document.getElementById("mumbai");

mumbaiEl.addEventListener("click", () => {
  Getmumbai();
  document.querySelector(".main").style.display = "flex";
  document.querySelector(".weather-info").style.display = "flex";
  searchbarEl.classList.toggle("active");
});

function Getmumbai() {
  fetch(`${WeatherApp.Hosturl}?q=Mumbai&appid=${WeatherApp.Key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeather);
}

// 2
const londonEl = document.getElementById("london");

londonEl.addEventListener("click", () => {
  GetLondon();
  document.querySelector(".main").style.display = "flex";
  document.querySelector(".weather-info").style.display = "flex";
  searchbarEl.classList.toggle("active");
});

function GetLondon() {
  fetch(`${WeatherApp.Hosturl}?q=London&appid=${WeatherApp.Key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeather);
}

// 3
const BerlinEl = document.getElementById("Berlin");

BerlinEl.addEventListener("click", () => {
  GetBerlin();
  document.querySelector(".main").style.display = "flex";
  document.querySelector(".weather-info").style.display = "flex";
  searchbarEl.classList.toggle("active");
});

function GetBerlin() {
  fetch(`${WeatherApp.Hosturl}?q=Berlin&appid=${WeatherApp.Key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeather);
}

// 4
const newyorkEl = document.getElementById("NewYork");

newyorkEl.addEventListener("click", () => {
  Getnewyork();
  document.querySelector(".main").style.display = "flex";
  document.querySelector(".weather-info").style.display = "flex";
  searchbarEl.classList.toggle("active");
});

function Getnewyork() {
  fetch(`${WeatherApp.Hosturl}?q=New york&appid=${WeatherApp.Key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeather);
}

// 5
const moscowEl = document.getElementById("moscow");

moscowEl.addEventListener("click", () => {
  Getmoscow();
  document.querySelector(".main").style.display = "flex";
  document.querySelector(".weather-info").style.display = "flex";
  searchbarEl.classList.toggle("active");
});

function Getmoscow() {
  fetch(`${WeatherApp.Hosturl}?q=Moscow&appid=${WeatherApp.Key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeather);
}
// onClick cities End
