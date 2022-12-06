'use strict';

const users = [ {
  "firstName" : "Juan",
  "lastName" : "Díaz",
  "password" : "password1234",
  "servers" : [ 100, 200 ],
  "phone" : "123456789",
  "userId" : 100,
  "subscriptionTier" : "HIGH-END Hardware",
  "email" : "juanito.diaz@email.com",
  "friends" : [ 200, 300 ],
  "username" : "Juanito_2000",
  "videogames" : [ 100, 200 ]
}, {
  "firstName" : "Paco",
  "lastName" : "Hernández",
  "password" : "password1234",
  "servers" : [ 300 ],
  "phone" : "657098334",
  "userId" : 200,
  "subscriptionTier" : "MID-END Hardware",
  "email" : "paco.hernandez@email.com",
  "friends" : [ 100 ],
  "username" : "pakito_123",
  "videogames" : [ 100 ]
}, {
  "firstName" : "Daniel",
  "lastName" : "Cambero",
  "password" : "password1234",
  "servers" : [ ],
  "phone" : "452670534",
  "userId" : 300,
  "subscriptionTier" : "MID-END Hardware",
  "email" : "daniel.cambero@email.com",
  "friends" : [ 100 ],
  "username" : "dani_crk",
  "videogames" : [ 100 ]
} ];

const videogames = [ 
  {
    "gameId" : 100,
    "videogame-name" : "God Of War",
    "genre" : "Fantasia",
    "files" : "images,configuration files, design files"
  },
  {
    "gameId" : 200,
    "videogame-name" : "Stardew Valley",
    "genre" : "RPG | Farming",
    "files" : "images,configuration files, design files"
  }
];


const frameBuffer = [
  {
    "frames" : [ "frame1", "frame2", "frame3" ]
  }
];

/**
 * Returns a buffer of frames containing 0, 1 or more frames.
 * Returns a buffer of frames containing 0, 1 or more frames of the videogame session identified by the user identifier and the videogame identifier.
 *
 * gameId Long Identifier of game to play.
 * userId Long Identifier of game to play.
 * returns FrameBuffer
 **/
exports.gameplayGameIdGET = function(userId, gameId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    const userExists = users.some(user => userId === user.userId);
    const videogameExists = videogames.some(videogame => gameId === videogame.gameId);
    if (userExists && videogameExists) {
      examples['application/json'] = frameBuffer[0];
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = 'Videogame and user not found.';
      if (userExists) { examples['text/plain'] = 'Videogame not found.'; }
      else { if (videogameExists) { examples['text/plain'] = 'User not found.'; } }
      reject(examples[Object.keys(examples)[0]]);
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
exports.gameplayGameIdPOST = function(body, userId, gameId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    const userExists = users.some(user => userId === user.userId);
    const videogameExists = videogames.some(videogame => gameId === videogame.gameId);
    if (userExists && videogameExists) {
      examples['text/plain'] = 'UserInteraction recieved.';
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = 'Videogame and user not found.';
      if (userExists) { examples['text/plain'] = 'Videogame not found.'; }
      else { if (videogameExists) { examples['text/plain'] = 'User not found.'; } }
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}

