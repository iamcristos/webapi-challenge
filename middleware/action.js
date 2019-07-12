const db = require('../data/helpers/actionModel');
const {errorHelper} = require('../helpers/helper');
const projectDb = require('../data/helpers/projectModel');

async function validateId(req,res,next) {
    const { id } = req.params;
    try {
        const action = await db.get(id)
        if(!Object.keys(action).length) {
            return errorHelper(res, 404, "No actions found")
        }
        req.action = action
        next()
    } catch (error) {
        return errorHelper(res, 500, "Error cannot get actions")
    }
};

async function validateProjectId(req,res,next) {
    try {
        const {project_id} = req.body;
        const project = await projectDb.get(project_id)
        if(!project.length) {
            return errorHelper(res, 404, "Project doest not exist")
        }
        next()
    } catch (error) {
        return errorHelper(res, 500, "Error cannot validate Post Id")
    }
}

module.exports = {validateId, validateProjectId}