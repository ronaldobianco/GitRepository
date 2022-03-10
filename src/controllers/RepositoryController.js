const githubService = require("../services/githubService")
const repositoryService = require("../services/repositoriesService")


async function fetchRepository(req, res){
    const queryParams = req.query
    const repositories = await githubService.searchRepository(queryParams)
    return res.status(200).json({'body': {message:'Successful repositories searched', data:repositories}})
}
async function getAllRepository(res){
    const repositories = await repositoryService.getAllRepository()
    return res.status(200).json({'body': {message:'Successful searched all repositories', data:repositories}})
}
async function getRepositoryById(req, res){
    const repositoryId = req.params.id
    const repositories = await repositoryService.getRepository(repositoryId)
    return res.status(200).json({'body': {message:'Successful retrieved repository', data:repositories}})
}
async function postRepository(req, res){
    const queryParams = req.body
    const repositories = await repositoryService.postRepository(queryParams)
    return res.status(200).json({'body': {message:'Successful created repository', data:repositories}})
}
async function deleteRepository(req, res){
    const repositoryId = req.params.id
    const repositories = await repositoryService.deleteRepository(repositoryId)
    return res.status(200).json({'body': {message:'Successful deleted repository', data:repositories}})
}
module.exports = { fetchRepository , postRepository , getAllRepository , getRepositoryById , deleteRepository}