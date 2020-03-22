class Criteria {
    constructor(context, target, value) {
        this.context = context;
        this.target = target;
        this.value = value;
    }

    getFilter() {
        if (this.target === 'username')
            return {username: {$regex: this.value, $options: 'i'}};
        else if (this.target === 'username')
            return {status: {$regex: this.value, $options: 'i'}};
        else if(this.target === 'public_chats')
            return {content: {$regex: this.value, $options: 'i'}, receiver: null};
        else if(this.target === 'private_chats')
            return {content: {$regex: this.value, $options: 'i'}, receiver: {$ne: null}};
        else
            return {content: {$regex: this.value, $options: 'i'}};
    }
}

module.exports = Criteria;