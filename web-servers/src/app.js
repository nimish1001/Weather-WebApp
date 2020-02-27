const path = require('path')
const hbs = require('hbs')
const express = require('express')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// const publicDirectoryPath = path.join(__dirname, '../public')
// const viewPath = path.join(__dirname, '..templates/views')
// const partialPath = path.join(__dirname, '..templates/partials')

// app.set('view engine', 'hbs')
// app.set('views', viewPath)
// hbs.registerPartials(partialPath)

// app.use(express.static(publicDirectoryPath))

const demoresponse = {
    title: 'Weather',
    name: 'Nimish'
}

app.get('', (req, res) => {
    res.send(demoresponse)
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'Must provide an address!!'
        })
    }

    geocode(req.query.address, (error, {latitude,longitude,location})=>{
        if (error){
            return res.send({error})
        }

        forecast(latitude,longitude, (error, forecadtData) => {
            if(error){
                return res.send({error})
            }


            res.send({
                forecast:forecadtData,
                location,
                address:req.query.address
            })
        })
    })
})

// if(!address){
//     console.log('Please provide address')
// }else{
//     geocode(address,(error,{latitude,longitude,location})=>{
//         if(error){
//             return console.log(error) 
//         }
//         forecast(latitude,longitude,(error,forecastData)=>{
//             if(error){
//                 return console.log(error)
//             }
//             console.log(location)
//             console.log(forecastData)
//         })
//     })
// }

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})