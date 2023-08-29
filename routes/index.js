// Create a router instance
const router = require('express').Router();
// Import user and thought routes
const api = require('./api-routes');

router.use('/api', api)

// Export the router
module.exports = router;