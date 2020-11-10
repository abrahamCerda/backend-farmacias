const cache = require('../cache');

const cacheMiddleware = (req,res,next) => {
    const key = JSON.stringify({
       ip: req.ip,
        url: req.originalUrl,
        method: req.method,
    });
    req.nodeCacheKey = key;
    const cachedEndpointResponse = cache.get(key);
    if(cachedEndpointResponse === undefined) {
        return next();
    }
    console.log('Returning cached data for: ' + key);
    return res.status(200).json(cachedEndpointResponse);
};

module.exports = cacheMiddleware;