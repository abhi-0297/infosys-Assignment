
const AdminModel = require('./models');
const LicenseModel = require('./license');

const initModels = () => {
    // License and Model Associations
    AdminModel.belongsTo(LicenseModel, { foreignKey: 'license_id' });
    LicenseModel.hasMany(AdminModel, { foreignKey: 'license_id' });
};

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;



