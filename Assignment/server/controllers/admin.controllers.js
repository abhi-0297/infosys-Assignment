const ResponseUtils=require("../config/response.utils")

const LicenseService = require('../services/license.services');

const MODULE_NAME = 'stock_management';



const getAdmin = async (req, res) => {
  try {
    const query= req.params.id
    const results = await LicenseService.getAdminData(query);
    if (!results) {
      return res.json({
        success: false,
        data: "invalid response"
      });
    }
    return res.status(200).json({
      success: true,
      data: results
    });
  } catch (error) {
    error(error);
    return ResponseUtils.error(res, error);

  }
  };





module.exports = {
  getAdmin,
};
