import mongoose from 'mongoose';

const AttemptsSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId, // user id from mongodb
            ref: 'User',
            required: true,
        },


        problemId: {
            type: String, // identifier for problem
            required: true
        },


        attemptCount: {
            type: Number,
            default: 1 // track how many attempts made | set at 1 when attempt is created
        },
          
          
        completed: {
            type: Boolean,
            default: false // completed true or false | completed or incomplete
        },
          
        
        reminderCount: {
            type: Number,
            default: 0 // track how many reminders have been sent
        },

        difficulty: {
            type: String,
            enum: ['easy','medium','hard'],
            required: true,
            default: 'pending'

        },

        reminderNote: {
            type: String, // note from user
            default: ''
        },

        lastAttempt: {
            type: Date,
        },
    },

    {
        timestamps: true, // Note: 'timestamps' should be in lowercase
    }

);


// model creation for attempts
export default mongoose.model("Attempts", AttemptsSchema);
