import API_CONFIG from './config.js';

function getWeatherIcon(weatherMain) {
    const iconMap = {
        'Clear': 'sunny',
        'Clouds': 'cloudy',
        'Rain': 'rainy',
        'Drizzle': 'rainy',
        'Thunderstorm': 'thunderstorm',
        'Snow': 'ac_unit',
        'Mist': 'foggy',
        'Fog': 'foggy',
        'Smoke': 'foggy',
        'Haze': 'foggy',
        'Dust': 'foggy',
        'Sand': 'foggy',
        'Ash': 'foggy',
        'Squall': 'air',
        'Tornado': 'air'
    };
    return iconMap[weatherMain] || 'cloudy';
}

function getNextDaysWithWeekday(startIndex) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dates = [];
  const today = new Date(); 

  for (let i = 0; i < 5; i++) { 
      const nextDay = new Date(today); 
      nextDay.setDate(today.getDate() + (startIndex + i)); 

      const weekday = daysOfWeek[nextDay.getDay()]; 
      const day = nextDay.getDate(); 
      const month = nextDay.getMonth() + 1; 

      const formattedDate = `${day}/${month}`;
      dates.push({ weekday, date: formattedDate });
  }

  return dates;
}

// Display the results for each section
const nextFiveDays = getNextDaysWithWeekday(0);  

// Select the elements for each day
const dateElements = [
  document.getElementById('date1'),
  document.getElementById('date2'),
  document.getElementById('date3'),
  document.getElementById('date4'),
  document.getElementById('date5')
];

const dayElements = [
  document.getElementById('day1'),
  document.getElementById('day2'),
  document.getElementById('day3'),
  document.getElementById('day4'),
  document.getElementById('day5')
];

// Populate each day's date and weekday
nextFiveDays.forEach((day, index) => {
  if (dateElements[index] && dayElements[index]) {
      dateElements[index].textContent = day.date;
      dayElements[index].textContent = day.weekday;
  }
});

const cityName = document.getElementById('cityName');
const temp = document.getElementById('temp');
const cloudPct = document.getElementById('cloud_pct');
const feelsLike = document.getElementById('feels_like');
const minTemp = document.getElementById('min_temp');
const maxTemp = document.getElementById('max_temp');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind_speed');
const lastUpdated = document.getElementById('lastUpdated');
const weatherIcon = document.getElementById('weatherIcon');
const searchForm = document.querySelector('.d-flex');
const searchInput = document.getElementById('city');
const submitButton = document.getElementById('submit');

const kelvinToCelsius = (kelvin) => {
    return Math.round(kelvin - 273.15);
};

const updateWeatherIcon = (iconCode, weatherDescription) => {
    console.log('Weather Icon Code:', iconCode);
    console.log('Weather Description:', weatherDescription);

    const simplifiedDescription = weatherDescription
        .toLowerCase()
        .replace('overcast clouds', 'cloudy')
        .replace('broken clouds', 'cloudy')
        .replace('scattered clouds', 'cloudy')
        .replace('few clouds', 'partly cloudy')
        .replace('clear sky', 'sunny')
        .replace('light rain', 'rainy')
        .replace('moderate rain', 'rainy')
        .replace('heavy rain', 'rainy')
        .replace('thunderstorm', 'thunderstorm')
        .replace('snow', 'snowy')
        .replace('mist', 'foggy')
        .replace('fog', 'foggy');

    const iconMap = {
        '01d': 'sunny',
        '01n': 'clear_night',
        '02d': 'partly_cloudy_day',
        '02n': 'partly_cloudy_night',
        '03d': 'scattered_clouds',
        '03n': 'scattered_clouds',
        '04d': 'cloudy',
        '04n': 'cloudy',
        '09d': 'rainy',
        '09n': 'rainy',
        '10d': 'rainy',
        '10n': 'rainy',
        '11d': 'thunderstorm',
        '11n': 'thunderstorm',
        '13d': 'ac_unit',
        '13n': 'ac_unit',
        '50d': 'foggy',
        '50n': 'foggy'
    };
    
    const iconName = iconMap[iconCode] || 'cloudy';
    console.log('Mapped Icon Name:', iconName);
    
    if (weatherIcon) {
        weatherIcon.innerHTML = `<span class="material-symbols-outlined">${iconName}</span>`;
    }
    const weatherImage = document.getElementById('weatherImage');
    const weatherDescriptionElement = document.getElementById('weatherDescription');
    if (weatherImage && weatherDescriptionElement) {
        // Use high-quality weather images from Unsplash
        const imageMap = {
            'sunny': 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=800',
            'clear_night': 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800',
            'partly_cloudy_day': 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=800',
            'partly_cloudy_night': 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800',
            'scattered_clouds': 'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=800',
            'cloudy': 'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=800',
            'rainy': 'https://images.unsplash.com/photo-1501691223387-dd0506c89ac8?w=800',
            'thunderstorm': 'https://images.unsplash.com/photo-1605727216801-ea248b1a1b1d?w=800',
            'ac_unit': 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=800',
            'foggy': 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800'
        };

        const imageUrl = imageMap[iconName] || imageMap['cloudy'];
        console.log('Selected Image URL:', imageUrl);
        weatherImage.src = imageUrl;
        weatherImage.alt = simplifiedDescription;

        const descriptionMap = {
            'sunny': 'Sunny',
            'clear_night': 'Clear Night',
            'partly_cloudy_day': 'Partly Cloudy',
            'partly_cloudy_night': 'Partly Cloudy',
            'scattered_clouds': 'Cloudy',
            'cloudy': 'Cloudy',
            'rainy': 'Rainy',
            'thunderstorm': 'Thunderstorm',
            'ac_unit': 'Snowy',
            'foggy': 'Foggy'
        };
        weatherDescriptionElement.textContent = simplifiedDescription || descriptionMap[iconName] || 'Weather';
        console.log('Updated Description:', weatherDescriptionElement.textContent);
    }
    return iconName;
};

