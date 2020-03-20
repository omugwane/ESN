const User = require('../models/User');

exports.searchCitizenByUsername = (username, callback) => {
    let callback1 = (err, docs) => {
        if (err)
        {
            callback(null);
            console.log(err)
        }
        else {
            callback(docs);
        }
    };

    User.findOne({username: "/"+username+"/"}, callback1);


};