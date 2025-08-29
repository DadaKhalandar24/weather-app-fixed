import React from 'react';

// Weather code mapping based on Open-Meteo documentation
const weatherCodeMap = {
  0: { description: 'Clear sky', icon: '☀️' },
  1: { description: 'Mainly clear', icon: '🌤' },
  2: { description: 'Partly cloudy', icon: '⛅' },
  3: { description: 'Overcast', icon: '☁️' },
  45: { description: 'Fog', icon: '🌫' },
  48: { description: 'Depositing rime fog', icon: '🌫' },
  51: { description: 'Light drizzle', icon: '🌦' },
  53: { description: 'Moderate drizzle', icon: '🌦' },
  55: { description: 'Dense drizzle', icon: '🌦' },
  61: { description: 'Slight rain', icon: '🌧' },
  63: { description: 'Moderate rain', icon: '🌧' },
  65: { description: 'Heavy rain', icon: '🌧' },
  71: { description: 'Slight snow', icon: '🌨' },
  73: { description: 'Moderate snow', icon: '🌨' },
  75: { description: 'Heavy snow', icon: '🌨' },
  80: { description: 'Slight rain showers', icon: '🌦' },
  81: { description: 'Moderate rain showers', icon: '🌦' },
  82: { description: 'Violent rain showers', icon: '🌦' },
  95: { description: 'Thunderstorm', icon: '⛈' },
  96: { description: 'Thunderstorm with slight hail', icon: '⛈' },
  99: { description: 'Thunderstorm with heavy hail', icon: '⛈' },
};

const WeatherCard = ({ data }) => {
  const weatherInfo = weatherCodeMap[data.weather_code] || { description: 'Unknown', icon: '❓' };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{data.location}</h2>
      
      <div className="flex items-center justify-between mb-4">
        <div className="text-5xl font-bold text-gray-800">
          {data.temperature_2m}°F
        </div>
        <div className="text-right">
          <div className="text-4xl">{weatherInfo.icon}</div>
          <div className="text-gray-600">{weatherInfo.description}</div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-gray-100 p-3 rounded-lg">
          <div className="text-gray-500 text-sm">Feels like</div>
          <div className="text-lg font-semibold">{data.apparent_temperature}°F</div>
        </div>
        
        <div className="bg-gray-100 p-3 rounded-lg">
          <div className="text-gray-500 text-sm">Humidity</div>
          <div className="text-lg font-semibold">{data.relative_humidity_2m}%</div>
        </div>
        
        <div className="bg-gray-100 p-3 rounded-lg">
          <div className="text-gray-500 text-sm">Wind Speed</div>
          <div className="text-lg font-semibold">{data.wind_speed_10m} mph</div>
        </div>
        
        <div className="bg-gray-100 p-3 rounded-lg">
          <div className="text-gray-500 text-sm">Wind Direction</div>
          <div className="text-lg font-semibold">{data.wind_direction_10m}°</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
