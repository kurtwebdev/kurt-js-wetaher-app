import Weather from './models/Weather';
import { elements, renderLoader, clearLoader } from './views/base';
import * as viewWeather from './views/viewWeather';

const state = {};
viewWeather.renderCitiesDatalist();

// function that validates the query
const controlSearch = async () => {
    const query = viewWeather.getInput();

    // validate the query

    // if the query is not empty
    if ( query ) {
        // instantiate wheater object in the state object
        state.weather = new Weather( query );

        // clear the input
        viewWeather.clear();

        // render loader
        renderLoader( elements.currentWeather );
        // if city is Birmingham, England...
        if ( query === 'Birmingham, EN' ) {
            // ...set woeid of Birmingham, England...
            state.weather.woeid = 12723;
        }
        // ...otherwise if city is Birmingham, Alabama...
        else if ( query === 'Birmingham, AL' ) {
            // ...set woeid of Birmingham, Alabmama...
            state.weather.woeid = 2364559;
        }
        // ...otherwise if city is Portland, Maine...
        else if ( query === 'Portland, ME' ) {
            // ...set woeid of Portland, Maine...
            state.weather.woeid = 2475688;
        }
        // ...otherwise if city is Portland, Oregon...
        else if ( query === 'Portland, OR') {
            // ...set woeid of Portland, Oregon...
            state.weather.woeid = 2475687;
        }
        // ...otherwise if city is York, England (not New York)...
        else if ( query === 'York, EN' ){
            // ...set woeid of York, England (not New York)...
            state.weather.woeid = 41415;
        }
        // ...otherwise if city is Brasillia, Brazil...
        else if ( query === 'Brasilia' ) {
            // ...set woeid of Brasillia, Brazil...
            state.weather.woeid = 455819;
        }
        // ...otherwise if city is Sao Paulo, Brazil...
        else if ( query === 'Sao Paulo' ) {
            // ...set woeid of Sao Paulo, Brazil...
            state.weather.woeid = 455827;
        }
        // ...otherwise if city is Bogota, Colombia...
        else if ( query === 'Bogota' ) {
            // ...set woeid of Bogota, Colombia...
            state.weather.woeid = 368148;
        }
        // ...otherwise if city is Dusseldorf, Germany...
        else if ( query === 'Dusseldorf' ) {
            // ...set woeid of Dusseldorf, Germany...
            state.weather.woeid = 646099;
        }
        // ...otherwise if city is Ha Noi, Vietnam...
        else if ( query === 'Ha Noi' ) {
            // ...set woeid of Ha Noi, Vietnam...
            state.weather.woeid = 1236594;
        }
        // ...otherwise if city is Tehran, Iran...
        else if ( query === 'Tehran' ) {
            // ...set woeid of Tehran, Iran...
            state.weather.woeid = 2251945;
        }
        // ...otherwise...
        else{
            // ...try to get the woeid using the city query...
            try {
                await state.weather.getCityWoid();
                
            }
            // ...if fails throw an error
            catch( error ) {
                // console.log( 'search failed', error );
            }
        }

        // ...try to get the weather information...
        try {
            await state.weather.getWeather();
            // ...clear loader...
            clearLoader();

            // ...render current weather...
            viewWeather.renderCurrentWeather( state.weather, viewWeather.getTempScale(), viewWeather.getDistMers() );

            // ...render forecast weather...
            const arr = state.weather.weather.slice(1);
            arr.forEach( ( curr, index ) => {
                viewWeather.renderForecastWeather( curr, index + 1, viewWeather.getTempScale(), viewWeather.getDistMers() );
            } );
        }
        // ...if fails throw and error
        catch( error ) {
            // console.log( 'weather failed', error );
        }
        
    }
};

elements.searchForm.addEventListener( 'submit', e => {
    // prevent submit button from refreshing the page
    e.preventDefault();

    // search weather info
    controlSearch();

    // render five day forecast
    // console.log(state.weather);
} );

elements.tempScale.addEventListener( 'change', e => {
    viewWeather.toggleTempScale( e.target.value );
} );
elements.distMers.addEventListener( 'change', e => {
    viewWeather.toggleDistMers( e.target.value );
} );

