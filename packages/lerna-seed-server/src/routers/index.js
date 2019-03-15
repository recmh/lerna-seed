var logger = require('../config/logger').getDefault();
var initial = false;

var indexController = require('../controllers/indexController');

/**
 *
 * @param app express实例
 * @param passport 用户认证模块
 */
module.exports = function(app,passport) {
    if(initial) {
        logger.info('index.js router has loaded,don\'t reload it!' );
        return;
    }

    app.get('/',indexController.home);

    app.get('/login',indexController.login);

    app.get('/logout',indexController.logout);


    logger.info('load index.js router complement!');
};
 
