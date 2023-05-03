import { model, Schema } from 'mongoose';
const updateUser = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: false,
    },
    termsAndConditions: {
        type: Boolean,
        required: true,
        default: true,
    },
    privacyPolicy: {
        type: Boolean,
        required: true,
        default: true,
    },
    sub: {
        type: String,
        unique: true,
        require: false,
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'Profile',
    }
}, {
    timestamps: true,
});
export default model('UserCapa1', updateUser);
//# sourceMappingURL=UserCapa1.model.js.map