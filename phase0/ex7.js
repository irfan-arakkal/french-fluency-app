const users = [
  { name: "Sara", level: "B1", online: true },
  { name: "Leo", level: "B2", online: true },
  { name: "Amir", level: "A2", online: false },
  { name: "Mariyam", level: "B1", online: true },
  { name: "Lucas", level: "C1", online: false },
];

// 1. Object → JSON text
const json = JSON.stringify(users);
console.log(json);

// 2. Prove it's text
console.log(typeof json);

// 3. JSON text → object again
const usersAgain = JSON.parse(json);
console.log(usersAgain[0].name);