const isProd = process.env.NODE_ENV === 'prod';

module.exports = {
    isProd:isProd,
    ipAddress:'0.0.0.0',
    port: isProd ? 80 : 9000,
    apiBasePath: isProd ? 'http://35.167.129.123/magento/magento2'
        : 'http://35.167.129.123/magento/magento2',
    proxyApiBasePath : isProd ? 'http://0.0.0.0/api'
        : 'http://localhost:9000/api',
    serverErrorMessage:'Something went wrong..Debug cheythu nokku..',
    pageNotFoundErrorMessage:'This page could not be found..Ee page nilavil illa..',
    apiUrls:{
    },
    proxyApiUrls:{
        home:'/home',
        categories:'/categories/',
        products:'/products/'
    }
}