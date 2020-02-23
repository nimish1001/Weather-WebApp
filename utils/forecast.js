const request = require('request')

const forecast = (latitude,longitude,callback) =>{
    const url = 'https://api.darksky.net/forecast/eb78a53c4038fad5ac3686352a841951/'+latitude+','+longitude+'?lang=en'


    request({url:url,json:true}, (error,response)=>{
        if(error){
            console.log('Unable to connect the server!',undefined)
        }else if(response.body.error){
            console.log('Location not found',undefined)
        }else{
            console.log(undefined,response.body.daily.data[0].summary +' There is currently '+response.body.currently.temperature+' degrees out there. There is '+response.body.currently.precipProbability+' % chance of rain.')
        }
    })
}

module.exports=forecast