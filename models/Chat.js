const mongoose = require('mongoose');

const chatTypes = {
    video: 'video',
    image: 'image',
    text: 'text',
}

const chatSchema = mongoose.Schema({
    sender: {
        type: String,
        required: true
    },

    content: {
        type: String,
    },
    status: {
        type: String,
    },
    postedAt: {
        type: Date, default: Date.now,
    },
    receiver: {
        type: String,
        default: null
    },
    type: {
        type: String,
        default: chatTypes.text
    },
    fileUrl: {
        type: String,
        default: null
    }
});
chatSchema.index({content: 'text'});
module.exports = mongoose.model('Chat', chatSchema);