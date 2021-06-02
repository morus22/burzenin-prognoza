const request = require('request')
const fs = require('fs')

function show_weather(data,callback){
    
    const url =`http://api.weatherstack.com/current?access_key=adae7f5c7a7e28fa6b0fdc3bec78a48d&query=${data.long},${data.lat}`
    
    request({url: url,json: true},(err,resp)=>{
    if(err){
        callback('Cant connect to weather service')
    }else if (resp.body.error){
         
        callback('Unable to find location')
    } else {
        
        var pogoda = {
            place:resp.body.location.name,
            cloud:resp.body.current.weather_descriptions[0],
            temp:resp.body.current.temperature,
            temp_odczuwalna:resp.body.current.feelslike
        }
        callback(undefined,pogoda)
            }
     })}

module.exports = show_weather