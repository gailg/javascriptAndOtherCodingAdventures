const roads = [
  "Alice-Bob",
  "Alice-Cabin",
  "Alice-PostOffice",
  "Bob-TownHall",
  "Daria-Ernie",
  "Daria-TownHall",
  "Ernie-Grete",
  "Grete-Farm",
  "Grete-Shop",
  "Marketplace-Farm",
  "Marketplace-PostOffice",
  "Marketplace-Shop",
  "Marketplace-TownHall",
  "Shop-TownHall"
];
function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}
const roadGraph = buildGraph(roads);
console.log("-------------------------------------------------------roadGraph");
console.log(roadGraph);
var mailRoute = [
  "Alice", "Cabin", "Alice", "Bob",
  "TownHall", "Daria", "Ernie",
  "Grete", "Shop", "Grete", "Farm",
  "Marketplace", "PostOffice"
];
console.log("-------------------------------------------------------mailRoute");
console.log(mailRoute);
class VillageState {
  constructor(location, parcels) {
    this.location = location;
    this.parcels = parcels;
  }
  move(destination) {
    if (!roadGraph[this.location].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels.map(p => {
        if (p.location != this.location) return p;
        //if the package is not here don't change it
        return {id: p.id, location: destination, address: p.address}
        //if the package is here, take it to destination
      });
      if(parcels.some(p => p.location == p.address)){
        let parcelsCopy = parcels.slice();
        let report = parcelsCopy.filter(p => p.location == p.address).map(
          p => " " + p.id + ":" + p.location);
        console.log(`Delivered: ${report}`);
      }

      let parcelsWithDeliveredRemoved = parcels.filter(p => p.location != p.address);
      let nextVillageState = new VillageState(destination, parcelsWithDeliveredRemoved);
      console.log( "                             :" + nextVillageState.prettyParcels);
      //if a package's address is here leave it here (remove from parcels)
      return nextVillageState;
    }
  }
  get prettyParcels() {
    return this.parcels.map(p => p.id + ":" + p.location + "-" + p.address);
  }
}
VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let location;
    do {
      location = randomPick(Object.keys(roadGraph));
    } while (location == address);
    parcels.push({id: i, location, address});
  }
  return new VillageState("PostOffice", parcels);
}
function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}
function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.location])};
}
function runRobot(state, robot, memory) {
  for (let turn = 0; turn < 20; turn++){
    if (state.parcels.length == 0) {
      console.log(`Finished in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action. direction);
    memory = action.memory;

    console.log(`${action.direction}: `);
  }
}
function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return {direction: memory[0], memory: memory.slice(1)};
}
let villageState = VillageState.random(2);
console.log("----------------------------------------robot's beginning location");
console.log(villageState.location);
console.log("-----------------------------------------------------------parcels");
console.log(villageState.prettyParcels);
// runRobot(villageState, randomRobot);
// runRobot(villageState, routeRobot, mailRoute);
