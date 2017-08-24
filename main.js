const express = require('express');
const bodyParser = require('body-parser');
const { Nuxt,Builder } = require('nuxt');
const appConfig = require('./config');
const nuxtConfig = require('./nuxt.config.js');
const apis = require('./apis');

const app = express();

app.use(bodyParser.json());
app.use('/api',apis);

nuxtConfig.dev = !appConfig.isProd;
const nuxt = new Nuxt(nuxtConfig);
if(!appConfig.isProd){
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