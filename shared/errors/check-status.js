const HttpError = require('../errors/http-error');

const checkStatus = (response) => {
    if(response.ok){
        return response;
    }
    throw new HttpError(response.status, response.statusText);
};

module.exports= checkStatus;