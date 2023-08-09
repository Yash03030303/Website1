
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '79408fd016msh8800ea8059d7ec9p1bf8a0jsn0d002010b90a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = async (city) => {
	cityName.innerHTML = city;
	try {
		const response = await fetch(url + city, options);
		const result = await response.json(); // Parse response as JSON

		console.log(result);

		//cloud_pct.innerHTML = result.cloud_pct;
		temp.innerHTML = result.temp;
		temp2.innerHTML = result.temp;
		feels_like.innerHTML = result.feels_like;
		humidity.innerHTML = result.humidity;
		humidity2.innerHTML = result.humidity;
		min_temp.innerHTML = result.min_temp;
		max_temp.innerHTML = result.max_temp;
		wind_speed.innerHTML = result.wind_speed;
		wind_speed2.innerHTML = result.wind_speed;
		wind_degrees.innerHTML = result.wind_degrees;
		sunrise.innerHTML = result.sunrise;
		sunset.innerHTML = result.sunset;
	} catch (error) {
		console.error(error);
	}
};

submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value);
});

getWeather("Delhi");