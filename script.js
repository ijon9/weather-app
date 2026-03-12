const container = document.getElementById("container");

async function getWeather() {
    let url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=ALJLCEV889RW2M9LXSRGTZW6E';
    const response = await fetch(url);
    const weatherData = await response.json();
    console.log(weatherData);
}

getWeather();