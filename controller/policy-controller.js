const Logger = require('../utilities/logger').child({ location: './app/app.js' });
const db = require('../models');

const Policy = db.policies;
// const op = db.Sequelize.op;

// // Create and Save a new policy
// exports.create = (req, res) => {

// };

// // Retrieve all policies from the database.
// exports.findAll = (req, res) => {

// };

// // Find a single policy with an id
// exports.findByPolicyId = (req, res) => {

// };

// Find a single policy with a customer id
exports.findByPolicyId = (req, res) => {
    const id = req.params.id;
    Policy.findByPk(id).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message: `Error retrieving Policy with id=${id}`,
        });
        Logger.error(err);
    });
};

// // Update a policy by the id in the request
// exports.update = (req, res) => {

// };

// // Delete a policy with the specified id in the request
// exports.delete = (req, res) => {

// };

// // Delete all policies from the database.
// exports.deleteAll = (req, res) => {

// };
