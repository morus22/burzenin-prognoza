
const express = require('express')
const app = express()
const hbs = require('hbs')
const take_coordinates = require('./my_module/coordinates')
const show_weather = require('./my_module/weather')
const port = process.env.PORT || 3000

app.set('view engine','hbs')
app.use(express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/partials')

app.get('/',(req,res)=>{
    res.render('index',{name:'weather'})
})
app.get('/weather',(req,res)=>{
     take_coordinates(req.query.szukaj,(error,data)=>{
         if(error){
             console.log('Error :',error)
             return
         }
         show_weather(data,(error,forecast)=>{
             console.log(data.place)
            res.send({forecast,place:data.place})
         })
     })
 })
app.get('/about',(req,res)=>{
    res.render('about',{name:'about'})
})
app.get('/help',(req,res)=>{
    res.render('help',{name:'help'})
})

app.listen(port,console.log(`server is listening at ${port}`))