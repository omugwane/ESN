const Chat = require('../../models/Chat')

class PublicAnnouncementCriteria {
    constructor(value) {
        this.searchWords = value;
    }

    execute(callback) {
        let filter = {$text: {$search: this.searchWords}};
        Chat.find(filter, (err, announcements) => {
            callback(err, announcements);
        });
    }
}

module.exports = PublicAnnouncementCriteria;