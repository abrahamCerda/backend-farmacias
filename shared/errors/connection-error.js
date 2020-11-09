class ConnectionError extends Error {
    constructor(...params) {
        super(...params);
        if(Error.captureStackTrace){
            Error.captureStackTrace(this, ConnectionError);
        }
        this.name = 'CONNECTION_ERROR';
    }
}