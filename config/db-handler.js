const mongoose = require('mongoose');
const {MongoMemoryServer} = require('mongodb-memory-server');
const configDB = require('./DB')

let mongod = null;

/**
 * Connect to the in-memory database.
 */
module.exports.connect = async () => {
    const uri = await getDBUri(getEnv());

    const mongooseOpts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    await mongoose.connect(uri, mongooseOpts);
    // mongoose.set('debug', true)

    mongoose.connection.once('open', function () {
        console.log("Connected to MongoDB");
    });

    mongoose.connection.on('error', function (err) {
        console.log(err);
    });
}

/**
 * Drop database, close the connection and stop mongod.
 */
module.exports.closeDatabase = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();

    if (mongod)
        await mongod.stop();
}

/**
 * Remove all the data for all db collections.
 */
module.exports.clearDatabase = async () => {
    const collections = mongoose.connection.collections;

    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany();
    }
}


const getDBUri = async (env) => {
    if (env === 'test') {
        mongod = new MongoMemoryServer()
        // let uri = await mongod.getConnectionString();
        const uri = await mongod.getUri();
        // console.log("mongod.getUri()", uri)
        return uri;
    } else {
        return configDB[env].url;
    }
}

//Getting the current environment
//Post conditions: development,test,production
const getEnv = () => {
    let env = process.env.NODE_ENV || 'development';

    // if (env === 'test')
    //     return env
    // else
    //     return 'production'
    // // console.log('process.env.NODE_ENV', env)
    return env
}