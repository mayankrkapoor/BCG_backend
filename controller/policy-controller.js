const Logger = require('../utilities/logger').child({ location: './app/app.js' });
const db = require('../models');

const Policy = db.policies;
// const op = db.Sequelize.op;

// // Create and Save a new policy
// exports.create = (req, res) => {

// };

// // Retrieve all policies from the database.
exports.findAll = (req, res) => {
    Policy.findAll()
        .then(
            (data) => {
                res.send(data);
            },
        )
        .catch(() => {
            res.status(500).send({
                message: 'Error retrieving Policies',
            });
            Logger.error('error in getting policies');
        });
};

// // Find a single policy with customer id
exports.findPolicyByCustomer = (req, res) => {
    const id = req.params.id;
    Policy.findAll({ where: { customer_id: id } })
        .then(
            (data) => {
                res.send(data);
            },
        )
        .catch(() => {
            res.status(500).send({
                message: `Error retrieving Policy with customer id=${id}`,
            });
        });
};

// Find a single policy with a policy id
exports.findByPolicyId = (req, res) => {
    const id = req.params.id;
    Policy.findByPk(id).then((data) => {
        res.send(data);
        Logger.error(data);
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

exports.findCountByFuel = (req, res) => {
    const fuel = req.params.fuel;
    Policy.findAndCountAll({
        where: {
            // eslint-disable-next-line object-shorthand
            fuel: fuel,
        },
    }).then((data) => {
        res.send(data);
        Logger.error(data.count);
    }).catch((err) => {
        res.status(500).send({
            message: 'Error',
        });
        Logger.error(err);
    });
};

exports.findCountByYear = (req, res) => {
    const year = req.params.year;
    const month = req.params.month;
    Policy.findAndCountAll({
        where: {
            // eslint-disable-next-line object-shorthand
            fuel: fuel,
        },
    }).then((data) => {
        res.send(data);
        Logger.error(data.count);
    }).catch((err) => {
        res.status(500).send({
            message: 'Error',
        });
        Logger.error(err);
    });
};
