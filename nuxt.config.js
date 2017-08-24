module.exports = {
    css:[
        'assets/reset.scss',
        'assets/main.scss'
    ],
    loading: { color: '#3B8070' },
    router:{
        middleware:'common'
    },
    build: {
        vendor:['jquery']
    },
    plugins:[]
};