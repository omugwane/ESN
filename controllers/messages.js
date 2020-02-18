// Import message model
Contact = require('../models/Message');
const express=require('express');
const router=express.Router();
const Message=require('../models/Message');

//return all messages
router.get('/',async(req,res)=>{
    try{
        const messages=await Message.find();
        res.json(messages); 
    }catch(err){
        res.json({message:err});
    }
})

//save a message
router.post('/',async (req,res)=>{
    const message=new Message({
        content: req.body.content,
        author:req.body.author,
        messageType:req.body.messageType,
        target:req.body.target
    });
    try{
        const savedMessage=await message.save();
        res.json(savedMessage)
    }catch(err){
        res.json({message:err});
    }
});

//get a message by id
router.get('/:messageId', async(req,res)=>{
    try{
        const message= Message.findById(req.params.messageId);
        res.json(message);
    }catch(err){
        res.json({message:err});
    }
});

//get a message by author
router.get('/:author', async(req,res)=>{
    try{
        const message= Message.findById(req.params.author);
        res.json(message);
    }catch(err){
        res.json({message:err});
    }
});

//delete a message
router.delete('/:messageId',async(req,res)=>{
    try{
        const deletedMessage= Message.remove({_id:req.params.messageId})
    }catch(err){
        res.json({message:err});
    }
});

//update a message
router.patch('/:messageId',async (req,res)=>{
    try{
        const updatedMessage=await Message.updateOne(
            {_id:req.params.messageId},
            {$set:{content:req.body.content}}
        );
        res.json(updatedMessage);
    }catch(err){
        res.json({message:err});
    }
});

module.exports=router;