
const sequelize = require("../../config/dbConfig/mysqlDbConnection.js");
const Store = sequelize.db.stores;
const licenseKey = sequelize.db.license_keys;


const getStoreByPhone = async (phone) => {
  return await Store.count({
   where:{
    phone:phone
   } 
  })
}
const isLicenseKeyUnAllocated = async (license_key) => {
  return await licenseKey.count({
   where:{
    l_key:license_key
   } 
  })
}




module.exports={
  getStoreByPhone,
  isLicenseKeyUnAllocated
}