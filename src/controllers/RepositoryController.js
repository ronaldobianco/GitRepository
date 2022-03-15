const githubService = require("../services/githubService")
const repositoryService = require("../services/repositoriesService")


async function fetchRepository(req, res){
    const queryParams = req.query
    const repositories = await githubService.searchRepository(queryParams)
    return res.status(200).json({'body': {message:'Successful repositories searched', data:repositories}})
}
async function getAllRepository(req, res){
    const repositories = await repositoryService.getAllRepository()
    return res.status(200).json({'body': {message:'Successful searched all repositories', data:repositories}})
}
async function getRepositoryById(req, res){
    const repositoryPath = req.body
    const repositories = await githubService.searchRepositoryById(repositoryPath)
    if (!repositories) {
        return res.status(404).json({'body': {message:'Repository not found'}})
    }
    return res.status(200).json({'body': {message:'Successful retrieved github repository', data:repositories}})
}
async function postRepository(req, res){
    const queryParams = req.body
    const repositories = await repositoryService.postRepository(queryParams)
    if (!repositories) {
        return res.status(404).json({'body': {message:'Error on creation of repository', data:repositories}})
    }
    return res.status(201).json({'body': {message:'Successful created repository', data:repositories}})
}
async function deleteRepository(req, res){
    const repositoryId = req.params.id
    const repositories = await repositoryService.deleteRepository(repositoryId)
    if (!repositories) {
        return res.status(404).json({'body': {message:'Repository not found', data:repositories}})
    }
    const allRepositories = await repositoryService.getAllRepository()
    return res.status(200).json({'body': {message:'Successful deleted repository', data:allRepositories}})
}
module.exports = { fetchRepository , postRepository , getAllRepository , getRepositoryById , deleteRepository}