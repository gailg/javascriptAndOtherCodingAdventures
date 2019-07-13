const mailRoute = [
  "Alice", "Cabin", "Alice", "Bob", "Town", "Daria", "Ernie", "Grete",
  "Shop", "Grete", "Farm", "Marketplace", "PostOffice"
];
function routeRobot() {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return {direction: memory[0], memory:memory.slice(1)};
}

function findRoutte(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++){
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if(!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}
