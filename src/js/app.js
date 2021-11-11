const express = require( 'express' ); // load express module
const app = express(); // instantiate express app
const axios = require( 'axios' ); // load axios module
const cors = require( 'cors' );
const { response } = require('express');

// allow server to accept requests from other servers
app.use( cors( {
    origin: '*'
} ) )
// get route
app.get( '/woeid', async function( req, res ) {
    let endpoint = `https://www.metaweather.com/api/location/search/?query=${req.query.query}`

    axios.get( endpoint ).then( response => {
        res.json( response.data[0].woeid );
    } ).catch( error => {
        res.json( error );
    })
} )

app.get( '/city', async function( req, res ) {
    let endpoint = `https://www.metaweather.com/api/location/${ req.query.query }`

    axios.get( endpoint ).then( response => {
        res.json( response.data );
    } ).catch( error => {
        res.json( error );
    } )
} )

app.listen( 3000 );
console.log( 'reverse proxy server is running on port: 3000' );