import { GetGeneration } from "../../models/generation";
import { apiCommand } from "../apiFactory";

const BASE_URL = process.env.API_URL
console.log(BASE_URL)
const getGeneration = () => {
    return apiCommand<GetGeneration>('GET')(BASE_URL, '/generation');
}

export {
    getGeneration
}