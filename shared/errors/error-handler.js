const HttpError = require("./http-error");
const ConnectionError = require("./connection-error");
const errorHandler = (error, response) => {
    let code = 500;
    let message = 'Internal Server Error';

    if(error instanceof HttpError) {
        code = error.statusCode;
        message = error.message;
    }
    else if(error instanceof ConnectionError){
        code = 503;
        message = error.message;
    }
    response.status(code)
        .json({
            statusCode: code,
            message: message,
        });
};

module.exports = errorHandler;