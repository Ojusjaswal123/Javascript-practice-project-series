//API Variables
const apiKey='30a5990680cb954f20b5ceaec9c3b77b';
const apiUrl='https://api.openweathermap.org/data/2.5/weather?&units=metric&q=' ;


//SELECTORS
const searchBox=document.querySelector('.search-box input');
const searchBtn=document.querySelector('.search-box button');
const weatherIcon=document.querySelector('.weather-icon');




  //WORKING FUNCTIONS
    async function checkWeather(city)
    {
        const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
        if(response.status==404)
        {
          document.querySelector(".error").style.display='block';
          document.querySelector(".weather").style.display='none';

        }
        else{
          var data=await response.json();
        console.log(data);
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+ "°C";
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
    document.querySelector('.wind').innerHTML=data.wind.speed+ "km/hr";

    if(data.weather[0].main=='Clouds', 'Haze')
    {
             weatherIcon.src="images/clouds.png";
            document.querySelector('.weather').style.backgroundColor='#CCCCCC';
 }
     else if(data.weather[0].main=='Rain')
    {
             weatherIcon.src="images/rain.png";
            document.querySelector('.weather').style.backgroundColor='#62788d';
            // document.querySelector('.card').style.backgroundColor='#CCCCCC';

    }
     else if(data.weather[0].main=='Mist')
    {
             weatherIcon.src="images/mist.png";
    }
     else if(data.weather[0].main=='Snow')
    {
             weatherIcon.src="images/snow.png";
            document.querySelector('.weather').style.backgroundColor='#fffafa';

    }
      else if(data.weather[0].main=='Drizzle')
    {
             weatherIcon.src="images/drizzle.png";
            document.querySelector('.weather').style.backgroundColor='#d1d5d9';

    }
       if(data.weather[0].main=='Clear')
    {
             weatherIcon.src="images/clear.png";
            document.querySelector('.weather').style.backgroundColor='#ffa300';

    }
    document.querySelector('.weather').style.display='block';
    document.querySelector('.error').style.display='none';

        }
        
   
   
}

    
    searchBtn.addEventListener('click', ()=>{
            checkWeather(searchBox.value);

    })

    // ENETER THE KEYWORD KEY
    document.addEventListener('keydown', function(e)
    {
        console.log('a key was pressed');
        console.log(e);
        if(e.key==='Enter')
        {
        checkWeather(searchBox.value);
        }
    })
    




