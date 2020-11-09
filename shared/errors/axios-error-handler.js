const axiosErrorHandler = (axiosError) => {
    if (axiosError.response) {
        throw new HttpError(axiosError.response.data, axiosError.response.status);
    } else if (axiosError.request) {
        console.log(axiosError.request);
        /* Connection Exception??? */
        throw new ConnectionError('Error while trying to make http request');
    } else {
        console.log(`[err] ${axiosError.message}`);
        throw new Error(axiosError.message);
    }
};

module.exports= axiosErrorHandler;