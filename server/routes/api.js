const express = require('express');
const router = express.Router()

const carsRoutes = require('./cars/cars')
router.use('/cars', carsRoutes)

const siteDataRoutes = require('./sitedata/sitedata')
router.use('/sitedata', siteDataRoutes)

const usersRoutes = require('./users/users')
router.use('/users', usersRoutes)

const partsRoutes = require('./parts/parts')
router.use('/parts', partsRoutes)

const authRoutes = require('./login/login')
router.use('/login', authRoutes)

module.exports = router