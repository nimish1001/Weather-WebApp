const request = require('request')
const url = 'https://api.darksky.net/forecast/eb78a53c4038fad5ac3686352a841951/37.8267,-122.4233?lang=hi'


request({url:url,json:true}, (error,response)=>{
    console.log(response.body.daily.data[0].summary +' There is currently '+response.body.currently.temperature+' degrees out there. There is '+response.body.currently.precipProbability+' % chance of rain.')
})