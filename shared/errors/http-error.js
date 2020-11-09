class HttpError extends Error {
    constructor(statusCode, ...params) {
        super(...params);
        if(Error.captureStackTrace){
            Error.captureStackTrace(this, HttpError);
        }
        this.name = 'HTTP_ERROR';
        this.statusCode = statusCode;
    }
}