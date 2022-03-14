const repositorieController = require('../controllers/RepositoryController')
const express = require('express');
const router = express.Router();

router.get('/searchGitRepository', repositorieController.fetchRepository)
router.post('/postRepository', repositorieController.postRepository)
router.get('/getAllRepository', repositorieController.getAllRepository)
router.post('/getRepository', repositorieController.getRepositoryById)
router.delete('/deteleRepository/:id?', repositorieController.deleteRepository)

module.exports = router;