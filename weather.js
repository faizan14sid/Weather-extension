var inputCity = document.querySelector('.inputValue');
var description = document.querySelector('.desc');
var temperature = document.querySelector('.temp');
var cityName = document.querySelector('.cityName');
var button= document.querySelector('.button')
//fetching data using API
button.addEventListener('click', function(){
    fetch ('https://api.openweathermap.org/data/2.5/weather?q='+inputCity.value+'&appid=6feba33791832fec3e4c5fcf501bb5c2')
    .then(response => response.json())
    .then(jsonData => {
        var tempValue = jsonData['main']['temp'];
        var tempInCelsius = tempValue - 273.15;
        var nameValue = jsonData['name'];
        var descValue = jsonData['weather'][0]['description'];
        document.getElementById('display').className='display';
        cityName.innerHTML = nameValue;
        description.innerHTML = "Desc : "+descValue;
        temperature.innerHTML = "Temp : "+Math.floor(tempInCelsius) + " °C";
        inputCity.value ="";
      
      })
    .catch(err => alert("please enter a valid city name!"))
    
});
