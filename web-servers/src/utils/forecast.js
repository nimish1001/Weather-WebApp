const request = require('request')

const forecast = (latitude,longitude,callback) =>{
    const url = 'https://api.darksky.net/forecast/eb78a53c4038fad5ac3686352a841951/'+latitude+','+longitude+'?lang=en'


    request({url:url,json:true}, (error,response)=>{
        if(error){
            callback('Unable to connect the server!',undefined)
        }else if(response.body.error){
            callback('Location not found',undefined)
        }else{
            callback(undefined,response.body.daily.data[0].summary +' There is currently '+response.body.currently.temperature+' degrees out there. There is '+response.body.currently.precipProbability+' % chance of rain.')
        }
    })
}

module.exports=forecast