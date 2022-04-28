const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../index.html'))
})

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '0e3c2606e06f4006b1e83d11330b3b43',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const port = process.env.PORT || 4005

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`)
})

