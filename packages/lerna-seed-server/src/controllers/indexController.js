exports.home = function(req,res,next) {
    console.log('home');
    res.render( 'home',{
        name:['one','two','three']
    });
};

exports.login = function(req,res,next) {
    console.log('login')
    res.render( 'account/login');

};

exports.logout = function(req,res,next) {
    console.log('logout')
    res.render( 'account/logout');
};
