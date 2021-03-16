const express = require('express')
const app = express()
const db = require('./config/db')
const consign = require('consign')


app.listen(3000, () => {
    console.log('Backend executandoo...')
})