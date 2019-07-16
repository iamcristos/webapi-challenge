const db = require('../data/helpers/projectModel');
const {errorHelper, successHelper} = require('../helpers/helper');

async function getProject(req,res) {
    try {
        const project = await db.get()
       if(!project.length) {
           return errorHelper(res, 200, "There are no Projects")
       }
       return successHelper(res, 200, project)
    } catch (error) {
        return errorHelper(res, 500, "Error cannot get Project")
    }
}

async function getProjectId(req,res) {
    try {
        return successHelper(res, 200, req.project)
    } catch (error) {
        return errorHelper(res, 500, "Error cannot get Project")
    }
};

async function addProject(req, res) {
    const {body} = req;
    if(!body.name || !body.description) {
        return errorHelper(res, 400, "name and description are required")
    }
    try {
       const project = await db.insert(body);
       successHelper(res, 201, project)
    } catch (error) {
        errorHelper(res, 500, "Error post was not added")
    }
};

async function updateProject(req,res) {
    const {id} = req.params;
    const { body } = req;
    if(!body.name || !body.description) {
        return errorHelper(res, 400, "name and description are required")
    }
    try {
        const update = await db.update(id, body);
        return successHelper(res, 200, update)
    } catch (error) {
        errorHelper(res, 500, "Error cannot update Project")
    }
};

async function deleteProject(req,res) {
    const { id } = req.params;
    try {
        const project = await db.remove(id);
        return successHelper(res, 200, "Project removed")
    } catch (error) {
        return errorHelper(res, 500, "Error Project could not be deleted")
    }
};

async function getProjectAction(req,res) {
    const { id } = req.params;
    try {
        const actions = await db.getProjectActions(id)
        return successHelper(res, 200, actions)
    } catch (error) {
        return errorHelper(res, 500, "Error cannot get Project Actions")
    }
};

module.exports= {getProject, getProjectId, addProject, 
    updateProject, deleteProject, getProjectAction};