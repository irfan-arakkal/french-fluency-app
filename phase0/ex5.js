const users = [
    { name: "Sara", level: "B1", online: true },
    { name: "Leo", level: "B2", online: true },
    { name: "Amir", level: "A2", online: false },
    { name: "Mariyam", level: "B1", online: true },
    { name: "Lucas", level: "C1", online: false },
]

const onlineNames = users.filter((u) => u.online).map((u) => u.name)
console.log(onlineNames)

const firstB1 = users.find((u) => u.level === "B1");
console.log(firstB1.name);

// 3. How many users are online
const onlineCount = users.filter((u) => u.online).length;
console.log(onlineCount);

// Bonus: each user with their group
function getLevelGroup(level) {
  if (level === "A1" || level === "A2") {
    return "Beginner";
  } else if (level === "B1" || level === "B2") {
    return "Intermediate";
  } else if (level === "C1" || level === "C2") {
    return "Advanced";
  } else {
    return "Unknown level";
  }
}

let i = 0;

while(i < users.length){
    const user =  users[i];
  console.log(`${user.name} is ${getLevelGroup(user.level)}`);
  i++;
}