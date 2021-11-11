import { elements } from './base';

// get the input from the search field
export const getInput = () => elements.searchInput.value;
// get the temperature scale
export const getTempScale = () => elements.tempScale.value;
// get the distance measurement
export const getDistMers = () => elements.distMers.value;

// render cities in dropdown datalist
export const renderCitiesDatalist = () => {
    // array with cities
   const arrCities = [ 'Kinshasa', 'Alexandria', 'Cairo', 'Addis Ababa', 'Abidjan', 'Mombasa', 'Nairobi', 'Casablanca', 'Windhoek', 'Ibadan', 'Kano', 'Lagos', 'Cape Town', 'Durban', 'Johannesburg', 'Dhaka', 'Beijing', 'Chengdu', 'Dongguan', 'Guangzhou', 'Hangzhou', 'Hong Kong', 'Shanghai', 'Shenzhen', 'Tianjin', 'Wuhan', 'Ahmedabad', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Mumbai', 'New Delhi', 'Pune', 'Surat', 'Denpasar', 'Jakarta', 'Tehran', 'Baghdad', 'Fukuoka', 'Hiroshima', 'Kawasaki', 'Kitakyushu', 'Kobe', 'Kyoto', 'Nagoya', 'Osaka', 'Saitama', 'Sapporo', 'Sendai', 'Tokyo', 'Yokohama', 'Kuala Lumpur', 'Yangon', 'Pyongyang', 'Karachi', 'Lahore', 'Manila', 'Riyadh', 'Singapore', 'Busan', 'Seoul', 'Damascus', 'Taipei', 'Bangkok', 'Phuket', 'Ankara', 'Istanbul', 'Izmir', 'Dubai', 'Ho Chi Minh City', 'Ha Noi', 'Adelaide', 'Brisbane', 'Melbourne', 'Perth', 'Sydney', 'Auckland', 'Christchurch', 'Manukau', 'Wellington', 'Vienna', 'Minsk', 'Brussels', 'Sofia', 'Zagreb', 'Prague', 'Copenhagen', 'Helsinki', 'Ajaccio', 'Bordeaux', 'Calvi', 'Lille', 'Lyon', 'Marseille', 'Nice', 'Paris', 'Toulouse', 'Berlin', 'Bremen', 'Cologne', 'Dortmund', 'Dresden', 'Dusseldorf', 'Essen', 'Frankfurt', 'Hamburg', 'Hanover', 'Leipzig', 'Munich', 'Nuremberg', 'Stuttgart', 'Athens', 'Santorini', 'Budapest', 'Dublin', 'Milan', 'Naples', 'Rome', 'Torino', 'Venice', 'Amsterdam', 'The Hague', 'Oslo', 'Warsaw', 'Lisbon', 'Bucharest', 'Moscow', 'St Petersburg', 'Barcelona', 'Madrid', 'Santa Cruz de Tenerife', 'Santander', 'Gothenburg', 'Stockholm', 'Geneva', 'Zurich', 'Kharkiv', 'Kiev', 'Birmingham, EN', 'Blackpool', 'Bournemouth', 'Bradford', 'Brighton', 'Bristol', 'Cambridge', 'Coventry', 'Derby', 'Exeter', 'Falmouth', 'Huddersfield', 'Ipswich', 'Kingston upon Hull', 'Leeds', 'Leicester', 'Liverpool', 'London', 'Luton', 'Manchester', 'Middlesbrough', 'Newcastle', 'Northampton', 'Norwich', 'Nottingham', 'Oxford', 'Penzance', 'Plymouth', 'Portsmouth', 'Preston', 'Reading', 'Salford', 'Sheffield', 'Sidmouth', 'Southend-on-Sea', 'St Ives', 'Stoke-on-Trent', 'Sunderland', 'Swindon', 'Truro', 'Wakefield', 'Wolverhampton', 'York, EN', 'Calgary', 'Edmonton', 'Montréal', 'Toronto', 'Vancouver', 'Mexico City', 'Birmingham, AL', 'Anchorage', 'Mesa', 'Phoenix', 'Tucson', 'Little Rock', 'Bakersfield', 'Fresno', 'Lake Tahoe', 'Long Beach', 'Los Angeles', 'Mountain View', 'Oakland', 'Palm Springs', 'Sacramento', 'San Diego', 'San Francisco', 'San Jose', 'Santa Cruz', 'Boulder', 'Colorado Springs', 'Denver', 'Bridgeport', 'Wilmington', 'Washington DC', 'Jacksonville', 'Miami', 'Atlanta', 'Honolulu', 'Boise', 'Indianapolis', 'Des Moines', 'Wichita', 'Louisville', 'New Orleans', 'Portland, ME', 'Baltimore', 'Boston', 'Detroit', 'Minneapolis', 'Jackson', 'Kansas City', 'St. Louis', 'Billings', 'Omaha', 'Las Vegas', 'Manchester', 'Newark', 'Albuquerque', 'Santa Fe', 'New York', 'Charlotte', 'Raleigh', 'Fargo', 'Columbus', 'Oklahoma City', 'Portland, OR', 'Philadelphia', 'Providence', 'Columbia', 'Sioux Falls', 'Memphis', 'Nashville', 'Salt Lake City', 'Burlington', 'Richmond', 'Virginia Beach', 'Seattle', 'Charleston', 'Milwaukee', 'Buenos Aires', 'Brasilia', 'Rio de Janeiro', 'Salvador', 'Sao Paulo', 'Santiago', 'Bogota', 'Lima', 'Caracas', 'Maracaibo' ];
    // sort array with cities
    arrCities.sort();
    // create html markup with cities and return
    arrCities.forEach( ( el, index ) => {
        const markup = `<option value="${el}">`;
        return elements.searchDatalist.insertAdjacentHTML( 'beforeend', markup );
    } );
};    

// convert temperature and distance using the object property
const convert_pre = ( property, t_s ) => {
    // round and store og temp
    let newProp = property;
    // if t_s === 'f'...
    if ( t_s === 'f' ) {
        // ...convert temp to farenheit 
        newProp = celcius_farenheit( newProp );
    } else if ( t_s === 'km' ){
        newProp = miles_km( newProp );
    }

    // return temp
    return newProp;
};

// funciton used to convert farenheit to celcius
const farenheit_celcius = ( temp ) => {
    return  Math.round((celcius_farenheit(temp) - 32) * 5/9) ;
};
// funciton used to convert celcius to farenheit
const celcius_farenheit = ( temp ) => {
    return Math.round(temp * (9/5) + 32);
};
// funciton used to convert kilometers to miles
const km_miles = ( dist ) => {
    return miles_km( dist ) / 1.609;
};
// funciton used to convert miles to kilometers
const miles_km = ( dist ) => {
    return dist * 1.609;
};

// function used to convert weather F -> C and C -> F, toggle between the two
export const toggleTempScale = ( tempScale ) => {
    // console.log( tempScale );
    if (document.querySelector('.change__current-temp')) {
        // dom elements
        const dom = {
            current_temp: document.querySelector( '.change__current-temp' ),
            current_max: document.querySelector( '.change__current-max' ),
            current_min: document.querySelector( '.change__current-min' )
        };
        // get temps from data attributes
        const data = {
            current_temp: document.querySelector( '.change__current-temp' ).dataset.current_temp,
            current_max: document.querySelector( '.change__current-max' ).dataset.current_max,
            current_min: document.querySelector( '.change__current-min' ).dataset.current_min
        };

        if ( tempScale === 'c' ) {
            // console.log('f to c');
            // clear inner HTML
            dom.current_temp.innerHTML ='';
            dom.current_max.innerHTML ='';
            dom.current_min.innerHTML ='';
            // insert new HTML
            dom.current_temp.innerHTML = farenheit_celcius( data.current_temp );
            dom.current_max.innerHTML = farenheit_celcius( data.current_max );
            dom.current_min.innerHTML = farenheit_celcius(  data.current_min);
            for ( let i = 1; i < 6; i++ ){
                document.querySelector( `.change__forecast-weather-${i}` ).innerHTML = '';
                document.querySelector( `.change__forecast-weather-${i}` ).innerHTML = farenheit_celcius( document.querySelector( `.change__forecast-weather-${i}` ).dataset.forecast_temp );
                document.querySelector( `.change__forecast-max-${i}` ).innerHTML = '';
                document.querySelector( `.change__forecast-max-${i}` ).innerHTML = farenheit_celcius( document.querySelector( `.change__forecast-max-${i}` ).dataset.forecast_max );
                document.querySelector( `.change__forecast-min-${i}` ).innerHTML = '';
                document.querySelector( `.change__forecast-min-${i}` ).innerHTML = farenheit_celcius( document.querySelector( `.change__forecast-min-${i}` ).dataset.forecast_min );
            }
        }
        else if ( tempScale === 'f' ){
            // console.log('c to f');
            // clear inner HTML
            dom.current_temp.innerHTML ='';
            dom.current_max.innerHTML ='';
            dom.current_min.innerHTML ='';

            // insert new HTML
            dom.current_temp.innerHTML = celcius_farenheit( data.current_temp );
            dom.current_max.innerHTML = celcius_farenheit( data.current_max );
            dom.current_min.innerHTML = celcius_farenheit( data.current_min );
            for ( let i = 1; i < 6; i++ ){
                document.querySelector( `.change__forecast-weather-${i}` ).innerHTML = '';
                document.querySelector( `.change__forecast-weather-${i}` ).innerHTML = celcius_farenheit( document.querySelector( `.change__forecast-weather-${i}` ).dataset.forecast_temp );
                document.querySelector( `.change__forecast-max-${i}` ).innerHTML = '';
                document.querySelector( `.change__forecast-max-${i}` ).innerHTML = celcius_farenheit( document.querySelector( `.change__forecast-max-${i}` ).dataset.forecast_max );
                document.querySelector( `.change__forecast-min-${i}` ).innerHTML = '';
                document.querySelector( `.change__forecast-min-${i}` ).innerHTML = celcius_farenheit( document.querySelector( `.change__forecast-min-${i}` ).dataset.forecast_min );
            }
        }
    } else {
        // console.log( 'do nothing' );
    }
};

// function used to conver distance Miles -> Km and Km -> Miles, toggle between the two
export const toggleDistMers = ( distMers ) => {
    // console.log( distMers );
    if (document.querySelector('.change__current-temp')) {
        // dom elements
        const dom = {
            current_visibility: document.querySelector( '.current-visibility' ),
            current_wind_speed: document.querySelector( '.current-wind__speed' )
        };
        // get distance from data
        const data = {
            current_visibility: document.querySelector( '.current-visibility' ).dataset.current_visibility,
            current_wind_speed: document.querySelector( '.current-wind__speed' ).dataset.current_wind_speed
        };
    
        if ( distMers === 'mi' ) {
            // clear inner HTML
            dom.current_visibility.innerHTML = '';
            dom.current_wind_speed.innerHTML = '';

            // insert new HTML
            dom.current_visibility.innerHTML = `${km_miles( data.current_visibility ).toFixed(1)}&nbsp;miles`;
            dom.current_wind_speed.innerHTML = `${km_miles( data.current_wind_speed ).toFixed(1)}&nbsp;mph`;
            for ( let i = 1; i < 6; i++ ){
                document.querySelector( `.forecast-visibility-${i}` ).innerHTML = '';
                document.querySelector( `.forecast-visibility-${i}` ).innerHTML = `${km_miles( document.querySelector( `.forecast-visibility-${i}` ).dataset.forecast_visibility ).toFixed(1)}&nbsp;miles`;
                document.querySelector( `.forecast-wind__speed-${i}` ).innerHTML = '';
                document.querySelector( `.forecast-wind__speed-${i}` ).innerHTML = `${km_miles( document.querySelector( `.forecast-wind__speed-${i}` ).dataset.forecast_wind_speed ).toFixed(1)}&nbsp;mph`;
            }
        }
        else if ( distMers === 'km' ){
            // clear inner HTML
            dom.current_visibility.innerHTML = '';
            dom.current_wind_speed.innerHTML = '';

            // insert new HTML
            dom.current_visibility.innerHTML = `${miles_km( data.current_visibility ).toFixed(1)}&nbsp;km`;
            dom.current_wind_speed.innerHTML = `${miles_km( data.current_wind_speed ).toFixed(1)}&nbsp;km/h`;
            for ( let i = 1; i < 6; i++ ){
                document.querySelector( `.forecast-visibility-${i}` ).innerHTML = '';
                document.querySelector( `.forecast-visibility-${i}` ).innerHTML = `${miles_km( document.querySelector( `.forecast-visibility-${i}` ).dataset.forecast_visibility ).toFixed(1)}&nbsp;km`;
                document.querySelector( `.forecast-wind__speed-${i}` ).innerHTML = '';
                document.querySelector( `.forecast-wind__speed-${i}` ).innerHTML = `${miles_km( document.querySelector( `.forecast-wind__speed-${i}` ).dataset.forecast_wind_speed ).toFixed(1)}&nbsp;km/h`;
            }
        }
    } else {
        // console.log( 'do nothing' );
    }
};

// function used to format the date
const formatDate = ( date ) => {
    const currentDate = new Date( date );
    return currentDate.toDateString();
};

// clear input
export const clear = () => {
    elements.searchInput.value ='';
    elements.currentWeather.innerHTML ='';
    elements.forecastWeather.innerHTML ='';
};

// render current weather 
export const renderCurrentWeather = ( weather, scale, dist ) => {
    // markup for current weather information
    const markup = `
    <div class="current__top">
        <div class="current__title-state">
            <h1>${weather.title}, ${weather.state}</h1>
            <h2 class="date">${formatDate(weather.weather[0].applicable_date)}</h2>
            <h3 class="local-time">Local Time: ${weather.time}</h3>
                <div class="current__temp-icon">
                    <div class="wrapper-icon__weather">
                        <img class="icon__weather" src="https://www.metaweather.com/static/img/weather/${weather.weather[0].weather_state_abbr}.svg">
                    </div>
                    <div class="current__temp">
                        <h1 class="change__current-temp" data-current_temp="${Math.round(weather.weather[0].the_temp)}" >${convert_pre(Math.round(weather.weather[0].the_temp), scale)}</h1><h1>&deg;</h1>
                    </div>
                </div>
            
            <div class="current__state">
                <h2>${weather.weather[0].weather_state_name}</h2>
            </div>
        </div>
    </div>
    <div class="current__middle">
        <div class="left-current__middle">
            <div class="left-current__item">
                <span>Max:&nbsp;</span>
                <span class="change__current-max" data-current_max="${Math.round(weather.weather[0].max_temp)}">${convert_pre(Math.round(weather.weather[0].max_temp), scale)}</span><span>&deg;</span>
            </div>
            <div class="left-current__item">
                <span>Min:&nbsp;</span>
                <span class="change__current-min" data-current_min="${Math.round(weather.weather[0].min_temp)}">${convert_pre(Math.round(weather.weather[0].min_temp), scale)}</span><span>&deg;</span>
            </div>
            <div class="left-current__item">
                <span>Humidity:&nbsp;</span>
                <span>${weather.weather[0].humidity}&#37;</span>
            </div>
            <div class="left-current__item">
                <span>Visibility:&nbsp;</span>
                <span class="current-visibility" data-current_visibility="${weather.weather[0].visibility.toFixed(1)}">${convert_pre(weather.weather[0].visibility, dist).toFixed(1)}&nbsp;${dist === 'km' ? 'km' : 'miles'}</span>
            </div>
        </div>
        <div class="right-current__middle">
            <div class="right-current__item">
                <span>Wind Speed:&nbsp;</span>
                <span class="current-wind__speed" data-current_wind_speed="${weather.weather[0].wind_speed.toFixed(1)}">${convert_pre(weather.weather[0].wind_speed, dist).toFixed(1)}&nbsp;${dist === 'km' ? 'km/h' : 'mph'}</span>
            </div>
            <div class="right-current__item">
                <span>Wind Direction: ${Math.round(weather.weather[0].wind_direction)}&deg;, ${weather.weather[0].wind_direction_compass}</span>
            </div>
            <div class="right-current__item">
                <span>Sun Rise: ${weather.sunrise}</span>
            </div>
            <div class="right-current__item">
                <span>Sun Set: ${weather.sunset}</span>
            </div>
        </div>
    </div>
    <div class="current__bottom">
        <h4>Forecast Accuracy: ${weather.weather[0].predictability}&#37;</h4>
    </div>
    `;

    // return placement of markup into appropriate div element
    return elements.currentWeather.insertAdjacentHTML( 'beforeend', markup );
};

export const renderForecastWeather = ( weather, index, scale, dist ) => {
    // markup for individual forecasted weather
    const markup = `
        <li class="forecast__item">
            <h4 class="forecast__date">${formatDate(weather.applicable_date)}</h4>
            <div class="forecast__temp-icon">
                <div class="wrapper-icon__weather">
                    <img class="icon__weather" src="https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg">
                </div>
                <div class="forecast__temp">
                    <h1 class="change__forecast-weather-${index}" data-forecast_temp="${Math.round(weather.the_temp)}" >${convert_pre(Math.round(weather.the_temp), scale)}</h1><h1>&deg;</h1>
                </div>
            </div>
            <div class="forecast__state">
                <h2>${weather.weather_state_name}</h2>
            </div>
            <div class="forecast__detail">
                <div class="forecast__detail-item">
                    <span>Max:&nbsp;</span>
                    <span class="change__forecast-max-${index}" data-forecast_max="${Math.round(weather.max_temp)}">${convert_pre(Math.round(weather.max_temp), scale)}</span><span>&deg;</span>
                </div>
                <div class="forecast__detail-item">
                    <span>Min:&nbsp;</span>
                    <span class="change__forecast-min-${index}" data-forecast_min="${Math.round(weather.min_temp)}">${convert_pre(Math.round(weather.min_temp), scale)}</span><span>&deg;</span>
                </div>
                <div class="forecast__detail-item">
                    <span>Humidity: ${weather.humidity}&#37;</span>                
                </div>
                <div class="forecast__detail-item">
                    <span>Visibility:&nbsp;</span>   
                    <span class="forecast-visibility-${index}" data-forecast_visibility="${weather.visibility.toFixed(1)}">${convert_pre(weather.visibility, dist).toFixed(1)}&nbsp;${dist === 'km' ? 'Km' : 'miles'}</span>             
                </div>
                <div class="forecast__detail-item">
                    <span>Wind Speed:&nbsp;</span>
                    <span class="forecast-wind__speed-${index}" data-forecast_wind_speed="${weather.wind_speed.toFixed(1)}"> ${convert_pre(weather.wind_speed, dist).toFixed(1)}&nbsp;${dist === 'km' ? 'km/h' : 'mph'}</span>
                </div>
                <div class="forecast__detail-item">
                    <span>Wind Dir. : ${Math.round(weather.wind_direction)}&deg;, ${weather.wind_direction_compass}</span>
                </div>
            </div>
            <h5 class="forecast__accuracy">Forecast Accuracy: ${weather.predictability}&#37;</h5>

        </li>
    `;

    // return placement of markup into forecasted weather list
    return elements.forecastWeather.insertAdjacentHTML( 'beforeend', markup );
}