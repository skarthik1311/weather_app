const apiKey = '6f9c50f3ad14cdbea4f1183f0e2cf7e4'; // Replace with your OpenWeatherMap API key

// Fetch current weather by city name
async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

// Fetch current weather using geolocation
async function fetchWeatherByLocation(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Unable to fetch weather for current location');
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

// Display current weather data
function displayWeather(data) {
    const weatherDiv = document.getElementById('weather-display');
    const { name, main, weather } = data;

    weatherDiv.innerHTML = `
        <div class="p-6 bg-blue-100 border border-blue-300 rounded-lg shadow-lg text-center">
            <h2 class="text-2xl font-bold text-blue-700">${name}</h2>
            <p class="text-lg capitalize text-gray-600">${weather[0].description}</p>
            <p class="text-4xl font-bold text-blue-600">${main.temp}°C</p>
            <div class="text-gray-500">
                <p>Humidity: ${main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            </div>
        </div>
    `;
}

// Fetch 5-day forecast
async function fetchForecast(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        displayForecast(data);
    } catch (error) {
        alert(error.message);
    }
}

const weatherIcons = {
    Clear: "icons/icons8-sunny-48.png", // Path to your sunny icon
    Rain: "icons/icons8-rainfall-48.png", // Path to your rainy icon
    Clouds: "icons/icons8-clouds-48.png", // Path to your cloudy icon
    


}
console.log(weatherIcons.Clear);

// Display 5-day forecast
function displayForecast(data) {
    const forecastDiv = document.getElementById('forecast-display');
    forecastDiv.innerHTML = ''; // Clear previous forecast

    const forecastByDay = {}; // Object to store the forecast for each day

    // Group forecasts by date
    data.list.forEach((entry) => {
        const date = new Date(entry.dt_txt).toDateString(); // Convert to readable date
        if (!forecastByDay[date]) {
            forecastByDay[date] = entry; // Store only the first entry for each day
        }
    });

    // Iterate through the forecastByDay object to display data
    Object.values(forecastByDay).forEach((day) => {
        const { dt_txt, main, weather } = day;
        const icon = weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`; // Image source for weather icon

        forecastDiv.innerHTML += `
            <div class="p-4 border border-gray-300 rounded-md bg-white text-center shadow-md">
                <p class="font-bold text-lg">${new Date(dt_txt).toDateString()}</p>
                <img src="${iconUrl}" alt="${weather[0].description}" class="mx-auto w-16 h-16 my-2">
                <p class="capitalize text-sm text-gray-600">${weather[0].description}</p>
                <p class="font-bold text-xl text-blue-600">${main.temp}°C</p>
                <div class="text-sm text-gray-500">
                    <p>Humidity: ${main.humidity}%</p>
                    <p>Wind Speed: ${day.wind.speed} m/s</p>
                </div>
            </div>
        `;
    });
}

// Get user's current location
document.getElementById('current-btn').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                fetchWeatherByLocation(latitude, longitude);
                fetchForecastByLocation(latitude, longitude);
            },
            () => alert('Unable to retrieve location')
        );
    } else {
        alert('Geolocation is not supported by your browser');
    }
});

// Search weather by city name
document.getElementById('search-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    if (city) {
        fetchWeather(city);
        fetchForecast(city);
    } else {
        alert('Please enter a city name');
    }
});
