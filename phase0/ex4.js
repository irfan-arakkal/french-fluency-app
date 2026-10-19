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
console.log(getLevelGroup("A1"));
console.log(getLevelGroup("B1"));
console.log(getLevelGroup("C1"));
