'use strict';

exports.http = (request, response) => {
  response.status(200).send(JSON.stringify(request, null, 2));
};

exports.event = (event, callback) => {
  callback();
};
