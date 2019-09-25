// storage container

// item controller
const ItemController = (function () {
  // item constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }
  // data structure /state
  const data = {
    items: [
      {id: 0, name: "Steak Dinner", calories: 1200},
      {id: 1, name: "Cookie", calories: 400},
      {id: 2, name: "Ice cream", calories: 800},
    ],
    currentItem: null,
    totalCalories: 0
  }
  return {  // public methods
    getItems: function(){
      return data.items;
    },
    logData: function(){
      return data;
    }
  }
})();


// ui controller
const UIController = (function () {
  const UISelectors = {
    itemList: "#item-list",
    addBtn: ".add-btn",
    itemNameInput: "#item-name",
    itemCaloriesInput: "#item-calories"
  }
 
  return {  // public methods
    populateItemList: function(items){
      let html = "";
      items.forEach( item => {
        html += `
        <li class="collection item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
        </li>
        `;
      })
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function(){
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    getSelectors: function() {
      return UISelectors;
    }
  }
})();

// app controller
const App = (function (ItemController, UIController) {
  //load event listeners
  const loadEventListeners = function(){
    const UISelectors = UIController.getSelectors();
    document.querySelector(UISelectors.addBtn).addEventListener(
      "click", itemAddSubmit);
  }

  const itemAddSubmit = function(e){
    const input = UIController.getItemInput();
    console.log(input);
    e.preventDefault();

  }
  return {  // public methods
    init: function() {
      console.log("Initializing app...");
      // fetch items from data structure
      const items = ItemController.getItems();
      // populate list with items
      UIController.populateItemList(items);
      // load event listeners
      loadEventListeners();
    }
  }
})(ItemController, UIController);

App.init();