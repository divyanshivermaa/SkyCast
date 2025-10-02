# Weather Application

A modern, responsive weather application that provides real-time weather information, 5-day forecasts, and air quality data for any city worldwide.

## Features

- **Current Weather**
  - Temperature in Celsius
  - Weather conditions with icons
  - Humidity, wind speed, and cloud coverage
  - Feels like temperature
  - Min/Max temperatures
  - Dynamic weather images

- **5-Day Forecast**
  - Daily temperature predictions
  - Weather conditions
  - Humidity and wind information
  - Clean, card-based layout

- **Air Quality Report**
  - Air Quality Index (AQI)
  - Pollutant levels (PM2.5, PM10, CO, NO2)
  - Health recommendations
  - Color-coded AQI categories

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- OpenWeather API
- Material Icons
- Responsive Design

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Get your API key:
   - Sign up at [OpenWeather](https://openweathermap.org/api)
   - Get your free API key
   - Add it to `config.js`

3. Open `config.js` and add your API key:
   ```javascript
   const API_CONFIG = {
       OPENWEATHER_API_KEY: 'your-api-key-here',
       BASE_URL: 'https://api.openweathermap.org/data/2.5'
   };
   ```

4. Open `index.html` in your browser to start using the application

## Usage

1. **Search for a City**
   - Enter a city name in the search bar
   - Press Enter or click the search button
   - View current weather conditions

2. **View Forecast**
   - Click on "Weekly" in the navigation
   - See 5-day weather forecast
   - Check temperature, conditions, and wind details

3. **Check Air Quality**
   - Click on "Air Report" in the navigation
   - View AQI and pollutant levels
   - Read health recommendations

## Features in Detail

### Current Weather
- Real-time temperature updates
- Weather condition icons
- Detailed weather metrics
- Dynamic background images based on weather

### Weekly Forecast
- 5-day weather predictions
- Daily high and low temperatures
- Weather conditions with icons
- Humidity and wind information
- Clean, modern card layout

### Air Quality
- Air Quality Index (1-5)
- Detailed pollutant measurements
- Health recommendations
- Color-coded categories

## API Rate Limits

The application uses the free tier of OpenWeather API which includes:
- 60 calls/minute
- 1,000,000 calls/month
- 5-day/3-hour forecast data
- Current weather data
- Air pollution data

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Weather data provided by OpenWeather API
- Icons by Material Icons
- Background images from Unsplash 