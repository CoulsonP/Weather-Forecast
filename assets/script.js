$("#searchbtn").on("click",function(){
    var cityValue = $("#citysearch").val()
    console.log(cityValue)
    geoCode(cityValue)
})


function geoCode(cityValue) {
    // api for city
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityValue}&limit=2&appid=c7e31d1b9a3c72c880ed546280909ef3`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // weather forecast for lat and lon
        weatherSearch(data[0].lat,data[0].lon)
        foreCastSearch(data[0].lat,data[0].lon)
    })
}


function weatherSearch(lat,lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=c7e31d1b9a3c72c880ed546280909ef3`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
// boostrap
var temp = $("<h2>").addClass("").text("temperature: "+ data.main.temp)
var humidity =  $("<h2>").text("humidity: "+ data.main.humidity)






    $("#currentweather").append(temp, humidity)
    })
}

function foreCastSearch(lat,lon) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=c7e31d1b9a3c72c880ed546280909ef3`)
    .then(response => response.json())
    .then(data => {
        console.log(data)

for (let i = 4; i < data.list.length; i=i+8){
console.log(data.list[i])

var temp = $("<p>").text("temp: "+data.list[i].main.temp)








$("#forecast").append(temp)
}
    })
}