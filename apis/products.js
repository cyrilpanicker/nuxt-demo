const { Router } = require('express');
const productsData = require('./mockData/products.json');
const homeData = require('./mockData/home.json');

const router = Router();

router.get('/products/:id',function(request,response){
    var productResults = productsData.filter(product => product.productId == request.params['id']);
    if(!productResults.length){
        response.status(404).send();
    }else{
        response.send({
            categories:homeData.categories,
            product:productResults[0]
        });
    }
});

module.exports = router;