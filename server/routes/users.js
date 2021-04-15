// =============================================
// REQUIRE
// =============================================
const express = require('express');
const passport = require('passport');
const router = express.Router();
const {
    registerUser,
    loginUser,
    logoutUser,
    getAllCommunitiesOfUser,
    editUserAvatar,
    getUserInfo,
} = require('../controller/users');
const { requireLogin } = require('../utils/middlewares');
// ==============================================
// ROUTES
// ==============================================

router.route('/register').post(registerUser);
router.route('/login').post(passport.authenticate('local'), loginUser);
router.route('/logout').post(logoutUser);
router.route('/communities').get(requireLogin, getAllCommunitiesOfUser);
router.route('/updateAvatar').patch(requireLogin, editUserAvatar);
router.route('/info').get(requireLogin, getUserInfo);

module.exports = router;
