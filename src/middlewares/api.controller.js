import myModel from "../models/api.model.js";

export async function getInformation(_req, res) {
    const data = await myModel.find()
    res.json(data)
}