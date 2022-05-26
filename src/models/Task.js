import { Schema, model } from "mongoose"; //schema son los nombres de los campos, model el nombre de la tabla

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true,
    versionKey: false
})

export default model("Task", taskSchema)