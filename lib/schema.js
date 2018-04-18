import mongoose from './db'
const Schema = mongoose.Schema

const LogSchema = new Schema({          
    url : { type: String,default : '', trim : true },
    title: {type: String,default : '', trim : true},
    text: {type: String,default : '', trim : true},
    time : { type: Date}
});
const Log = mongoose.model('Log',LogSchema)
export  { Log, mongoose}