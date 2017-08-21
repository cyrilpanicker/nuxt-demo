const home = require('./home.json');
const categories = require('./categories.json');
const products = require('./products.json');

const categoryList = home.categories;

export function getHome(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(home);
        },200);
    });
}

export function getCategoryInfo(categoryId){
    return new Promise((resolve,reject) => {
        var categoryResults = categories.filter(category => category.categoryId == categoryId);
        if(!categoryResults.length){
            reject('not-found');
        }else{
            resolve({
                categories:categoryList,
                selectedCategory:categoryResults[0]
            });
        }
    });
}

export function getProductInfo(productId){
    return new Promise((resolve,reject) => {
        var productResults = products.filter(product => product.productId == productId);
        if(!productResults.length){
            reject('not-found');
        }else{
            resolve({
                categories:categoryList,
                product:productResults[0]
            });
        }
    });
}