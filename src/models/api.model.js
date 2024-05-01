import { Schema, model } from "mongoose";

const apiSchema = new Schema({
    name: String,
    description: String
})

export default model('miModelo', apiSchema)