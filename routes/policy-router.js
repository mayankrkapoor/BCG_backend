module.exports = (app) => {
    const policyController = require('../controller/policy-controller');
    const router = require('express').Router();

    router.get('/:id', policyController.findByPolicyId);
    router.get('', policyController.findAll);
    router.get('/fuel/:fuel', policyController.findCountByFuel);

    app.use('/api/policy/', router);
};
