import axios from 'axios';
const API_BASE = 'http://localhost:4000/api'
// const API_BASE = 'https://yuhong-tuiter-node-server-app.herokuapp.com/api'
const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    console.log(response)
    return response.data;
}

export const findTuits  = async () => {
    const response = await axios.get(TUITS_API);
    return response.data;

}
export const deleteTuit = async (tid) => {
    const response = await axios
        .delete(`${TUITS_API}/${tid}`)
    return response.data
}

export const updateTuit = async (tuit) => {
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}
