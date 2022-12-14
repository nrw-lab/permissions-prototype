const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/en/permissions/check/are_you_charging', function(req, res) {
    const activity = req.session.data['activity']

    // don't check if need to end journey for user if coming from summary page
    if (!req.headers.referer.includes("/check/summary")) {
        if (activity === 'trail-hunting' || activity === 'quad-biking') {
            res.redirect('/en/permissions/check/cant_do')
        } else {
            res.render('en/permissions/check/are_you_charging');
        }
    } else {
        res.render('en/permissions/check/are_you_charging');
    }
    
});

router.get('/en/permissions/check/choose_site', function(req, res) {
    const isCharging = req.session.data['are-you-charging']

    // don't check if need to end journey for user if coming from summary page
    if (!req.headers.referer.includes("/check/summary")) {
        if (isCharging === 'yes') {
            res.redirect('/en/permissions/check/ask_permission')
        } else {
            res.render('en/permissions/check/choose_site');
        }
    } else {
        res.render('en/permissions/check/choose_site');
    }
    
});

router.get('/en/permissions/check/submit', function(req, res) {
    const numOfPeople = req.session.data['how-many-people']

    if (parseInt(numOfPeople) > 9) {
        res.redirect('/en/permissions/check/ask_permission')
    } else {
        res.redirect('/en/permissions/check/no_permission')
    }
    
});

module.exports = router
