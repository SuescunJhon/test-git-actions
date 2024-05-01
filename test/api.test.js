import request from "supertest";
import app from "../src/app.js";
import mongoose from "mongoose";
import { DBHOST } from "../src/config.js"
import apiModel from "../src/models/api.model.js";

beforeAll(async () => {
    try {
        await mongoose.connect(DBHOST)
        console.log('DB is connected')
    } catch (error) {
        console.error(error)
    }
})

describe('GET /api', () => {
    it('should response with a array', async () => {
        const response = await request(app).get('/api')
        expect(response.statusCode).toBe(200)
        expect(response.body[0]).toHaveProperty('name')
        expect(response.body[0]).toHaveProperty('description')
    })
})