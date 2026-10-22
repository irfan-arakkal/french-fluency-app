
function getLevelGroup(level){
     level = level.toUpperCase();
if (level === "A1" || level === "A2") {
  return("Beginner");
} else if (level === "B1" || level === "B2") {
  return("Intermediate");
} else if (level === "C1" || level === "C2") {
  return("Advanced");
} else {
  return("unknown level");
}
}
function findPartner(user,users){
    const partner = users.find(
        u => u.online && getLevelGroup(u.level) === getLevelGroup(user.level) &&
      u.name !== user.name
  );
  return partner || null;
}

const users = [
  { name: "Sara", level: "B1", online: true },
  { name: "Leo", level: "B2", online: true },
  { name: "Amir", level: "A2", online: false },
  { name: "Mariyam", level: "B1", online: true },
  { name: "Lucas", level: "C1", online: false },
];
const partner1 = findPartner(users[0],users);
    console.log(partner1? partner1.name:"No partner found");
const partner2 = findPartner(users[2], users); // Amir
    console.log(partner2 ? partner2.name : "No partner found");
const partner3 = findPartner(users[4], users); // Lucas
    console.log(partner3 ? partner3.name : "No partner found");
