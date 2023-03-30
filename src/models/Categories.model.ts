import {Schema, model, Document} from 'mongoose'

export interface ICategories extends Document {
    name: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;

}

const CategoriesSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        require:false
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }   

})

export default model<ICategories>("Category", CategoriesSchema);