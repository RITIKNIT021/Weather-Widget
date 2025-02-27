import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import "./InfoBox.css"
export default function InfoBox({info}){
    const Hot_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    const Rain_URL="https://images.unsplash.com/photo-1594652010347-788d009508c3?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const Cold_URL="https://plus.unsplash.com/premium_photo-1670347627514-07a3d37e0670?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return(
        <div className="infobox">
            <h1>Weather Info</h1>
            <div className="cardCont">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
    
        image={info.humidity>80?Rain_URL: info.temp>20?Hot_URL:Cold_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 20 ? <WbSunnyIcon /> : <AcUnitIcon />}

        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <p>
         Temprature={info.temp}&deg;C   
        </p>
        <p>
         Humidity={info.humidity}   
        </p>
        <p>
         Min Temp={info.tempMin}&deg;C   
        </p>
        <p>
         Max Temp={info.tempMax}&deg;C   
        </p>
        <p>
          The Weather can be described as {info.weather} and feels like &deg;C
        </p>
        </Typography>
      </CardContent>
  
    </Card>
    </div>
 </div>
    )
}