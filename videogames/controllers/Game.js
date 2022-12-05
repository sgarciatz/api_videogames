'use strict';

var utils = require('../utils/writer.js');
var Game = require('../service/GameService');

module.exports.buy_gameGameIdPOST = function buy_gameGameIdPOST (req, res, next, gameId, userId) {
  Game.buy_gameGameIdPOST(gameId, userId)
    .then(function (response) {
      utils.writeJson(res, response, 201);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.gamesGET = function gamesGET (req, res, next) {
  Game.gamesGET()
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 500);
    });
};

module.exports.gamesGameIdDELETE = function gamesGameIdDELETE (req, res, next, gameId) {
  Game.gamesGameIdDELETE(gameId)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.gamesGameIdGET = function gamesGameIdGET (req, res, next, gameId) {
  Game.gamesGameIdGET(gameId)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.gamesGameIdPATCH = function gamesGameIdPATCH (req, res, next, body, gameId) {
  Game.gamesGameIdPATCH(body, gameId)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.gamesPOST = function gamesPOST (req, res, next, body) {
  Game.gamesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response, 201);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 400);
    });
};

module.exports.test_qualityGameIdGET = function test_qualityGameIdGET (req, res, next, gameId, hardwareTier) {
  Game.test_qualityGameIdGET(gameId, hardwareTier)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};
