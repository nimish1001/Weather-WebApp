const request = require('request')
const url = 'https://api.darksky.net/forecast/eb78a53c4038fad5ac3686352a841951/37.8267,-122.4233?lang=en'


request({url:url,json:true}, (error,response)=>{
    console.log(response.body.daily.data[0].summary +' There is currently '+response.body.currently.temperature+' degrees out there. There is '+response.body.currently.precipProbability+' % chance of rain.')
})

const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmltaXNoMTAwMSIsImEiOiJjazZraDEzMmEwM3ZiM25wNzMyNTNiMzJ2In0.q4RK46KqZwphvohIMIaEOw'

request({url:url2,json:true}, (error,response)=>{
    console.log('latitude '+response.body.features[0].center[1]+' Longitude '+response.body.features[0].center[0])
})