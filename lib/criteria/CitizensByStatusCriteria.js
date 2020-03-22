const User = require('../../models/User')

class CitizensByStatusCriteria {
    constructor(value) {
        this.searchWords = value;
    }

    execute(callback) {
        let filter = {status: {$regex: this.searchWords, $options: 'i'}};
        User.find(filter, (err, docs) => {
            callback(err, docs);
        });
    }
}

module.exports = CitizensByStatusCriteria;