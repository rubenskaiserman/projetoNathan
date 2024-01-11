const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Usuario = new Schema({
    nome:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }, 
    senha:{
        type:String,
        required:true
    },
    cel:{
        type:String,
        required:true, 
        unique:true
    }
})

mongoose.model("Usuarios", Usuario)
