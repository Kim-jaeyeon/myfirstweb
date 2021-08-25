const API_KEY="557f6c59f78a8f5950c37abcfe0a0323";

function onGeoOk(position){
    const lat=position.coords.latitude; //위도
    const lon=position.coords.longitude;//경도
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            const weather= document.querySelector("#weather span:first-child");
            const city= document.querySelector("#weather span:last-child");
            
            city.innerText="@"+data.name;
            
            weather.innerText= `${data.weather[0].main} / ${data.main.temp}도`;
        });
}
function onGeoError(){
    alert("위치를 확인할 수 없어요. 날씨를 알려드리긴 어려울 듯 해요!")
}




navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
