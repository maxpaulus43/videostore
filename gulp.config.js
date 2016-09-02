function config() {
    
    var webroot = "./client/";

    return {
        webroot: webroot,
        myJs: webroot + "assets/js/**.js",
        myCss: webroot + "assets/css/**.css",
        index: webroot + "index.html"
    };
}


module.exports = config();