// Cache configuration
const CACHE_DURATION = 15 * 60 * 1000; 
let weatherCache = {
    current: null,
    forecast: null,
    airQuality: null,
    lastUpdated: null
};

// API Functions
const fetchWeatherData = async (city) => {
    try {
        // Check cache first
        if (weatherCache.current && 
            weatherCache.lastUpdated && 
            Date.now() - weatherCache.lastUpdated < CACHE_DURATION) {
            console.log('Using cached weather data');
            return weatherCache.current;
        }

        const response = await fetch(`${API_CONFIG.BASE_URL}/weather?q=${city}&appid=${API_CONFIG.OPENWEATHER_API_KEY}`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        
        // Update cache
        weatherCache.current = data;
        weatherCache.lastUpdated = Date.now();
        
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};

const updateCurrentWeather = (data) => {
    console.log('Weather Data:', data);
    if (cityName) cityName.textContent = data.name;
    if (temp) temp.textContent = kelvinToCelsius(data.main.temp);
    if (cloudPct) cloudPct.textContent = data.clouds.all;
    if (feelsLike) feelsLike.textContent = kelvinToCelsius(data.main.feels_like);
    if (minTemp) minTemp.textContent = kelvinToCelsius(data.main.temp_min);
    if (maxTemp) maxTemp.textContent = kelvinToCelsius(data.main.temp_max);
    if (humidity) humidity.textContent = data.main.humidity;
    if (windSpeed) windSpeed.textContent = data.wind.speed;
    if (weatherIcon) {
        console.log('Weather Icon Data:', data.weather[0]);
        updateWeatherIcon(data.weather[0].icon, data.weather[0].description);
    }
    if (lastUpdated) lastUpdated.textContent = new Date().toLocaleTimeString();
};

if (searchForm) {
    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const city = searchInput.value.trim();
        if (city) {
            try {
                // Clear cache when searching for a new city
                weatherCache = {
                    current: null,
                    forecast: null,
                    airQuality: null,
                    lastUpdated: null
                };

                const currentData = await fetchWeatherData(city);
                updateCurrentWeather(currentData);
                
                if (window.location.pathname.includes('weekly.html')) {
                    const weeklyData = await fetchWeeklyForecast(city);
                    updateWeeklyForecast(weeklyData);
                }
                
                if (window.location.pathname.includes('air-report.html')) {
                    const airQualityData = await fetchAirQualityData(city);
                    updateAirQuality(airQualityData);
                }

                searchInput.value = '';
            } catch (error) {
                alert('Please enter a valid city name');
                console.error('Search error:', error);
            }
        }
    });
}

if (submitButton) {
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        searchForm.dispatchEvent(new Event('submit'));
    });
}

// Air Quality Functions
const fetchAirQualityData = async (city) => {
    try {
        if (weatherCache.airQuality && 
            weatherCache.lastUpdated && 
            Date.now() - weatherCache.lastUpdated < CACHE_DURATION) {
            console.log('Using cached air quality data');
            return weatherCache.airQuality;
        }

        const weatherData = await fetchWeatherData(city);
        const { lat, lon } = weatherData.coord;
        
        const response = await fetch(`${API_CONFIG.BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_CONFIG.OPENWEATHER_API_KEY}`);
        if (!response.ok) {
            throw new Error('Air quality data not found');
        }
        const data = await response.json();
        
        weatherCache.airQuality = data;
        weatherCache.lastUpdated = Date.now();
        
        return data;
    } catch (error) {
        console.error('Error fetching air quality data:', error);
        throw error;
    }
};

