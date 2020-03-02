let mongoose=require('mongoose');

//create a schema
let chatsSchema=mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    messageType:{
        type:String, 
        required:true
    },
    target:{
        type:String, 
        required:true
    },
    postedAt:{
        type:Date, 
        default:Date.now,
        required:true
        
    }
});
   
module.exports=mongoose.model('messages',messageSchema);