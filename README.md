# kurt-js-wetaher-app
A simple weather app built with JavaScript. The application makes REST requests to the Meta Weather API to get the weather information. The application also uses a reverse proxy server to communicate with the Meta Weather API.


NPM will have to be installed for this application to work on your machine.

The dist/ directory is the ditribution directory. This is the directory that would be installed on the client side.

The src/ ditectory contains the source code for the application

'npm run dev' - builds the application for development, generates the /dist directory;

'npm run build' - builds the applicaiton for production, generates the /dist directory;

'npm run rvrs-prox' - starts the reverse proxy server;

'npm run start' - starts the webserver for the application;

# running the application
first use the 'npm run dev' script to install all the modules for the application; 
then use the 'npm run rvrs-prox' script to run the reverse proxy server;
finally use the 'npm run start' script to run the web server for the applicaiton;
