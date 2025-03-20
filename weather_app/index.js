const api_key = "eef73bf068d729b75509d7ac2daefd72";
const URL = "https://api.openweathermap.org/data/2.5/weather?appid=eef73bf068d729b75509d7ac2daefd72&units=metric&q=london"

const btn = document.querySelector(".btn")
const enter_city_name = document.querySelector("input")
const city_name = document.querySelector(".city_name")
const temp = document.querySelector(".temp")
const description = document.querySelector(".desc")
const wind_speed = document.querySelector(".wind")
const date = document.querySelector(".date")
const weather_img = document.querySelector(".weather_img")

 getWeather = async (city) => {
try{
    let promise = await fetch (URL + city);
    let data = await promise.json();
    console.log(data)
   
    city_name.innerText = data.name;
    temp.innerText =data.main.temp + "°C";
    description.innerText = data.weather[0].description;
    wind_speed.innerText = data.wind.speed + " km/h";
  
    if(data.weather[0].main == "clouds"){
          weather_img.src = "images/clouds.png";  
    }
    else if(data.weather[0].main == "Clear"){
      weather_img.src = "images/clear.png";
   } 
   else if(data.weather[0].main == "Dizzle"){
      weather_img.src = "images/dizzle.png";
   } 
   else if(data.weather[0].main == "Humidity"){
      weather_img.src = "images/humidity.png";
   } 
   else if(data.weather[0].main == "Mist"){
      weather_img.src = "images/mist.png";
   } 
   else if(data.weather[0].main == "Rain"){
      weather_img.src = "images/rain.png";
   } 
   else if(data.weather[0].main == "Search"){
      weather_img.src = "images/search.png";
   } 
   else if(data.weather[0].main == "Snow"){
      weather_img.src = "images/snow.png";
   } 
   else if(data.weather[0].main == "Wind"){
      weather_img.src = "images/wind.png";
   } 
   else if (data.weather[0].main == "Haze"){
      weather_img.src = "images/wind.png";
   }
   
  }

  catch (error){
     console.log("Error fetching the data: ", error);
     document.querySelector(".error").style.display = "block";
     document.querySelector(".hide").style.display = "none";
  }

}



btn.addEventListener("click", () =>{
getWeather(enter_city_name.value)
})