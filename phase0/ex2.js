 let level = "b2";
 level = level.toUpperCase();

if (level === "A1" || level === "A2") {
  console.log("Beginner");
} else if (level === "B1" || level === "B2") {
  console.log("Intermediate");
} else if (level === "C1" || level === "C2") {
  console.log("Advanced");
} else {
  console.log("Unknown level");
}