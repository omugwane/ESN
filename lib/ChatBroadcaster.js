
class ChatBroadcaster {
	constructor() {
		this.io = null;
		this.observers = [];
	}

	setChannel(channel){
		this.io = channel;
	}

	broadcast(event,data) {
		this.io.emit(event, data);
	}
}

module.exports = ChatBroadcaster;