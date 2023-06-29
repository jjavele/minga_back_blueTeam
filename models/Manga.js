import {Schema, model, Types} from "mongoose"

let collection = "mangas"
let schema = new Schema({
    author_id:{type:Types.ObjectId, ref:"authors" , require:true },
    company_id:{type:Types.ObjectId, ref:"mangas" , require:true },
    title:{type:String, require:true},
    cover_photo:{type:String, require:true},
    character_photo:{type:String, require:true},
    categoty_id:{type:Types.ObjectId, ref:"categories" , require:true },
    time_stamps:{type:String, require:true}
}, {
    timestamps:true
})

const Manga = model(collection, schema)
export default Manga