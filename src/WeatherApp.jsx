import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import {useState} from "react";

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState({
        
            city:"Delhi",
            feelsLike:24.84,
            temp:25.05,
            tempMin:25.05,
            tempMax:25.05,
            humidity:47,
            weather:"haze",
        
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
    <div style={{textAlign:"center"}}>
     <h2>Weather App by ritik</h2>
     <SearchBox update={updateInfo}></SearchBox>
     <InfoBox info={weatherInfo}></InfoBox>
    </div>);
}