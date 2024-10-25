const ResponseUtils=require("../config/response.utils")
const LicenseService = require('../services/license.services');



const getLicense = async (req, res) => {
  try {
    const results = await LicenseService.getLicenseData();
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
  getLicense
};