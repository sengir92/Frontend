import axios from "axios";

const insntance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
});

export default insntance;