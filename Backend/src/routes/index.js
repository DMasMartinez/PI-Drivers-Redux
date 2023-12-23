

const { Router } = require('express')

const router = Router()
const driverhandler = require('../driverhandler/driverhandler')
const teamshandler = require('../teamshandler/teamshandler')
router.use("/driver",driverhandler)
router.use("/teams",teamshandler)

module.exports = router;