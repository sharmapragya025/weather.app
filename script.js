const button=document.getElementById("search-button");
const input=document.getElementById("City-input");
const cityName=document.getElementById('city-name');
const cityTime=document.getElementById('city-time');
const cityTemp=document.getElementById('city-temp');


async function getData(cityName) {
    const promise =await fetch(
        `http://api.weatherapi.com/v1/current.json?key=6691c66332714a1c94e104812243005&q=${cityName}&aqi=yes`);
        return await promise.json();

    }
button.addEventListener("click",async() => {
const value = input.value;
const result = await getData(value);
cityName.innerText=`${result.location.name},${result.location.region}-${result.location.country}`;
cityTime.innerText=result.location.localtime;
cityTemp.innerText=result.current.temp_c;
});


