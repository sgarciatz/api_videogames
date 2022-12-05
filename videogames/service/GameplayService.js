'use strict';


/**
 * Returns a buffer of frames containing 0, 1 or more frames.
 * Returns a buffer of frames containing 0, 1 or more frames of the videogame session identified by the user identifier and the videogame identifier.
 *
 * gameId Long Identifier of game to play.
 * userId Long Identifier of game to play.
 * returns FrameBuffer
 **/
exports.gameplayGameIdGET = function(gameId,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "frame1", "frame2", "frame3" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Send the videogames commands chosen by the user.
 * Send the videogames commands chosen by the user.
 *
 * body UserInteraction  (optional)
 * userId Long Identifier of game to play.
 * gameId Long Identifier of game to play.
 * returns String
 **/
exports.gameplayGameIdPOST = function(body,userId,gameId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "UserInteraction recieved.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

