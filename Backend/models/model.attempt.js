import mongoose from 'mongoose';

const AttemptsSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId, // user id from mongodb
            ref: 'User',
            required: true,
        },

        questionName: {
            type: String,
            required: true,
        },

        questionDescription: {
            type: String,
        },

        questionType: {
            type: String, // identifier for problem
            required: true
        },


        attemptCount: {
            type: Number,
            default: 1 // track how many attempts made | set at 1 when attempt is created
        },

        difficulty: {
            type: String,
            enum: ['easy','medium','hard'],
            required: true,

        },

        note: {
            type: String, // note from user
            default: ''
        },

        lastAttempt: {
            type: Date,
            required: true,
        },

        nextReminder: {
            type: Date,
        },
    },

);


// model creation for attempts
export default mongoose.model("Attempts", AttemptsSchema);
