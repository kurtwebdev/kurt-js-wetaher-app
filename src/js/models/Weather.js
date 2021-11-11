import axios from 'axios';


export default class Weather {
    constructor( query ) {
        if (query) this.city = query;
    }
    // method used to split the longitude and lattitude
    splitLattLong( string ) {
        const arr = string.split(',');

        return arr;
    };

    // method used to format time
    formatTime( hour, minute ) {
        // declare new hour and time variable
        let newHour;
        let time;
        // if the hour being passed is '00' ( midnight )...
        if ( hour === '00' ) {
            // ...set 'newHour' to 12...
            newHour = 12;
            // ...set the time to 'am'...
            time = 'am';
        }
        // ...otherwise if the hour being passed is greater than 12 ( 13-23 )...
        else if ( hour > 12 ) {
            // ...subsract 12 from 'hour' to get 1-11 and set 'newHour'
            newHour = hour - 12;
            // ...set the time to 'pm'...
            time = 'pm';
        }
        // ...otherwise if the hour being passed is less than 10...
        else if ( hour < 10 ) {
            // ...use string method replace() to remove the '0' 
            newHour = hour.replace('0', '');
            // ...set the time to 'am'...
            time = 'am';
        }
        // ...the hour being passed will be left alone...
        else {
            // ...set 'newHour' to 'hour'
            newHour = hour;
            // ...set the time to 'am'...
            time = 'am';
        }
        

        // concatinate 'newHour' + 'minute' + 'time' and return formatted time string
        return `${newHour.toString()}:${minute.toString()} ${time}`;
    };

    // method used to parse time 
    parseTime( time ) {
        // console.log(time);
        // convert string to array
        let arrTime = time.split('');
        // console.log( arrTime );
        // find index of 'T'
        const indexStart = arrTime.findIndex( el => el === 'T' );
        // console.log( indexStart );
        // find index of '.'
        const indexEnd = arrTime.findIndex( el => el === '.' );
        // console.log( indexEnd );
        // use slice to create an array with the time
        arrTime = arrTime.slice( indexStart + 1, indexEnd );
        // console.log( arrTime );
        // convert the array with the time into a string
        arrTime = arrTime.toString();
        // console.log(arrTime);
        // remove commas
        arrTime = arrTime.replace( /,/gi, '' );
        // console.log(arrTime);
        // convert string into an array where each element is the hour the minute and the second
        arrTime = arrTime.split(':');
        // console.log(arrTime);
        // format time
        return this.formatTime( arrTime[0], arrTime[1] );
    };

    // async get city woid using query 
    async getCityWoid(){
        try {
            // fecth data from API then save promise
            // const result = await axios( `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${this.city}` ) ; 
            const result = await axios( `http://localhost:3000/woeid/?query=${this.city}` ) ; 
// console.log( result.data );
            // console.log(result.data);
            // store 'woeid' property to the Weather class object
            this.woeid = result.data;
        }catch( error ) {
            // console.log( 'could not retrieve woeid', error );
        }
    };
    
    // get sun 

    // async get city weather using woid
    async getWeather(){
        try {
            // const result = await axios( `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${this.woeid}` );
            const result = await axios( `http://localhost:3000/city/?query=${this.woeid}` );
            // console.log(result.data);
            this.weather = result.data.consolidated_weather;
            this.title = result.data.title;
            this.coordinates = {
                latt: this.splitLattLong( result.data.latt_long )[0],
                long: this.splitLattLong( result.data.latt_long )[1]
            };
            this.state = result.data.parent.title;
            this.time = this.parseTime(result.data.time);
            this.sunrise = this.parseTime(result.data.sun_rise);
            this.sunset = this.parseTime(result.data.sun_set);

        } catch( error ) {
            // console.log( 'could not retrieve weather' );
            document.querySelector( '.weather__current' ).innerHTML = '<h1>Weather could not be retrieved.</h1>' ;
        }
    };

};

