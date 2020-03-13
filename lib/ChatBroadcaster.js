
class ChatBroadcaster {
	constructor() {
		this.io = null;
		this.observers = [];
	}

	setChannel(channel){
		this.io = channel;
	}
	subscribe(socket) {
		this.observers.push(socket);
	}

	unsubscribe(socket) {
		this.observers = this.observers.filter((subscriber) => subscriber !== socket);
	}

	broadcast(data) {
		this.io.emit('newPublicChat', data);
	}
}

module.exports = ChatBroadcaster;