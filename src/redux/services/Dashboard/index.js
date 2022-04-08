import client from "../../config/HttpClient";

const baseURL = window.location.origin;
// const dynamicPath = window.location.pathname.split('/')[1];
const isLocal = baseURL === 'http://localhost:3000';

export const dynamicPathName = isLocal ? "http://localhost:4000" : baseURL + '/'

export const getTodoTasks = () => {
    return client.get("https://jsonplaceholder.typicode.com/todos")
}

export const fetchFakeApiResponse = () => {
    return client.get(`${dynamicPathName}/channels/getUserInfo`)
}