const Repository = require('../model/repositoryModel')


async function postRepository(queryParams){
    return Repository.create(
        queryParams
    )
}
async function getRepository(id){
    return Repository.findAll({
        where: {
            id:id
        }
    })
}
async function deleteRepository(id){
    return Repository.destroy({
        where: {
            id:id
        }
    })
}

async function getAllRepository(){
    return Repository.findAll({})
}
module.exports = { postRepository , getRepository , getAllRepository , deleteRepository}
