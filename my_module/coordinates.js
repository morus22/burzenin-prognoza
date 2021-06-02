const request = require('request')

function take_coordinates(city,callback){
    const place = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoibW9ydXMzMyIsImEiOiJja3A4MmZvbjMwNHN3MnpvZ3F3eWJiMXo5In0.4wEzYeV8k7zS2hifQhSKqA&limit=1`
request({url: place,json: true},(err,resp)=>{
    if(err){
        callback('Nie można się połącyć z aplikacją')
    } else if(resp.body.features.length === 0) {
       callback('Nie można znaleść takiej miejscowości')
    }else{
        var place_city = resp.body.features[0].place_name
        var lat  = resp.body.features[0].center[0];
        var long = resp.body.features[0].center[1];
        var coordinates ={place:place_city, lat:lat,long:long}
        console.log(`Longtitude:${resp.body.features[0].center[0]} Latitude:${resp.body.features[0].center[1]}`)
        callback(undefined,coordinates)
    }
  })
}
module.exports = take_coordinates