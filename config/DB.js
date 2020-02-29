let path = 'mongodb+srv://baptiste:bapt_cmu_2020@fse-cluster-rm6b4.mongodb.net/';
// database : "mongodb://localhost:27017/esn",

module.exports = {
    development: {
        url: path + 'esn-dev' + '?retryWrites=true&w=majority',
        dialect: 'mongodb',
    },
    test: {
        // url: path + 'esn-tests' + '?retryWrites=true&w=majority',
        url: 'mongodb://127.0.0.1:27017/esn-tests',
        dialect: 'mongodb',
    },
    production: {
        url: path + 'esn' + '?retryWrites=true&w=majority',
        dialect: 'mongodb',
    },
    password: '[redacted]'
}