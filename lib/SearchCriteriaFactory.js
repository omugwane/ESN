const CitizensByUsernameCriteria = require('./criteria/CitizensByUsernameCriteria');
const CitizensByStatusCriteria = require('./criteria/CitizensByStatusCriteria');
const PrivateChatsCriteria = require('./criteria/PrivateChatsCriteria');
const PublicChatsCriteria = require('./criteria/PublicChatsCriteria');
const PublicAnnouncementCriteria = require('./criteria/PublicAnnouncementCriteria');

class SearchCriteriaFactory {
    createCriteria(context, target, searchWords) {
        console.log("Factory", context);
        console.log("Factory", target);
        console.log("Factory", searchWords);

        if (context === 'citizens' && target === 'username')
            return new CitizensByUsernameCriteria(searchWords);
        else if (context === 'citizens' && target === 'status')
            return new CitizensByStatusCriteria(searchWords);
        else if (context === 'public_chats') {
            return new PublicChatsCriteria(searchWords);
        } else if (context === 'private_chats')
            return new PrivateChatsCriteria(searchWords);
        else if (target === 'announcements')
            return new PublicAnnouncementCriteria(searchWords);
        else
            return null;
    }
}

module.exports = SearchCriteriaFactory;