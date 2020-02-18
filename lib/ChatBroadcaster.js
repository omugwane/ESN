module.exports = class ChatBroadcaster {
    constructor() {
        this.observers = [];
    }

    subscribe(socket) {
        this.observers.push(socket);
    }

    unsubscribe(socket) {
        this.observers = this.observers.filter((subscriber) => subscriber !== socket);
    }

    broadcast(data) {
        this.observers.forEach((socket) => {
            socket.broadcast.emit('new-chat', data)
        });
    }
}