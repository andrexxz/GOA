function boilWater() {
  return new Promise((resolve) => {setTimeout(() => {console.log("Water is boiling...");resolve();}, 2000);});
}
function addTeaBag() {
  return new Promise((resolve) => {setTimeout(() => {console.log("Tea bag added.");resolve();}, 1000);});
}
function steepTea() {
  return new Promise((resolve) => {setTimeout(() => {console.log("Tea is steeping...");resolve();}, 3000);});
}
function readyToDrink() {
  return new Promise((resolve) => {setTimeout(() => {console.log("Tea is ready to drink!");resolve();}, 0);});
}
async function makeTea() {
  await boilWater();
  await addTeaBag();
  await steepTea();
  await readyToDrink();
}
makeTea()
  .then(() => {console.log("Enjoy your tea!");})
  .catch((error) => {console.error("An error occurred:", error);});