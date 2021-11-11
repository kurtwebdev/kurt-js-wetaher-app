// DOM elements saved into an object 
export const elements = {
    searchForm: document.querySelector( '.form__search' ),
    searchInput: document.querySelector( '.search__field' ),
    searchDatalist: document.querySelector( '#cities' ),
    currentWeather: document.querySelector( '.weather__current' ),
    forecastWeather: document.querySelector( '.forecast__list' ),
    options__temp_dist: document.querySelector( '.options__temp-dist' ),
    tempScale: document.getElementById('temp_scales'),
    distMers: document.getElementById('dist_mers')
};

// HTML elements that are not rendered at load time but afterwards
export const elementString = {
    loader: 'loader'
}

// render AJAX Loader Spinner
export const renderLoader = parent => {
    const loader = `
        <div class="${elementString.loader}">
            <img class="icon__weather" src="https://www.metaweather.com/static/img/weather/c.svg">
        </div>
    `;
    // insertAdjacentHTML method inserts the html markup at the desired location
    parent.insertAdjacentHTML( 'afterbegin', loader );
};

// remove loader
export const clearLoader = () => {
    const loader = document.querySelector(`.${elementString.loader}`);
        if (loader) {

            // have to target the parent element of the targeted (because it has not been loaded yet?) then step down to it
            loader.parentElement.removeChild(loader);
        }
};