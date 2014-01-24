exports.install = function(framework) {
    framework.route('#400', error400);
    framework.route('#401', error401);
    framework.route('#403', error403);
    framework.route('#404', error404);
    framework.route('#408', error408);
    framework.route('#431', error431);
    framework.route('#500', error500);
};

// Bad Request
function error400() {
    var self = this;
    self.statusCode = 400;
    self.plain(utils.httpStatus(self.statusCode));
}


// Unauthorized
function error401() {
    var self = this;
    self.statusCode = 401;
    self.plain(utils.httpStatus(self.statusCode));
}

// Forbidden
function error403() {
    var self = this;
    self.statusCode = 403;
    self.plain(utils.httpStatus(self.statusCode));
}

// Not Found
function error404() {
    var self = this;
    self.statusCode = 404;
    self.plain(utils.httpStatus(self.statusCode));
}

// Request Timeout
function error408() {
    var self = this;
    self.statusCode = 408;
    self.plain(utils.httpStatus(self.statusCode));
}

// Request Header Fields Too Large
function error431() {
    var self = this;
    self.statusCode = 431;
    self.plain(utils.httpStatus(self.statusCode));
}

// Internal Server Error
function error500() {
    var self = this;
    self.statusCode = 500;
    self.plain(utils.httpStatus(self.statusCode));
}