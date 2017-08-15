'use strict';

exports.http = (request, response) => {
  response.status(200).json(request.headers);
};

exports.event = (event, callback) => {
  callback();
};
