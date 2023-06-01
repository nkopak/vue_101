const express = require('express')
const axios = require('axios')
const url = require('url')

const router = express.Router()

router.get('/:query', async(req, res) => {
    try {
        const params = new URLSearchParams({
            access_token: process.env.API_KEY,
            ...url.parse(req.url, true).query
        })
        const query = req.params.query
        const {data} = await axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?${params}`)
        
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

module.exports = router