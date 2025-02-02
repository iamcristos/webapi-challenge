const express = require('express');
const route = express.Router();


const {validateIdParams, validateProjectBody} = require('../middleware/project');
const {validateId, validateProjectId} = require('../middleware/action');
const {getAction, getAnAction, 
    updateAction, addAction, deleteAction} = require('../controller/action');

route.get('/', getAction);

route.get('/:id', validateIdParams, validateId, getAnAction);

route.post('/', validateProjectBody, validateProjectId,addAction);

route.put('/:id', validateIdParams, validateId, 
validateProjectBody, validateProjectId,updateAction);

route.delete('/:id', validateIdParams, validateId,deleteAction);

module.exports = route;