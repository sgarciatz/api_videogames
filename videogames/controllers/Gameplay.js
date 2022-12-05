'use strict';

var utils = require('../utils/writer.js');
var Gameplay = require('../service/GameplayService');

module.exports.gameplayGameIdGET = function gameplayGameIdGET (req, res, next, gameId, userId) {
  Gameplay.gameplayGameIdGET(gameId, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gameplayGameIdPOST = function gameplayGameIdPOST (req, res, next, body, userId, gameId) {
  Gameplay.gameplayGameIdPOST(body, userId, gameId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
