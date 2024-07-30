import axios from "axios"

const API='http://localhost:8080/response';

export const createDetails = (details) => axios.post(API, details);