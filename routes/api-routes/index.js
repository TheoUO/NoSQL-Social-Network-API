// router instance
const router = require('express').Router();

// Imports
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// endpoints for routes
router.use('/user',userRoutes);
router.use('/thought',thoughtRoutes);

// Exports
module.exports = router;