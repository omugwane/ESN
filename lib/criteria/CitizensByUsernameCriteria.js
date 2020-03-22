const User = require('../../models/User')

class CitizensByUsernameCriteria {
    constructor(value) {
        this.searchWords = value;
    }

    execute(callback) {
        let filter = {username: {$regex: this.searchWords, $options: 'i'}};
        User.find(filter, (err, docs) => {
            callback(err, docs);
        });
    }
}

module.exports = CitizensByUsernameCriteria;