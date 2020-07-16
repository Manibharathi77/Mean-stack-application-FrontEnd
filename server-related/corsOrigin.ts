/**
 * CORS origin to let the request from client to hit the back end aka node server.
 */

let corsOption = {
    origin: '*',
    optionsSuccessStatus: 200
};

/**
 * Exporting the corsOption to make it available to other modules. 
 */
module.exports = corsOption;
