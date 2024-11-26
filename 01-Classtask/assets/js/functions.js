export const BASE_URL = "http://localhost:8000";
export let endpoint;

export async function getAllData(endpoint) {
    const resp = await axios(`${BASE_URL}/${endpoint}`);
  return resp.data
}
export async function getDataById(endpoint,id) {
    const resp = await axios(`${BASE_URL}/${endpoint}/${id}`);
  return resp.data
}
export async function deleteDataById(endpoint,id){
    const resp = await axios.delete(`${BASE_URL}/${endpoint}/${id}`);
    return resp.data
}  
export async function addData(endpoint,payload){
    const resp = await axios.post(`${BASE_URL}/${endpoint}`, payload);
    return resp.data
}
export async function editDataById(endpoint,id,payload){
    const resp = await axios.put(`${BASE_URL}/${endpoint}/${id}`, payload);
    return resp.data
}