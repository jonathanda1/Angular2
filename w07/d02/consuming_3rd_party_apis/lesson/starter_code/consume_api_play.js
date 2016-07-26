// require request, locus, and opener modules.
var request = require('request'),
    opener  = require('opener');

require('locus');


// 1. Catch them all without losing hours of your life to a squirrel turtle. (simply console.log the pokedex)
// var pokedex;

// request('http://pokeapi.co/api/v2/pokedex/2', function(err, res, body){
//   if (!err && res.statusCode === 200) {
//     var pokedex = JSON.parse(body);
//   }
//   eval(locus);
//   console.log(pokedex);
// })

// 2. ... or just start with Bulbasaur. (simply console.log Bulbasaur)

//request('http://pokeapi.co/api/v2/pokemon-species/1/', function (err, res, body) {
//  if (!err && res.statusCode == 200) {
//    bulbasaur = JSON.parse(body);
//  }
//  console.log(bulbasaur);
//})

// 3. get Jynx out of the pokedex!

request('http://pokeapi.co/api/v2/pokedex/2', function (err, res, body) {
  if (!err && res.statusCode == 200) {
    var pokedex = JSON.parse(body);
    var jynx;
    pokedex.pokemon_entries.forEach(function(pokemon) {
      if (pokemon.pokemon_species.name === 'lapras') {
        jynx = pokemon;
      }
    });
    console.log(jynx);
  }
});



// 4. Using opener, open a sprite of your favorite pokemon (if you don't have one, use Lapras)

// request('http://pokeapi.co/api/v2/pokedex/2', function (err, res, body) {
//  if (!err && res.statusCode == 200) {
//     var favePokemon = JSON.parse(body);
//     opener(favePokemon.sprites.front_default);
//   }
// });







// BONUS: if you can, access the pokemon through the pokedex


// 1 and 2 combined
//var pokedex;

//request('http://pokeapi.co/api/v2/pokedex/2', function(err, res, body){
//  if (!err && res.statusCode === 200) {
//    var pokedex = JSON.parse(body);
//  }
//  request(pokedex.pokemon_entries[0].pokemon_species.url, function (err, res, body) {
//    bulbasaur = JSON.parse(body);
// }
//  console.log(bulbasaur);
// })
//})
