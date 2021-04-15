// =============================================
// REQUIRE
// =============================================
const User = require('../models/User');
const Community = require('../models/Community');
const catchAsync = require('../utils/catchAsync');
const { generateToken } = require('../utils/jwt');

// =============================================
// Logic
// =============================================
/**
 * Register user
 * @function
 * @POST
 * @param req.body {Object} email, firstName, lastName, location, password.
 * @returns {Object} Access token
 */
module.exports.registerUser = async (req, res) => {
    try {
        // get body from form
        const { email, firstName, lastName, location, password } = req.body;
        // create new User (only username and email)
        const user = new User({
            username: email,
            email,
            firstName,
            lastName,
            location,
        });
        // "register" user using .register()
        const registeredUser = await User.register(user, password);

        // login user
        req.login(registeredUser, (err) => {
            if (err) return next(err);

            const user = req.user;

            if (user) {
                // generate token
                const accessToken = generateToken({
                    _id: user._id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                });

                // send back token
                res.send({ accessToken });
                return;
            }
        });
    } catch (e) {
        console.log(e);
        res.send({ error: e.message });
    }
};

/**
 * Login user
 * @function
 * @POST
 * @param req.body {Object} username, password
 * @returns {Object} Access token
 */
module.exports.loginUser = (req, res) => {
    const user = req.user;

    if (user) {
        // generate token
        const accessToken = generateToken({
            _id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
        });

        // send back token
        res.send({ accessToken });
        return;
    }

    res.send({
        message: 'Error loggin in',
    });
};

/**
 * Logout user
 * @function
 * @POST
 * @returns {Object} Logout success message
 */
module.exports.logoutUser = (req, res) => {
    req.logout();
    req.session.destroy();
    res.send({ message: 'Successfully logged out' });
};

/**
 * Retrieve all communities by logged in User
 * @function
 * @GET
 * @returns {Array} List of communities by user logged in
 * @throws Will throw an error if user is not found
 */
module.exports.getAllCommunitiesOfUser = catchAsync(async (req, res) => {
    const user = await req.decodedUser;
    const userId = user._id;

    // Find User By ID
    const userModel = await User.findById(userId)
        .select('communities firstName lastName')
        .populate({
            path: 'communities',
            select: 'title description location',
        });

    res.send({ user: userModel });
});

/**
 * Edit user's avatar
 * @function
 * @PATCH
 * @param req.body avatar
 * @returns {Object} Success message
 * @throws Will throw an error if user is not found
 * @throws Will throw an error if user editing is not user logged in
 * @throws Will throw an error if req.body is left empty
 */
module.exports.editUserAvatar = async (req, res) => {
    try {
        const user = await req.decodedUser;
        const userId = user._id;

        const { avatar } = req.body;

        // Find User
        const userModel = await User.findById(userId);

        // Check if user logged in === user being edited
        if (!userModel._id.equals(userId)) {
            res.send({
                error: 'You are not authorized to perform this action',
            });
            return;
        }

        //  Check if body is empty
        if (
            req.body.constructor === Object &&
            Object.keys(req.body).length === 0
        ) {
            res.send({ error: 'Body is empty' });
            return;
        }

        // userModel.avatar = avatar
        await User.findByIdAndUpdate(userModel._id, {
            avatar: avatar ? avatar : '',
        });

        res.send({ message: 'Succesfully updated avatar' });
    } catch (e) {
        console.log(e);
        res.send({ error: e.message });
    }
};

/**
 * Retrieve user basic info
 * @function
 * @GET
 * @returns {Object} User object
 * @throws Will throw an error if :userId is invalid
 */
module.exports.getUserInfo = async (req, res) => {
    try {
        const user = await req.decodedUser;
        const userId = user._id;

        const userModel = await User.findById(userId).select(
            '-communities -username'
        );

        res.send({ user: userModel });
    } catch (e) {
        console.log(e);
        res.send({ error: e.message });
    }
};
