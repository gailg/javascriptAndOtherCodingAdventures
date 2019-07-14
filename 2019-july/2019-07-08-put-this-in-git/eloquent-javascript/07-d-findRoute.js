"use strict";
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
  move(destination) {
    if (!roadGraph[this.location].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels.map(p => {
        if (p.location != this.location) return p;
        return {id: p.id, location: destination, address: p.address}
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
function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++){
    let {at, route} = work[i];
    for (let location of graph[at]) {
      if (location == to) {
        return route.concat(location);
      }
      if (!work.some(w => w.at == location)) {
        work.push({at: location, route: route.concat(location)});
      }
    }
  }
}
function goalOrientedRobot({location, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.location != location) {
      route = findRoute(roadGraph, location, parcel.location);
      console.log("---------- parcel.location != location ---------- route:");
      console.log(route);
    } else {
      route = findRoute(roadGraph, location, parcel.address)
      console.log("---------- parcel.location == location ---------- route:");
      console.log(route);
    }
  }
  return {direction: route[0], memory: route.slice(1)}
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
// let villageState = VillageState.random(2);

function testParcels(){
  let parcels = [];
  let address = Object.keys(roadGraph)[5];
  let location = Object.keys(roadGraph)[6];
  parcels.push({id: 0, location, address});
  address = Object.keys(roadGraph)[7];
  location = Object.keys(roadGraph)[8];
  parcels.push({id: 1, location, address});
  return parcels;
}
// let parcels = testParcels();
// let villageState = new VillageState("PostOffice", parcels);
let villageState = new VillageState.random()
console.log("----------------------------------------------------villageState");
console.log(villageState);
console.log("----------------------------------------------------------parcels");
console.log(villageState.prettyParcels);

runRobot(villageState, goalOrientedRobot, []);
