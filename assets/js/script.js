// API Key
var apiKey = '&appid=4b09a29e9a780a228649b1e9cefb5e31';

//Elements
var inputEl = document.querySelector('.input');
var searchBtnEl = document.querySelector('.search-button');
var citiesListEl = document.querySelector(".cities-list");

// Sets the cityName in localStorage
var cityName = localStorage.getItem('cityNameStore');

// URL for current day parameters (city name + weather units of measurements)
var URLWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + '&units=imperial' + apiKey;

// URL for 5-days forecast parameters (city name + weather units of measurements)
var URLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + '&units=imperial' + apiKey;

// Sets the input value in localStorage
function recordCityData() {
    localStorage.setItem('cityNameStore', inputEl.value);
}

// Append the search input from localStorage to the cities list
for (var i = 0; i < localStorage.length; i++) {
    $(".cities-list").append("<p>" + localStorage.getItem(localStorage.key(i)) + "</p>");
}

// Current Day Forecast function
$.ajax ({
    url: URLWeather,
    method: "GET"
    })
    .then(function(response) {
        // Add current day weather info to page
        $('.city').html("<h2>" + response.name + "</h2>");
        $('.weather-icon').html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png' >");
        $(".temperature").text("Temp: " + response.main.temp + " F");
        $('.wind').text("Wind: " + response.wind.speed + " MPH");
        $('.humidity').text("Humidity: " + response.main.humidity + "%");       
    });

// Displays the date
var currentDay = dayjs().format("MM/DD/YYYY");

function functionDay() {
    $(".current-date").text(currentDay);
};
functionDay();

// 5 Days Forecast function
$.ajax ({
    url: URLForecast,
    method: "GET"
    })
    .then(function (response) {
        // Adds day 1 data to page
        var dayOne = dayjs(response.list[8].dt_txt).format("MM/DD/YYYY");       
        $(".day-one-date").html("<h6>" + dayOne + "</h6>");
        $(".day-one-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[8].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
        $(".day-one-temperature").text("Temp: " + response.list[8].main.temp + " F");
        $(".day-one-wind").text("Wind: " + response.list[8].wind.speed + " MPH");
        $(".day-one-humidity").text("Humidity: " + response.list[8].main.humidity + "%");

        // Adds day 2 data to page
        var dayTwo = dayjs(response.list[16].dt_txt).format("MM/DD/YYYY");
        $(".day-two-date").html("<h6>" + dayTwo + "</h6>");
        $(".day-two-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[16].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
        $(".day-two-temperature").text("Temp: " + response.list[16].main.temp + " F");
        $(".day-two-wind").text("Wind: " + response.list[16].wind.speed + " MPH");
        $(".day-two-humidity").text("Humidity: " + response.list[16].main.humidity + "%");

        // Adds day 3 data to page
        var dayThree = dayjs(response.list[24].dt_txt).format("MM/DD/YYYY");
        $(".day-three-date").html("<h6>" + dayThree + "</h6>");
        $(".day-three-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[24].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
        $(".day-three-temperature").text("Temp: " + response.list[24].main.temp + " F");
        $(".day-three-wind").text("Wind: " + response.list[24].wind.speed + " MPH");
        $(".day-three-humidity").text("Humidity: " + response.list[24].main.humidity + "%");
        
        // Adds day 4 data to page
        var dayFour = dayjs(response.list[32].dt_txt).format("MM/DD/YYYY");
        $(".day-four-date").html("<h6>" + dayFour + "</h6>");
        $(".day-four-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[32].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
        $(".day-four-temperature").text("Temp: " + response.list[32].main.temp + " F");
        $(".day-four-wind").text("Wind: " + response.list[32].wind.speed + " MPH");
        $(".day-four-humidity").text("Humidity: " + response.list[32].main.humidity + "%");
        
        // Adds day 5 data to page
        var dayFive = dayjs(response.list[38].dt_txt).format("MM/DD/YYYY");
        $(".day-five-date").html("<h6>" + dayFive + "</h6>");
        $(".day-five-icon").html("<img src='https://openweathermap.org/img/w/" + response.list[38].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
        $(".day-five-temperature").text("Temp: " + response.list[38].main.temp + " F");
        $(".day-five-wind").text("Wind: " + response.list[38].wind.speed + " MPH");
        $(".day-five-humidity").text("Humidity: " + response.list[38].main.humidity + "%");       
    });

// Event Listener for search button
searchBtnEl.addEventListener('click', recordCityData);