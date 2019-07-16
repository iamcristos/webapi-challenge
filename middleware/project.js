const db= require('../data/helpers/projectModel');
const {errorHelper} = require('../helpers/helper');

function validateIdParams(req,res,next) {
    const { id } = req.params;
    if(!Number(id)) {
        return errorHelper(res, 400, "Invalid Id Type")
    }
    next()
};

async function validateId(req,res,next) {
    const {id} = req.params;
    try {
        const response = await db.get(id)
        if(!response) {
            return errorHelper(res, 400, "Project do not exist");
        }
        req.project = response
        next()
    } catch (error) {
        return errorHelper(res, 500, "Error getting")
    }
};

function validateProjectBody(req,res,next) {
    const { body } = req;
    if(!Object.keys(body).length) {
        return errorHelper(res, 400, "Empty field")
    }
    next()
};


module.exports = {validateIdParams, validateId, validateProjectBody};