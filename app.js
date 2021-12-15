// rerquiring the external npm packages
const express=require ("express");
const bodyParser= require("body-parser");
const https= require ("https");
const { response } = require("express");
const app=express()

 // initilizing body parser
app.use(bodyParser.urlencoded({extended:true}));

// Building our server form this instance

// telling what the server will response after the client makes a request to our server at "/" home route.
app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
})

// making a post request, And instructing what the server should do after the user clicks on the "go" button of the form.
app.post("/", function(res,req){


// making a get req to the opean weather api for data. with which the api would respond by sending the data in the form of a response

//
const city= req.body.cityName;
const apiKey= "ae95edcd53be31c4efebe2ed8f8cd714&units=metric";

const url= "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey

https.get(url, function (response) {
console.log(response.statusCode)
})

response.on('data', function (data) {
    // console.log(data) this data will come out in hexadecimal format

    // Now this in this method data will come out in Js object format.
    const weatherData= JSON.parse(data)
    cosole.log(weatherData)

    // tip: data can also be converted into JSON format using JSON.stringify()
})

// parsing some specific part of the response (data)
const t= weatherData.main.temp;
const d= weatherData.weather[0].description
 

res.write("the weather in "+ city + " is " + d)
res.write(" <h1>The temperature in " + city + " is " + t + " degres celcius </h1>")

    res.send(" thank you for using our services")
})


// Mentioning the port at which our server will listen and where our server will respond.
app.listen("3000", function(){
console.log("server is up and running")
})