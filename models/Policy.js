module.exports = (sequelize, Sequelize) => {
    const Policy = sequelize.define('policy', {
        policy_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        dop: {
            type: Sequelize.DATE,
        },
        customer_id: {
            type: Sequelize.INTEGER,
        },
        fuel: {
            type: Sequelize.STRING,
        },
        vehicle_segment: {
            type: Sequelize.STRING,
        },
        premimum: {
            type: Sequelize.INTEGER,
        },
        bodily_injury_liability: {
            type: Sequelize.INTEGER,
        },
        personal_injury_protection: {
            type: Sequelize.STRING,
        },
        property_damage_liability: {
            type: Sequelize.STRING,
        },
        collision: {
            type: Sequelize.STRING,
        },
        comprehensive: {
            type: Sequelize.STRING,
        },
        customer_gender: {
            type: Sequelize.STRING,
        },
        customer_income_group: {
            type: Sequelize.STRING,
        },
        customer_region: {
            type: Sequelize.STRING,
        },
        customer_marital_status: {
            type: Sequelize.STRING,
        },
    });

    return Policy;
};
