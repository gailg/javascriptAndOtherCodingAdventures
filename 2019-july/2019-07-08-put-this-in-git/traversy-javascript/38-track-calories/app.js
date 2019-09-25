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
    itemList: "#item-list"
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
    }
  }
})();

// app controller
const App = (function (ItemController, UIController) {
  return {  // public methods
    init: function() {
      console.log("Initializing app...");
      // fetch items from data structure
      const items = ItemController.getItems();
      // populate list with items
      UIController.populateItemList(items);
    }
  }
})(ItemController, UIController);

App.init();