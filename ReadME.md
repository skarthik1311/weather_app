# Weather Forecast App

A simple and interactive weather forecast application built using HTML, CSS (Tailwind CSS), and JavaScript. This app allows users to check the current weather and 5-day weather forecast for any city, as well as get the weather for their current location using geolocation.

## Features

- **Current Weather:** Displays current weather information such as temperature, humidity, and wind speed based on the city or the user's location.
- **5-Day Forecast:** Provides a 5-day weather forecast with detailed information for each day (temperature, humidity, wind speed, and weather conditions).
- **Weather Icons:** The app shows weather icons for different weather conditions such as sunny, rainy, cloudy, etc.
- **Responsive Design:** The app is designed to be responsive, ensuring it works seamlessly on both desktop and mobile devices.

## Technologies Used

- **HTML5**: The basic structure of the app.
- **CSS (Tailwind CSS)**: A utility-first CSS framework used for styling the app.
- **JavaScript (ES6+)**: Used to handle API requests, fetch weather data, and display the data dynamically.
- **OpenWeatherMap API**: Used to fetch weather data for cities and geolocation.
- **Geolocation API**: Used to get the user's current location to provide weather information based on it.

## API Used

The app fetches weather data from the [OpenWeatherMap API](https://openweathermap.org/api). You can create your own account to get an API key and use it in the app.

## How to Use

### 1. **Search by City**
   - Enter the name of any city in the search box and click on **Search**. The current weather and the 5-day forecast for that city will be displayed.

### 2. **Use Current Location**
   - Click on **Current Location** to fetch weather data for your current location. The app will ask for permission to access your device's geolocation, and once granted, it will show the weather.

## Setup and Installation

To set up and run the app locally, follow these steps:

### 1. **Clone the Repository**
   - Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/weather-forecast-app.git
