"use strict";
const roads = [
  "Amy-Bob",
  "Amy-Cat",
  "Amy-Pap",
  "Bob-Tom",
  "Dan-Eli",
  "Dan-Tom",
  "Eli-God",
  "God-Fo",
  "God-Sam",
  "Ma-Fo",
  "Ma-Pap",
  "Ma-Sam",
  "Ma-Tom",
  "Sam-Tom"
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
const universe = Object.keys(roadGraph);
console.log("--------------------------------------------------------------------------------roadGraph");
console.log(roadGraph);
console.log("---------------------------------------------------------------------------------universe");
console.log(universe);
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
    let address = randomPick(universe);
    let location;
    do {
      location = randomPick(universe);
    } while (location == address);
    parcels.push({id: i, location, address});
  }
  return new VillageState("Pap", parcels);
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
function packageOrientedRobot({location, parcels}, route) {
  if (route.length == 0) {
    let routes = [];
    for (let parcel of parcels){
      if (parcel.location != location) {
        route = findRoute(roadGraph, location, parcel.location);
        // console.log("parcel.location not equals location -- route");
        // console.log(route);
      } else {
        route = findRoute(roadGraph, location, parcel.address)
        // console.log("parcel.location equals location -- route");
        // console.log(route);
      }
      routes.push(route);
    }
    let lengths = routes.map(r => r.length);
    let smallestRoutes = routes[lengths.indexOf(Math.min(...lengths))];
    route = (smallestRoutes.length < 1) ? smallestRoutes[0] : smallestRoutes;
    // console.log("route");
    // console.log(route);
    console.log(`route:  ${route}`);
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
  let location = universe[6];
  let address = universe[9];
  parcels.push({id: 0, location, address});
  location = universe[0];
  address = universe[5];
  parcels.push({id: 1, location, address});
  location = universe[4];
  address = universe[6];
  parcels.push({id: 2, location, address});
  return parcels;
}
let parcels = testParcels();
// let villageState = new VillageState("Pap", parcels);
["0:Eli-Sam", "1:Amy-Dan", "2:Tom-Eli", "3:Pap-Sam", "4:Cat-God"]
let villageState = new VillageState.random()
console.log("-----------------------------------------------------------------------------villageState");
console.log(villageState);
console.log("----------------------------------------------------------------------------------parcels");
console.log(villageState.prettyParcels);
console.log(villageState.parcels);
runRobot(villageState, packageOrientedRobot, []);
