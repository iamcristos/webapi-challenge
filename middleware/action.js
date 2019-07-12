const db = require('../data/helpers/actionModel');
const {errorHelper} = require('../helpers/helper');

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



module.exports = {validateId}