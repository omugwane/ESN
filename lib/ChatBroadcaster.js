
class ChatBroadcaster {
	constructor() {
		this.io = null;
		this.observers = [];
	}

	setChannel(channel){
		this.io = channel;
	}

	broadcast(data) {
		this.io.emit('newPublicChat', data);
	}
}

module.exports = ChatBroadcaster;