const storeDao  = require("../DAO/storeDao.js")
// const licenceService = require("../services/licenceService.js")

const registration = async  (req, res) => {
   const isPhoneAvailable = await storeDao.getStoreByPhone(req.body.phone)
   
  if(isPhoneAvailable == 0 ){

    const licenceCount = await storeDao.isLicenseKeyUnAllocated(req.body.license_key)
    
    if(licenceCount == 0){
      console.log(" create new store")
    }

    //validate licience key
    res.status(200).send({
      "message": "store created successfully",
      "status":"SUCCESS"
  })
  }else{
     res.status(500).send({
      "message": "phone number already exists",
      "status":"failed"
  })
  }



}

module.exports={registration}