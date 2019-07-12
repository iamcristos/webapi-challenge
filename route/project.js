const express = require('express');
const route = express.Router();


const {validateIdParams, validateId,
     validateProjectBody} = require('../middleware/project');
const {getProject, getProjectId, addProject,
     updateProject, deleteProject, getProjectAction} = require('../controller/project');
const api = '/api/projects'


route.get('/',getProject);
route.get('/:id', validateIdParams, validateId,getProjectId);
route.post('/', validateProjectBody, addProject);
route.put('/:id', validateIdParams, validateId, validateProjectBody, updateProject);
route.delete('/:id', validateIdParams, validateId, deleteProject);
route.get('/:id/actions', validateIdParams, validateId, getProjectAction);

module.exports = route;