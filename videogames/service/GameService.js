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

const videogameTests = [
  {
    "gameId" : 100,
    "hardwareTier" : "HIGH-END hardware",
    "cpuUtilization" : "75%",
    "datetime" : "2022-12-31 23:59:48",
    "latencia" : "100 ms",
    "frecuency" : "120 fps",
    "gpuUtilization" : "92%"
  },
  {
    "gameId" : 200,
    "hardwareTier" : "LOW-END hardware",
    "cpuUtilization" : "58%",
    "datetime" : "2022-12-31 23:59:48",
    "latencia" : "100 ms",
    "frecuency" : "220 fps",
    "gpuUtilization" : "42%"
  }
];

/**
 * Inserts a new game in the user library database.
 * Inserts a new game in the user library database.
 *
 * gameId Long ID of game to insert in the user library.
 * userId Long ID of user to insert the game.
 * returns String
 **/
exports.buy_gameGameIdPOST = function(userId, gameId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    const userExists = users.some(user => userId === user.userId);
    const videogameExists = videogames.some(videogame => gameId === videogame.gameId);
    if (userExists && videogameExists) {
        examples['text/plain'] = 'Videogame inserted successfully in the user library.';
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
 * Returns a list with all the videogames from the cloud database.
 * Returns a list with all the videogames from the cloud database.
 *
 * returns List
 **/
exports.gamesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = videogames;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = 'Something went wrong.';
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}


/**
 * Delete a videogame given its ID.
 * Delete a videogame given its ID.
 *
 * gameId Long Identifier of an user.
 * returns String
 **/
exports.gamesGameIdDELETE = function(gameId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (videogames.some(videogame => videogame.gameId === gameId)) {
      examples['text/plain'] = "Videogame deleted.";
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "Videogame not found.";
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}


/**
 * Returns a videogame by its ID.
 * Returns a videogame by its ID.
 *
 * gameId Long The identifier of an user.
 * returns Videogame
 **/
exports.gamesGameIdGET = function(gameId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    const videogame = videogames.find(videogame => videogame.gameId === gameId);
    if (videogame) {
      examples['application/json'] = videogame;
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "Videogame not found.";
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}


/**
 * Updates the videogame data.
 * Updates the videogame data.
 *
 * body Videogame Update a videogame with properties to be changed. (optional)
 * gameId Long Identifier of a game.
 * returns String
 **/
exports.gamesGameIdPATCH = function(body,gameId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (videogames.some(videogame => videogame.gameId === gameId)) {
      examples['text/plain'] = "Videogame updated.";
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "Videogame not found.";
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}


/**
 * Inserts a new game in the cloud database.
 * Inserts a new game in the cloud database.
 *
 * body Videogame  (optional)
 * returns String
 **/
exports.gamesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (!videogames.some(videogame => videogame['videogame-name'] === body['videogame-name'])) {
      examples['text/plain'] = "Videogame inserted successfully.";
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "This game already exists.";
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}


/**
 * Test the quality of the chosen videogame from the cloud database
 * Test the quality of the chosen videogame from the cloud database
 *
 * gameId Long Identifier of a game.
 * hardwareTier String Specify the hardware tier on which the test will be carried out (LOW-END, MID-END or HIGH-END).
 * returns VideogameTest
 **/
exports.test_qualityGameIdGET = function(hardwareTier, gameId) {
  return new Promise(function(resolve, reject) {
    var examples = {};

    if (videogames.some(videogame => videogame.gameId === gameId)) {
      const test = videogameTests.find(test => test.gameId === gameId);
      test.hardwareTier = hardwareTier
      examples['application/json'] = test
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "Videogame not found.";
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}

