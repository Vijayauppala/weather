const apiKey = 'YOUR_API_KEY'; // Replace with your API key
const city = 'London'; // Replace with the desired city

const weatherInfoElement = document.getElementById('weatherInfo');

async function fetchWeatherData() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    weatherInfoElement.innerHTML = 'Unable to fetch weather data.';
  }
}

function displayWeatherData(data) {
  const { name, main, weather } = data;
  const temperature = main.temp;
  const description = weather[0].description;

  weatherInfoElement.innerHTML = `
    <h2>${name}</h2>
    <p>Temperature: ${temperature}°C</p>
    <p>Description: ${description}</p>
  `;
}

fetchWeatherData();