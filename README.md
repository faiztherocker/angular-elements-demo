# Create a build for webcomponent Dashboard by using the command

`npm run build:dashboard:externals`

This will create a build for web component by eliminating all the angular and rxjs related dependencies mentioned in webpack.external.js

# Serve the build Dashboard on port 8081

`npm run cdn:dashboard`

# Serve the Shell application

`ng serve -o --extra-webpack-config webpack.externals.js`

# Build Shell application for production

`npm run build:shell:externals`
