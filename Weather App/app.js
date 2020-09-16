
var button=document.querySelector('.button');
var input=document.querySelector('.inputValue');
var cityname=document.querySelector('.name');
var descr=document.querySelector('.desc');
var temp=document.querySelector('.temp');
var humd=document.querySelector('.hum');
var iconid=document.querySelector('#img');

var min=document.querySelector('.min_temp');
var max=document.querySelector('.max_temp');

button.addEventListener('click',function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=37bc9a2b8941a5b3fbe199709d36e641')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      var nameValue=data['name'];
      var tempValue=data['main']['temp'];
      var minValue=data['main']['temp_min'];
      var maxValue=data['main']['temp_max'];
      var description=data['weather'][0]['description'];
      var humidity=data['main']['humidity'];
      var icon=data['weather'][0]['icon'];
      cityname.innerHTML=nameValue;
      temp.innerHTML=tempValue +'°F';
      descr.innerHTML=description;
      humd.innerHTML='humidity :  '+ humidity +'%';
      document.getElementById("img").src = "http://openweathermap.org/img/wn/"+ icon +"@4x.png";
      min.innerHTML="Min "+minValue +'°F';
      max.innerHTML="Max "+minValue +'°F';
    })

  .catch(err => alert('Invalid city name'));




});
