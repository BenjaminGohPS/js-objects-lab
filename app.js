const pokemon = require("./data.js");

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

// Exercise 1

//   console.dir(pokemon, { maxArrayLength: null })

// to unblock
// console.log(pokemon[58].name);

// Exercise 2

// console.log(game);

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = "Easy";
console.log(game); //  to unblock for code submission

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

/*
Workings
need to find from the object, where the starter: true
grab the name: xxx
push that name: xxx to game -> party array

*/

/*
To check if the name is correct
console.log(pokemon[0].name);
console.log(pokemon[3].name);
console.log(pokemon[6].name);
console.log(pokemon[24].name);
*/

const pokemon1 = pokemon[3];

game.party.push(pokemon1);

// console.log(game.party); // to check if name is push to game.party array

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

/*
Workings
chose 3 pokemon.

[78]slowpoke // water // hp: 90
[142]snorlax // normal // hp: 160
[149]mewtwo // psychic // hp: 106
*/

const pokemon2 = pokemon[78];
const pokemon3 = pokemon[142];
const pokemon4 = pokemon[149];

game.party.push(pokemon2, pokemon3, pokemon4);

// console.log(game.party); // to check if all in party

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

//to check if i can get value of difficulty
// console.log(game.gyms[0].difficulty)

// to check if am pointing to the data of gyms
// CORRECT
// for (const gym of game.gyms) {
//  console.log(gym) ;
// }

for (const gym of game.gyms) {
  //  console.log(gym); // to check if I can access
  if (gym.difficulty < 3) {
    //  console.log(gym); // correct - can filter down
    gym.completed = true;
    // console.log(gym) // to check
  }
}

// console.log(game.gyms); CORRECT

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

/*
Workings
game.party[0].splice(0,1,pokemon[4])
*/

// to check the party array
// console.log(game.party)
// to check the evolve pokemon data
// console.log(pokemon[4])

game.party.splice(0, 1, pokemon[4]);
// console.log(game.party); // CORRECT - to check if successfully replace

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

// name -> game.party[0].name to [0] - [4]

// // [delete after] TO UNCOMMENT
// for (const mon of game.party) {
//   //console.log(mon); // to check if can access the party
//   console.log(mon.name);
// }

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

/* to check if i can get the function to work when check true/false
if (pokemon[1].starter === false) {
  console.log("false");
} else {
  console.log("true");
}
*/

for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].starter === true) {
    console.log(pokemon[i].name);
  } else {
  }
}

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

// SOLUTION - needed to comment out so can do exercise 11

const catchPokemon123 = (pokemonObj) => {
  game.party.push(pokemonObj);
};

catchPokemon123({
  number: 14,
  name: "Kakuna",
  type: "bug",
  hp: 45,
  starter: false,
});

// console.log(game.party[4]); // CORRECT - to check if I can "catch" it.

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

const catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj);
  for (let i = 0; i < game.items.length; i++) {
    if (game.items[i].name === "pokeball") {
      game.items[i].quantity--;
    }
  }
};

catchPokemon({
  number: 86,
  name: "Seel",
  type: "water",
  hp: 65,
  starter: false,
}); // to catch a pokemon
// console.log(game.party); // to check if added to array
console.log(game.items[1]); // to confirm if pokeball quantity went down

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

for (const gym of game.gyms) {
  //  console.log(gym); // to check if I can access
  if (gym.difficulty < 6) {
    //  console.log(gym); // correct - can filter down
    gym.completed = true;
    // console.log(gym) // to check
  }
}

// console.log(game.gyms);

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

const gymTally = { completed: 0, incompleted: 0 };

for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].completed === true) {
    gymTally.completed++;
  } else {
    gymTally.incompleted++;
  }
}

console.log(gymTally);
// { completed: 5, incomplete: 3 }

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/

const partyCount = () => {
  console.log(`Number of Pokemon in the party: ${game.party.length}`);
};

partyCount();

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

for (const gym of game.gyms) {
  if (gym.difficulty < 8) {
    gym.completed = true;
    //console.log(game.gyms) // to check
  }
}

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log(game);
