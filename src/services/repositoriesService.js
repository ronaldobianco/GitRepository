const Repository = require('../model/repositoryModel')


async function postRepository(queryParams){
    return Repository.create(
        queryParams
    ).catch(function(error){error})
}
async function getRepository(id){
    return Repository.findAll({
        where: {
            id:id
        }
    }).catch(function(error){error})
}
async function deleteRepository(id){
    return Repository.destroy({
        where: {
            id:id
        }
    }).catch(function(error){error})
}

async function getAllRepository(){
    return Repository.findAll({}).catch(function(error){error})
}
module.exports = { postRepository , getRepository , getAllRepository , deleteRepository}
