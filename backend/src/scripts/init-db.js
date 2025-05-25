import "dotenv/config";
import mongoose from "mongoose";
import { Contact } from "../data/contacts-schema.js";

await mongoose.connect(process.env.DB_URL);
console.log("connected to the database.");

// clear existing contacts
await Contact.deleteMany({});

const initialContacts = [
  {
    name: "Honey Princess",
    phoneNumber: "555-9876",
    funFact: "She rules the hive with kindness and a love for honey.",
    photoUrl: "/images/avatars/avatar-001.jpeg"
  },
  {
    name: "Beach Buddy",
    phoneNumber: "555-1234",
    funFact: "Loves ice cream almost as much as building sandcastles.",
    photoUrl: "/images/avatars/avatar-002.jpeg"
  },
  {
    name: "Waitamata Dairy Cows Club",
    phoneNumber: "555-5678",
    funFact: "Loves web development, and grazing under sunny skies.",
    photoUrl: "/images/avatars/avatar-004.webp"
  },
  {
    name: "Code Bot",
    phoneNumber: "555-4321",
    funFact: "Loves solving coding puzzles and organizing colorful workspaces.",
    photoUrl: "/images/avatars/avatar-013.png"
  },
  {
    name: "Sunny Bunny",
    phoneNumber: "555-2468",
    funFact: "Loves hopping through flower fields and chasing butterflies.",
    photoUrl: "/images/avatars/avatar-011.png"
  },
  {
    name: "Anime Duo",
    phoneNumber: "555-7890",
    funFact: "Loves cherry blossoms, cosplay, and sipping bubble tea under the sunset.",
    photoUrl: "/images/avatars/avatar-003.png"
  }
];

await Contact.insertMany(initialContacts);
console.log("initial contacts inserted into the database");


await mongoose.disconnect();
console.log("Databse initialised successfully.");