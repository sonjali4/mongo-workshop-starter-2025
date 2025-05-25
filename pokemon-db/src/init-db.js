import "dotenv/config";
import mongoose from "mongoose";
import { PokemonSpecies } from "./schema.js";
import { Trainer } from "./schema.js";

// Connect to MongoDB
await mongoose.connect(process.env.DB_URL);
console.log("Connected to MongoDB!");

// delete all existing data
await Trainer.deleteMany({});
await PokemonSpecies.deleteMany({});
console.log("Existing data deleted!");

// TODO Initialize your database here
const species = await PokemonSpecies.insertMany([
  {
    _id: new mongoose.Types.ObjectId("000000000000000000000001"),
    name: "Pikachu",
    dexNumber: 25,
    types: ["Electric"],
    dexEntry: "A mouse Pokémon that can generate electricity."
  },
  {
    _id: new mongoose.Types.ObjectId("000000000000000000000002"),
    name: "Bulbasaur",
    dexNumber: 1,
    types: ["Grass", "Poison"],
    dexEntry: "A seed Pokémon that can photosynthesize."
  },
  {
    _id: new mongoose.Types.ObjectId("000000000000000000000003"),
    name: "Charmander",
    dexNumber: 4,
    types: ["Fire"],
    dexEntry: "A lizard Pokémon with a flame on its tail."
  },
  {
    _id: new mongoose.Types.ObjectId("000000000000000000000004"),
    name: "Squirtle",
    dexNumber: 7,
    types: ["Water"],
    dexEntry: "A turtle Pokémon that can shoot water."
  },
  {
    _id: new mongoose.Types.ObjectId("000000000000000000000005"),
    name: "Jigglypuff",
    dexNumber: 39,
    types: ["Normal", "Fairy"],
    dexEntry: "A balloon Pokémon that can put others to sleep."
  },
  {
    _id: new mongoose.Types.ObjectId("000000000000000000000006"),
    name: "Meowth",
    dexNumber: 52,
    types: ["Normal"],
    dexEntry: "A cat Pokémon that can walk on two legs."
  },
  {
    _id: new mongoose.Types.ObjectId("000000000000000000000007"),
    name: "Psyduck",
    dexNumber: 54,
    types: ["Water"],
    dexEntry: "A duck Pokémon that suffers from frequent headaches."
  },
  {
    _id: new mongoose.Types.ObjectId("000000000000000000000008"),
    name: "Machop",
    dexNumber: 66,
    types: ["Fighting"],
    dexEntry: "A muscular Pokémon that trains its body."
  },
  {
    _id: new mongoose.Types.ObjectId("000000000000000000000009"),
    name: "Geodude",
    dexNumber: 74,
    types: ["Rock", "Ground"],
    dexEntry: "A rock Pokémon that can roll into a ball."
  },
  {
    _id: new mongoose.Types.ObjectId("000000000000000000000010"),
    name: "Onix",
    dexNumber: 95,
    types: ["Rock", "Ground"],
    dexEntry: "A giant snake Pokémon made of rock."
  }
]);
console.log(`Inserted ${species.length} Pokémon species.`);


const trainers = await Trainer.insertMany([
  {
    name: "Ash Ketchum",
    age: 10,
    team: [
      { nickname: "Sparky", species: new mongoose.Types.ObjectId("000000000000000000000001") }, // Pikachu
      { nickname: "Bulby", species: new mongoose.Types.ObjectId("000000000000000000000002") } // Bulbasaur
    ]
  },
  {
    name: "Misty Waterflower",
    age: 12,
    team: [
      { nickname: "Squirt", species: new mongoose.Types.ObjectId("000000000000000000000004") }, // Squirtle
      { nickname: "Psy", species: new mongoose.Types.ObjectId("000000000000000000000007") } // Psyduck
    ]
  },
  {
    name: "Brock Harrison",
    age: 15,
    team: [
      { nickname: "Rocky", species: new mongoose.Types.ObjectId("000000000000000000000009") }, // Geodude
      { nickname: "Onyx", species: new mongoose.Types.ObjectId("000000000000000000000010") } // Onix
    ]
  },
  {
    name: "Jessie",
    age: 20,
    team: [
      { nickname: "Meowth", species: new mongoose.Types.ObjectId("000000000000000000000006") } // Meowth
    ]
  },
  {
    name: "James",
    age: 20,
    team: [
      { nickname: "Jiggly", species: new mongoose.Types.ObjectId("000000000000000000000005") } // Jigglypuff
    ]
  }
]);
console.log(`Inserted ${trainers.length} trainers.`);

// Disconnect when done
await mongoose.disconnect();
console.log("Done!");