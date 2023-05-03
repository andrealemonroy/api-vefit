import { model, Schema } from "mongoose";
const ProfileSchema = new Schema({
    birthday: {
        type: String,
        required: false,
    },
    weight: {
        type: Number,
        required: false,
    },
    height: {
        type: Number,
        required: false,
    },
    diseases: {
        type: Array,
        default: []
    },
    complete: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true,
});
export default model("Profile", ProfileSchema);
//# sourceMappingURL=Profile.model.js.map