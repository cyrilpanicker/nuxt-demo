const { Router } = require('express');
const categoryData = require('./mockData/categories.json');
const homeData = require('./mockData/home.json');

const router = Router();

router.get('/categories/:id',function(request,response){
    var categoryResults = categoryData.filter(category => category.categoryId == request.params['id']);
    if(!categoryResults.length){
        response.status(404).send();
    }else{
        response.send({
            categories:homeData.categories,
            selectedCategory:categoryResults[0]                
        });
    }
});

module.exports = router;