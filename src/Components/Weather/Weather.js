import './Weather.css'
import LineChart from '../LineChart';
import few_could_d from'../Assets/cloudy.png';
import few_could_n from'../Assets/cloud.png';
import raining from '../Assets/raining.png'
import cloud from '../Assets/clouds.png';
import sun from'../Assets/sun.png';
import night from'../Assets/night.png';
import snow from'../Assets/snow.png';
import storm from'../Assets/storm.png';
import { useState } from 'react';
import windSpeed from '../Assets/تنزيل.png'
import humidity from '../Assets/humidity.png'
  const Weather = () => {
  const [icon,setIcon]=useState(few_could_d);
  const [dataDay,setDay]=useState(null)
  const [test,setTest]=useState(false)
  const keyApi='9f2046e84d1f98fadf904bea7de4ef81';
  async function  search() {
  let input=document.getElementsByClassName('cityInput')
if(input[0].value===''){
   window.alert('enter city')
   return 0;
}
const url=`http://api.openweathermap.org/data/2.5/forecast?q=${input[0].value}&appid=${keyApi}`
try{
let respons= await fetch(url)
if(!respons.ok){throw new Error('Network response was not ok'); 
}
let  data =await respons.json()
 setDay(data);
 setTest(true)
 document.getElementsByClassName('card')[0].style.display="block"
let city=document.getElementsByClassName('city')
city[0].innerHTML=data.city.name
let temp=document.getElementsByClassName('temp')
temp[0].innerHTML=`<div className='temp'>${Math.floor(data.list[0].main.temp-273)}°<span>C</span></div>`
let speed=document.getElementsByClassName('speed')
speed[0].innerHTML=`${data.list[0].wind.speed} KM/h`
let hum=document.getElementsByClassName('hum')
hum[0].innerHTML=`${data.list[0].main.humidity} %`
switch (data.list[0].weather[0].icon) {
  case "01d":
setIcon(sun)
break;
case "01n":
setIcon(night)
break;
case "02d":
setIcon(few_could_d)
break;
case "02n":
setIcon(few_could_n)
break;
case ("04d"):
setIcon(cloud)
break;
case ("04n"):
setIcon(cloud)
break;
case "09d":
setIcon(raining)
break;
case "09n":
setIcon(raining)
break;
case "13d":
setIcon(snow)
break;
case "13n":
setIcon(snow)
break;
case "10n":
setIcon(storm)
break;
case "10d":
setIcon(storm)
break;
  default:
setIcon(sun)
break;
}

}catch{window.alert('The entered city name is incorrect')}}

  return (
              <div className='container'>
              <div className='top-bar'>
                <input className='cityInput' type='text'placeholder='Enter City'></input>
                <div className='search' onClick={()=>{search()}} >Search</div>
              </div>
              <div className='data'>
              <img className="weather-icon" src={icon} alt='icon weather'></img>
              <div className='data-temp'>
                <div className='city'>london</div>
                <div className='temp'>15° <span>C</span></div>
              <div className='wind-humidity'>
                <div className="wind">
                <img src={windSpeed} alt='icon wind speed'></img>
                <div className='box'>
                  <p className='speed'>2 KM/h</p>
                  <p>Wind Speed</p>
                </div>
                </div>
                <div className='humidity'>
                <img src={humidity} alt='humidity'></img>
                <div className='box'>
                  <p className='hum'>60 %</p>
                  <p>Humidity</p>
                </div>
              </div>
              </div>
              </div>
            
              </div>
              <div className='card' >
    {test &&<LineChart dataDay={dataDay}/>}
    </div>
              </div>
        )
}
export default Weather