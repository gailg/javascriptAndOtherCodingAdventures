// basic structure

(function() {
  // declare private vars and functions

  return {
    // declare public vars and functions
  }

})();


// standard module pattern
const UIController = (function(){
  let text = "hello larry";

  const changeText = function() {
    const element = document.querySelector("h1");
    element.textContent = text;
  }

  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  }
})();

UIController.callChangeText();

// revealing module pattern
const ItemController = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log("Item added");
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    })
  }

  return {
    add: add,
    get: get
  }
})();

ItemController.add({
  id: 42,
  name: "Larry"
});
ItemController.add({
  id: 14,
  name: "Monty"
})
console.log(`---------------------------------ItemController.get(42)`);
console.log(ItemController.get(42));
console.log(`---------------------------------ItemController.get(14)`);
console.log(ItemController.get(14));
