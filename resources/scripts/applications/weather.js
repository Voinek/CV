document.querySelector('#weatherButton').addEventListener('click', () => {
    const cityName = document.querySelector('.weatherInput').value;
    const apiKey = '8a46f549eef57403dfceeaa7b007889b';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            let tempValue = data['main']['temp'];
            tempValue = (tempValue - 273.15).toFixed(1)
            let nameValue = data['name'];
            let descValue = data['weather'][0]['description'];
            let dayTime = (new Date()).getHours();
            console.log(dayTime);
            const weatherType = data['weather'][0]['main'];
            //if you want to check how app works with diffrent weather just do "weatherType = '{other weather type}' " list of all weather code is in the switch.
            document.querySelector('#city').innerHTML = `${tempValue}°C<br> ${nameValue}<br> ${descValue}`
            const changeWeather = () => {
                if (dayTime > 18 || daytime < 6) {
                    document.querySelector('body').style.backgroundImage = 'url(resources/images/night.png)';
                }
                switch (weatherType) {
                    case 'Clouds':
                        document.querySelector('#weatherIcon').style.backgroundImage = 'url(resources/images/weather/cloudy.svg)';
                        break;
                    case 'Clear':
                        document.querySelector('#weatherIcon').style.backgroundImage = 'url(resources/images/weather/day.svg)';
                        break;
                    case 'Snow':
                        document.querySelector('#weatherIcon').style.backgroundImage = 'url(resources/images/weather/snowy-5.svg)';
                        break;
                    case 'Rain':
                        document.querySelector('#weatherIcon').style.backgroundImage = 'url(resources/images/weather/rainy-6.svg)';
                        break;
                    case 'Drizzle':
                        document.querySelector('#weatherIcon').style.backgroundImage = 'url(resources/images/weather/rainy-4.svg)';
                        break;
                    case 'Thunderstorm':
                        document.querySelector('#weatherIcon').style.backgroundImage = 'url(resources/images/weather/thunder.svg)';
                        break;
                }
                document.querySelector('#weatherIcon').style.display = 'block';
            }

            changeWeather();
        })
        .catch(err => {});
})

const appOffWeather = () => {
    document.querySelector('.appSpaceWeather').style.display = 'none';
}