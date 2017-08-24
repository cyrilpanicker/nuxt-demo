const { Router } = require('express');
const homeData = require('./mockData/home.json');

const router = Router();

router.get('/home',function(request,response){
    response.send(homeData);
});

module.exports = router;