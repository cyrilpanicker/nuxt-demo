const express = require('express');
const bodyParser = require('body-parser');
const { Nuxt,Builder } = require('nuxt');
const { commonConfig,devConfig,prodConfig } = require('./config');
const nuxtConfig = require('./nuxt.config.js');

const app = express();
const isProd = process.env.NODE_ENV === 'prod';
const appConfig = isProd ? Object.assign({},commonConfig,prodConfig) : Object.assign({},commonConfig,devConfig);

app.use(bodyParser.json());

nuxtConfig.dev = !isProd;
const nuxt = new Nuxt(nuxtConfig);
if(!isProd){
    new Builder(nuxt).build().then(
        startListening,
        error => console.log(error)
    );
}else{
    startListening();
}

function startListening(){
    app.use(nuxt.render);
    app.listen(appConfig.port,appConfig.ipAddress,() => {
        console.log('\n\napp started at http://'+appConfig.ipAddress+':'+appConfig.port);
    }); 
}   