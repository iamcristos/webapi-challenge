const db = require('../data/helpers/actionModel');
const {errorHelper, successHelper} = require('../helpers/helper');

async function getAction(req,res) {
    try {
        const action = await db.get()
        if(!action.length) {
            return successHelper(res, 200, "No actions");
        }
        return successHelper(res, 200, action)
    } catch (error) {
        return errorHelper(res, 500, "Error cannot get Actions")
    }
};

function getAnAction(req,res) {
    successHelper(res, 200, req.action);
}

async function updateAction(req,res) {
    const {id} = req.params;
    const {body} = req;
    if(!body.description || !body.project_id) {
        return errorHelper(res, 400, "description and Project_Id are required")
    }
    try {
        const update = await db.update(id,body)
        return successHelper(res, 200, update)
    } catch (error) {
       return errorHelper(res, 500, "Error cannot Update")
    }
};

async function addAction(req,res) {
    const {body} = req;
    if(!body.description || !body.project_id) {
        return errorHelper(res, 400, "description and Project_Id are required")
    }
    try {
        const action = await db.insert(body)
        return successHelper(res, 201, action)
    } catch (error) {
       return errorHelper(res, 500, "Error cannot Add action")
    }
};

async function deleteAction(req,res) {
    const {id} = req.params;
    try {
        const action = db.remove(id)
        return successHelper(res, 200, "Action deleted")
    } catch (error) {
        return errorHelper(res, 500, "Error cannot delete action")
    }
}

module.exports = {getAction, getAnAction, updateAction, addAction, deleteAction};