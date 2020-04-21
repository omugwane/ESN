const CitizensByUsernameCriteria = require('./criteria/CitizensByUsernameCriteria');
const CitizensByStatusCriteria = require('./criteria/CitizensByStatusCriteria');
const PrivateChatsCriteria = require('./criteria/PrivateChatsCriteria');
const PublicChatsCriteria = require('./criteria/PublicChatsCriteria');
const PublicAnnouncementCriteria = require('./criteria/PublicAnnouncementCriteria');

class SearchCriteriaFactory {
    createCriteria(username, context, target, searchWords) {
        console.log("Context", context);
        console.log("target", target);
        console.log("searchWords", searchWords);
        console.log("username", username);

        let criteria = null;
        if (context === 'citizens' && target === 'username')
            criteria = new CitizensByUsernameCriteria(searchWords);
        else if (context === 'citizens' && target === 'status')
            criteria = new CitizensByStatusCriteria(searchWords);
        else if (context === 'public_chats')
            criteria = new PublicChatsCriteria(searchWords);
        else if (context === 'private_chats')
            criteria = new PrivateChatsCriteria(username, searchWords);
        else if (context === 'announcements')
            criteria = new PublicAnnouncementCriteria(searchWords);

        return criteria;
    }
}

module.exports = SearchCriteriaFactory;