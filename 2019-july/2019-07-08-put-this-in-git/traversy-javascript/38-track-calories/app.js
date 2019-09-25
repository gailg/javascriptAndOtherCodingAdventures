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
    addItem: function(name, calories){
      const id = (data.items.length > 0) ? data.items[data.items.length - 1].id + 1 : 0;
      calories = parseInt(calories);
      item = new Item(id, name, calories);
      data.items.push(item);
      return item;
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
    addListItem(item){
      // show the list
      document.querySelector(UISelectors.itemList).style.display = "block";
      // create li element
      const li = document.createElement("li");
      // add class
      li.className = "collection-item";
      // add id
      li.id = `item-${item.id}`;
      // add html
      li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;
      // insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement("beforeend", li);
    },
    clearInput: function(){
      document.querySelector(UISelectors.itemNameInput).value = "";
      document.querySelector(UISelectors.itemCaloriesInput).value = "";
    },
    hideList: function(){
      document.querySelector(UISelectors.itemList).style.display = "none";
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

  // add item submit
  const itemAddSubmit = function(e){
    // get form input from ui controller
    const input = UIController.getItemInput();
    if(input.name !== "" && input.calories !== "") {
      // add item to ItemController
      const item = ItemController.addItem(input.name, input.calories);
      // add item to ui list
      UIController.addListItem(item);
      // clear fields
      UIController.clearInput();
    }
    e.preventDefault();

  }
  return {  // public methods
    init: function() {
      // fetch items from data structure
      const items = ItemController.getItems();
      // check if any items

      if(items.length === 0){
        UIController.hideList();
      } else {
        // populate list with items
        UIController.populateItemList(items);
      }
      // load event listeners
      loadEventListeners();
    }
  }
})(ItemController, UIController);

App.init();