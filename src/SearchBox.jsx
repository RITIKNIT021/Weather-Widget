import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({update}) {
  let [city, setCity] = useState("");
  let [error,setError]=useState(false);
  const URL="https://api.openweathermap.org/data/2.5/weather";
  const KEY="2f451606929602133d2c0e35829c1120";
   
  let wheatherInfo=async ()=>{
   try{  
   let response= await fetch(`${URL}?q=${city}&appid=${KEY}&units=metric`);
   let jsonResponse=await response.json();
   let result={
    city:city,
    temp:jsonResponse.main.temp,
    tempMin: jsonResponse.main.temp_min,
    tempMax:jsonResponse.main.temp_max,
    humidity:jsonResponse.main.humidity,
    feelsLike:jsonResponse.main.feels_like,
    weather: jsonResponse.weather[0].description,
   }
   console.log(result);
   return result
  }catch(error){
    throw error;
  }

  };


  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit =async (evt) => {
    try{
    evt.preventDefault();
    console.log(city);
    setCity("");
    let newInfo= await wheatherInfo();
    update(newInfo);
    }catch(error){
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color:"red"}}>There is no such palce exists!</p>}
      </form>
    </div>
  );
}
