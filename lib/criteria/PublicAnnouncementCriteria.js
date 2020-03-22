const PublicAnnouncements = require('../../models/PublicAnnouncements')

class PublicAnnouncementCriteria {
    constructor(value) {
        this.searchWords = value;
    }

    execute(callback) {
        let filter = {$text: {$search: this.searchWords}};
        PublicAnnouncements.find(filter, (err, announcements) => {
            callback(err, announcements);
        });
    }
}

module.exports = PublicAnnouncementCriteria;