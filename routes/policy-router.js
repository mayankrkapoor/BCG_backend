module.exports = (app) => {
    const policyController = require('../controller/policy-controller');
    const router = require('express').Router();

    router.get('/:id', policyController.findByPolicyId);

    app.use('/api/policy/', router);
};
