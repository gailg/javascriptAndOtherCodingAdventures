let larry = "Hello Sangea";
console.log("larry says " + larry);
let area = (function() {
  var width = 3;
  var height = 2;
  return width * height;
}());

function Hotel(name, rooms, booked){
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}

let quayHotel = new Hotel("Quay", 40, 25);
let parkHotel = new Hotel("Park", 120, 77);
console.log("-----quayHotel", quayHotel);
console.log("-----parkHotel", parkHotel);

function isTrue(trueOrFalse){
  if(trueOrFalse){
    console.log(trueOrFalse);
    return("I am true: ");
  } else {
    console.log(trueOrFalse);
    return("I am not true: ");
  }
}
