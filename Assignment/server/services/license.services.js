const _ = require('lodash');
const LicenseModel = require('../models/license');
const AdminModel = require('../models/models');



const getLicenseData = async () => {
  const licenses = await LicenseModel.findAll();
  return licenses;
   
};

const getAdminData = async (query) => {
  const licenses = await AdminModel.findAll({ where: { license_id: query} });
  return licenses;
   
};


module.exports = {
  getLicenseData,
  getAdminData
};
