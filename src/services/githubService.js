const axios = require('axios');
const baseUrl = 'https://api.github.com/'

function searchRepository(queryParams){
    const formatedQuery = formatQueryToString(queryParams)
    return axios.get(`${baseUrl}search/repositories?${formatedQuery}`)
        .then(response => response.data)
        .catch(error => error);
}
function searchRepositoryById(queryParams){
    return axios.get(`${baseUrl}repos/${queryParams.path}`)
        .then(response => response.data)
        .catch(error => error);
}
function formatQueryToString(query){
    return Object.keys(query)
    .map(key => `${key}=${query[key]}`)
    .join('&');
}
module.exports = { searchRepository , searchRepositoryById }