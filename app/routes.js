const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/en/permissions/check/are_you_charging', function(req, res) {
    const activity = req.session.data['activity']
    if (activity === 'hunting' || activity === 'quad-biking') {
        res.redirect('/en/permissions/check/cant_do')
    } else {
        res.render('en/permissions/check/are_you_charging');
    }
    
});

module.exports = router
