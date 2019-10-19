const svgHeight = 1000;
const svgWidth = 1000;

const svg = d3.select("#chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// create margins and dimensions
const margin = {top: 50, right: 50, bottom: 100, left: 100};
const epsilonFromTop = 20;
const graphWidth = svgWidth - margin.left - margin.right;
const graphHeight = svgHeight - margin.top - margin.bottom - epsilonFromTop;

// graph is the innards of the display
const graph = svg.append("g")
  .attr("width", graphWidth)
  .attr("height", graphHeight)
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

let circles;
let pink = "#ec407a";
let indigo = "#5c6bc0";

d3.csv("boston-housing.csv").then(boston => {
  console.log(`-----------------------------------------boston[0]`);
  console.log(boston[0]);
  console.log(boston.map(d => d.charles));

  let data = boston.map(x => { return {poor: parseFloat(x.poor),  rooms: parseFloat(x.rooms),  value: parseInt(x.value), charles: x.charles} });
  console.log(`--------------------------------------------data[0]`);
  console.log(data[0]);



  const x = d3.scaleLinear()
    .domain([0, d3.max(data.map(d => d.poor))])
    .range([0, graphWidth]);

  const y = d3.scaleLinear()
    .domain([0, d3.max(data.map(d => d.rooms))])
    .range([graphHeight, 0])

  const r = d3.scaleLinear()
    .domain(d3.extent(data.map(d => d.value)))
    .range([2, 10])

  const c = d3.scaleOrdinal()
    .domain(["0", "1"])
    .range([pink, indigo]);
  
  circles = graph.selectAll(".dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("cx", d => x(d.poor))
    .attr("cy", d => y(d.rooms))
    .attr("r", d => r(d.value))
    .attr("fill", d => c(d.charles))
    .style("opacity", 0.2);
})