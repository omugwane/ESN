const User = require('../models/User');

exports.searchCitizenByUsername = (username, callback) => {

    let callback1 = (err, docs) => {
        if (err)
        {
            console.log("Error from repository");
            callback(null);

        }
        else {
            console.log("Some users should be displayed");
            callback(docs);
        }
    };

    User.findOne({username: new RegExp('^'+username+'$', "i")}, callback1);



};