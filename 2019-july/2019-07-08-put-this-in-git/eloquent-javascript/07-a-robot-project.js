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

class VillageState {
  constructor(location, parcels) {
    this.location = location;
    this.parcels = parcels;
  }
  // move(destination) {
  //   if (!roadGraph[this.location].includes(destination)) {
  //     return this;
  //   } else {
  //     let parcels = this.parcels.map(p => {
  //       if (p.location != this.location) return p;
  //       //if the package is not here don't change it
  //       return {location: destination, address: p.address}
  //       //if the package is here, take it to destination
  //     }).filter(p => p.location != p.address);
  //     //if a package's address is here leave it here (remove from parcels)
  //     return new VillageState(destination, parcels);
  //   }
  // }
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
        console.log(`Delivered: ${parcelsCopy.map(
          p => " " + p.id + ":" + p.location)}`);
      }
      let parcelsWithDeliveredRemoved = parcels.filter(p => p.location != p.address);
      //if a package's address is here leave it here (remove from parcels)
      return new VillageState(destination, parcelsWithDeliveredRemoved);
    }
  }
}
// let first = new VillageState(
//   "PostOffice",
//   [{id: 1, location: "PostOffice", address: "Alice"}]
// );
// console.log("-----first");
// console.log(first);
// console.log("------------------------------------------------calling first.gailmove");
// let next = first.move("Alice");
// console.log("-----next");
// console.log(next);

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++){
    if (state.parcels.length == 0) {
      console.log(`Finished in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    // console.log("-----action");
    // console.log(action);
    state = state.move(action. direction);
    memory = action.memory;
    // console.log(`${action.direction}:  ${state.parcels.map(
    //   p => " " +  p.id + ":"+ p.location + "-" + p.address)}`);
    console.log(`${action.direction}:  `);
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}
function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.location])};
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


let villageState = VillageState.random();
console.log("----------------------------------------robot's beginning location");
console.log(villageState.location);
console.log("-----------------------------------------------------------parcels");

console.log(villageState.parcels.map(p =>
  p.id + ":" + p.location + "-" + p.address
));
// console.log("-----randomRobot(villageState)");
// console.log(randomRobot(villageState));

runRobot(villageState, randomRobot);


let larrysParcels = [{id: 1, location: "PostOffice", address: "Andy"},
                 {id: 2, location: "Bob", address: "Carl"}];
let monty = larrysParcels.map(p => p.location);
let sangea = monty.filter(location => location == "Bob");
let charles = larrysParcels.map(p => p.location).filter(location => location == "Bob");
