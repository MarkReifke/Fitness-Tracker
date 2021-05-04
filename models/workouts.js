const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
        type: {
            type: String, 
            trim: true,
            required: "Include type of exercise",
        },
        name: {
            type: String, 
            trim: true,
            required: "Include a name of exercise",
        },
        duration: {
            type: Number, 
            required: "Include a duration of exercise",
        },
        distance: {
            type: Number, 
         
        },
        weight: {
            type: Number, 
        
        },
        reps: {
            type: Number, 
            
        },
        sets: {
            type: Number, 
            
        },
    }
    ]
});

const workouts = mongoose.model("Workouts", WorkoutSchema);
module.exports = workouts