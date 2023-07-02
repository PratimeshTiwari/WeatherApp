// // fetch(url,options)
// // .then(i=>i.json())
// // .then(i=>console.log(i.main))
// // .catch(error=>console.log(error)) 
getWeatherData = (city) => {
  const url = `https://open-weather13.p.rapidapi.com/city/${city}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4e9ea6a49amshb5bb62dda8a0dc5p11382bjsnf9e8c209401b',
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
  };

  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}

const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  try {
    const data = await getWeatherData(city);
    showWeatherData(data);
  } catch (error) {
    console.log(error);
  }
}

const showWeatherData = (weatherData) => {
  document.getElementById('temp').innerText = weatherData.main.temp;
  document.getElementById('city-name').innerText = weatherData.name;
  document.getElementById('weather-type').innerText = weatherData.weather[0].main;
  document.getElementById('min-temp').innerText = weatherData.main.temp_min;
  document.getElementById('max-temp').innerText = weatherData.main.temp_max;
}
