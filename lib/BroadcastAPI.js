/**
 * Purpose: This modules offers functions to notify all clients connected to the server
 * about an event that happens.
 * It relies on socket.io to transmit the messages/events
 */
const ChatBroadcaster = require('./ChatBroadcaster');
let chatBroadcaster = null;

/**
 * Purpose: setUpChannel sets up an object chatBroadcaster with socket.io
 * @param io: It is a socket.io instance
 */
exports.setUpChannel = (io) => {
	if (!chatBroadcaster)
		chatBroadcaster = new ChatBroadcaster();

	chatBroadcaster.setChannel(io);
};

/**
 * Purpose: sends the message/data to all connected clients
 * @param data: The information to send to clients
 */
exports.broadcastEventToAll = (data)=>{
	if (chatBroadcaster)
		chatBroadcaster.broadcast('newPublicChat',data);
};

exports.broadcastAnnouncementEventToAll = (data)=>{
	if (chatBroadcaster)
		chatBroadcaster.broadcast('newAnnouncement',data);
};

exports.broadcastUserEventToAll = (data)=>{
	if (chatBroadcaster)
		chatBroadcaster.broadcast('user',data);
};