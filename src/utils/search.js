const request = require('request');

const search = (search, callback) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=3cc15971287e868c0c4c2483393a872a&language=en-US&query=${search}&page=1&include_adult=false`;

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to movie services!', undefined);
        } else {
            callback(undefined, {
                results: body
            });
        }
    });
}

module.exports = search;