const updateAirQuality = (data) => {
    const aqi = data.list[0].main.aqi;
    const components = data.list[0].components;
    
    document.getElementById('aqi-value').textContent = aqi;
    const aqiCategory = getAQICategory(aqi);
    document.getElementById('aqi-category').textContent = aqiCategory;
    
    document.getElementById('pm25').textContent = Math.round(components.pm2_5);
    document.getElementById('pm10').textContent = Math.round(components.pm10);
    document.getElementById('co').textContent = Math.round(components.co);
    document.getElementById('no2').textContent = Math.round(components.no2);
    
    const recommendations = getHealthRecommendations(aqi);
    document.getElementById('health-recommendations').innerHTML = recommendations;
};

const getAQICategory = (aqi) => {
    const categories = {
        1: 'Good',
        2: 'Fair',
        3: 'Moderate',
        4: 'Poor',
        5: 'Very Poor'
    };
    return categories[aqi] || 'Unknown';
};

const getHealthRecommendations = (aqi) => {
    const recommendations = {
        1: 'Air quality is good. Enjoy your outdoor activities!',
        2: 'Air quality is fair. Most people can continue their outdoor activities.',
        3: 'Air quality is moderate. Consider reducing outdoor activities if you are sensitive to air pollution.',
        4: 'Air quality is poor. Reduce outdoor activities, especially if you have respiratory conditions.',
        5: 'Air quality is very poor. Avoid outdoor activities. Stay indoors with windows closed.'
    };
    return recommendations[aqi] || 'No specific recommendations available.';
};

// Weekly Forecast Functions
const fetchWeeklyForecast = async (city) => {
    try {
        if (weatherCache.forecast && 
            weatherCache.lastUpdated && 
            Date.now() - weatherCache.lastUpdated < CACHE_DURATION) {
            console.log('Using cached forecast data');
            return weatherCache.forecast;
        }

        const response = await fetch(`${API_CONFIG.BASE_URL}/forecast?q=${city}&appid=${API_CONFIG.OPENWEATHER_API_KEY}`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        
        weatherCache.forecast = data;
        weatherCache.lastUpdated = Date.now();
        
        return data;
    } catch (error) {
        console.error('Error fetching weekly forecast:', error);
        throw error;
    }
};

const updateWeeklyForecast = (data) => {
    const forecastGrid = document.querySelector('.forecast-grid');
    if (!forecastGrid) return;

    forecastGrid.innerHTML = '';
    const forecastData = data.list.filter(item => item.dt_txt.includes('12:00:00'));

    forecastData.forEach(day => {
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        const formattedDate = date.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' });
        
        const card = document.createElement('div');
        card.className = 'forecast-card';
        
        const weatherIcon = getWeatherIcon(day.weather[0].main);
        
        card.innerHTML = `
            <div class="forecast-date">
                <span class="day-name">${dayName}</span>
                <span class="date">${formattedDate}</span>
            </div>
            <div class="forecast-icon">
                <span class="material-symbols-outlined">${weatherIcon}</span>
            </div>
            <div class="forecast-temp">
                <span class="max-temp">${Math.round(day.main.temp_max - 273.15)}°C</span>
                <span class="min-temp">${Math.round(day.main.temp_min - 273.15)}°C</span>
            </div>
            <div class="forecast-details">
                <div class="condition">
                    <span class="material-symbols-outlined">${weatherIcon}</span>
                    <span>${day.weather[0].description}</span>
                </div>
                <div class="humidity">
                    <span class="material-symbols-outlined">water_drop</span>
                    <span>${day.main.humidity}%</span>
                </div>
                <div class="wind">
                    <span class="material-symbols-outlined">air</span>
                    <span>${Math.round(day.wind.speed)} m/s</span>
                </div>
            </div>
        `;
        
        forecastGrid.appendChild(card);
    });
};

// Update the load default city section
window.addEventListener('load', async () => {
    try {
        const city = 'Delhi';
        if (!API_CONFIG.OPENWEATHER_API_KEY) {
            console.error('API key is missing. Please add your OpenWeather API key to config.js');
            return;
        }
        
        const currentData = await fetchWeatherData(city);
        updateCurrentWeather(currentData);
        
        if (window.location.pathname.includes('weekly.html')) {
            const weeklyData = await fetchWeeklyForecast(city);
            updateWeeklyForecast(weeklyData);
        }
        
        if (window.location.pathname.includes('air-report.html')) {
            const airQualityData = await fetchAirQualityData(city);
            updateAirQuality(airQualityData);
        }
    } catch (error) {
        console.error('Error loading default city:', error);
    }
});

  

