const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

// Api Routes
router.use('/api', apiRoutes);

// This is for the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;