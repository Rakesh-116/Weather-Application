let input = document.getElementById("userInput");
let searchBtn = document.getElementById("searchBtn");
let dataBlock = document.getElementById("dataBlock");

let typeTag = document.getElementById("type");
let imgTag = document.getElementById("imgTag");
let tempTag = document.getElementById("tempTag");
let nameTag = document.getElementById("nameTag");
let humidityTag = document.getElementById("humidity");
let windSpeed = document.getElementById("windSpeed");

function displayElements(type, temp, humidity, speed, name){
    typeTag.textContent = type;
    tempTag.innerHTML = Math.round(temp, 2) + "<sup>o</sup>C";
    nameTag.textContent = name;
    humidityTag.textContent = humidity + "%";
    windSpeed.textContent = speed + " km/h";
    if(type == "Clouds"){
        imgTag.src = "images/clouds.png";
    }else if(type == "Clear"){
        imgTag.src = "images/clear.png";
    }else if(type == "Rain"){
        imgTag.src = "images/rain.png";
    }else if(type == "Mist"){
        imgTag.src = "images/mist.png";
    }else if(type == "Drizzle"){
        imgTag.src="images/drizzle.png";
    }else if(type == "Snow"){
        imgTag.src = "images/snow.png";
    }
}

searchBtn.addEventListener('click', (event)=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=570abe843322059729fddf467b5fb19a`;
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data)=>{
        let {weather, main, wind, name} = data;
        // console.log(weather[0].main);
        // console.log(main.temp-273.15);
        // console.log(main.humidity);
        // console.log(wind.speed);
        // console.log(name);
        let type = weather[0].main;
        let temp = main.temp - 273.15;
        let humidity = main.humidity;
        let speed = wind.speed;
        
        displayElements(type, temp, humidity, speed, name);
    });
});