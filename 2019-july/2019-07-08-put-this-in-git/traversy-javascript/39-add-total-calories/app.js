/*---------------------------------------------------------------------------------------------
/                                                                                             /
/                                     storage controller                                      /
/                                                                                             /
---------------------------------------------------------------------------------------------*/


const StorageController = (function () {
  // public methods
  return {
    getItemsFromStorage: function() {
      const items = (localStorage.getItem("items") === null) ? [] : JSON.parse(localStorage.getItem("items"));
      return items;
    },
    storeItem: function(item) {
      // get items from local storage
      // const items = (localStorage.getItem("items") === null) ? [] : JSON.parse(localStorage.getItem("items"));
      const items = StorageController.getItemsFromStorage();
      // push new item
      items.push(item);
      // set local storage
      localStorage.setItem("items", JSON.stringify(items));
    },
    updateItemStorage: function(updatedItem) {
      let items = StorageController.getItemsFromStorage();
      items.forEach( (item, index) => {
        if(updatedItem.id === item.id) {
          items.splice(index, 1, updatedItem);
        }
      });
      localStorage.setItem("items", JSON.stringify(items));
    },
    deleteItemStorage: function(id){
      let items = StorageController.getItemsFromStorage();
      items.forEach( (item, index) => {
        if(id === item.id) {
          items.splice(index, 1);
        }
      });
      localStorage.setItem("items", JSON.stringify(items));
    },
    clearItemsStorage: function(){
      localStorage.removeItem("items");
    }
  }
})();



/*---------------------------------------------------------------------------------------------
/                                                                                             /
/                                      item controller                                        /
/                                                                                             /
---------------------------------------------------------------------------------------------*/




// item controller
const ItemController = (function () {
  // item constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }
  // data structure /state
  const data = {
    // items: [
    //   {id: 0, name: "Steak Dinner", calories: 1200},
    //   {id: 1, name: "Cookie", calories: 400},
    //   {id: 2, name: "Ice cream", calories: 800},
    // ],
    items: StorageController.getItemsFromStorage(),
    currentItem: null,
    totalCalories: 0
  }
  return {  // public methods
    getItems: function () {
      return data.items;
    },
    addItem: function (name, calories) {
      const id = (data.items.length > 0) ? data.items[data.items.length - 1].id + 1 : 0;
      calories = parseInt(calories);
      item = new Item(id, name, calories);
      data.items.push(item);
      return item;
    },
    getItemById: function (id) {
      let found = null;
      data.items.forEach(item => {
        if (item.id === id) {
          found = item;
        }
      });
      return found;
    },
    updateItem: function (name, calories) {
      calories = parseInt(calories);
      let found = null;
      data.items.forEach(item => {
        if (item.id === data.currentItem.id) {
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    },
    deleteItem: function (id) {
      // get ids
      ids = data.items.map(item => item.id)
      // get index
      const index = ids.indexOf(id);
      // remove item
      data.items.splice(index, 1);
    },
    clearAllItems: function () {
      data.items = [];
    },
    setCurrentItem: function (item) {
      data.currentItem = item;
    },
    getCurrentItem: function () {
      return data.currentItem;
    },
    getTotalCalories: function () {
      let totalCalories = 0;
      data.items.forEach(item => totalCalories += item.calories);
      data.totalCalories = totalCalories;
      return data.totalCalories;
    },
    logData: function () {
      return data;
    }
  }
})();



/*---------------------------------------------------------------------------------------------
/                                                                                             /
/                                        ui controller                                        /
/                                                                                             /
---------------------------------------------------------------------------------------------*/




const UIController = (function () {
  const UISelectors = {
    itemList: "#item-list",
    listItems: "#item-list li",
    addBtn: ".add-btn",
    updateBtn: ".update-btn",
    deleteBtn: ".delete-btn",
    backBtn: ".back-btn",
    clearBtn: ".clear-btn",
    itemNameInput: "#item-name",
    itemCaloriesInput: "#item-calories",
    totalCalories: ".total-calories",
    editItem: ".edit-item"
  }

  return {  // public methods
    populateItemList: function (items) {
      let html = "";
      items.forEach(item => {
        html += `
        <li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
        </li>
        `;
      })
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    addListItem: function (item) {
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
    updateListItem: function (item) {
      let listItems = document.querySelectorAll(UISelectors.listItems);
      listItems = Array.from(listItems);
      listItems.forEach((listItem) => {
        const itemId = listItem.getAttribute("id");
        if (itemId === `item-${item.id}`) {
          document.querySelector(`#${itemId}`).innerHTML =
            `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;
        }
      });
    },
    deleteListItem: function (id) {
      const itemId = `#item-${id}`;
      const item = document.querySelector(itemId);
      item.remove();
    },
    clearInput: function () {
      document.querySelector(UISelectors.itemNameInput).value = "";
      document.querySelector(UISelectors.itemCaloriesInput).value = "";
    },
    addItemToForm: function () {
      document.querySelector(UISelectors.itemNameInput).value = ItemController.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemController.getCurrentItem().calories;
      UIController.showEditState();
    },
    clearItems: function () {
      let listItems = document.querySelectorAll(UISelectors.listItems);
      listItems = Array.from(listItems);
      listItems.forEach(item => item.remove());
    },
    hideList: function () {
      document.querySelector(UISelectors.itemList).style.display = "none";
    },
    showTotalCalories: function (totalCalories) {
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    clearEditState: function () {
      UIController.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = "none";
      document.querySelector(UISelectors.deleteBtn).style.display = "none";
      document.querySelector(UISelectors.backBtn).style.display = "none";
      document.querySelector(UISelectors.addBtn).style.display = "inline";
    },
    showEditState: function () {
      document.querySelector(UISelectors.updateBtn).style.display = "inline";
      document.querySelector(UISelectors.deleteBtn).style.display = "inline";
      document.querySelector(UISelectors.backBtn).style.display = "inline";
      document.querySelector(UISelectors.addBtn).style.display = "none";
    },
    getSelectors: function () {
      return UISelectors;
    }
  }
})();



/*---------------------------------------------------------------------------------------------
/                                                                                             /
/                                        app controller                                       /
---------------------------------------------------------------------------------------------*/



const App = (function (ItemController, StorageController, UIController) {
  //load event listeners
  const loadEventListeners = function () {
    // get ui selectors
    const UISelectors = UIController.getSelectors();
    // add item event
    document.querySelector(UISelectors.addBtn).addEventListener("click", itemAddSubmit);
    // disable submit on enter
    document.addEventListener("keypress", e => {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    })
    // edit icon click event
    document.querySelector(UISelectors.itemList).addEventListener("click", itemEditClick);
    // update item event
    document.querySelector(UISelectors.updateBtn).addEventListener("click", itemUpdateSubmit);
    // delete item event
    document.querySelector(UISelectors.deleteBtn).addEventListener("click", itemDeleteSubmit);
    // back event
    document.querySelector(UISelectors.backBtn).addEventListener("click", UIController.clearEditState);
    // clear items event
    document.querySelector(UISelectors.clearBtn).addEventListener("click", clearAllItemsClick);
  }

  // add item submit
  const itemAddSubmit = function (e) {
    // get form input from ui controller
    const input = UIController.getItemInput();
    if (input.name !== "" && input.calories !== "") {
      // add item to ItemController
      const item = ItemController.addItem(input.name, input.calories);
      // add item to ui list
      UIController.addListItem(item);
      // get total calories
      const totalCalories = ItemController.getTotalCalories();
      UIController.showTotalCalories(totalCalories);
      StorageController.storeItem(item);
      // clear fields
      UIController.clearInput();
    }
    e.preventDefault();
  }

  // click edit
  const itemEditClick = function (e) {
    if (e.target.classList.contains("edit-item")) {
      // get list item id
      const listId = e.target.parentNode.parentNode.id;
      // break into array
      const listIdArray = listId.split("-");
      // get actuall id
      const id = parseInt(listIdArray[1]);
      // get item to edit
      const itemToEdit = ItemController.getItemById(id);
      // set current item
      ItemController.setCurrentItem(itemToEdit);
      // add item to form
      UIController.addItemToForm();
    }
    e.preventDefault();
  }

  // update item submit
  const itemUpdateSubmit = function (e) {
    // get item input
    const input = UIController.getItemInput();
    // update item
    const updatedItem = ItemController.updateItem(input.name, input.calories);
    // update ui
    UIController.updateListItem(updatedItem);
    // get total calories
    const totalCalories = ItemController.getTotalCalories();
    UIController.showTotalCalories(totalCalories);
    // update local storage
    StorageController.updateItemStorage(updatedItem);
    UIController.clearEditState();
    e.preventDefault();
  }

  // delete button event
  const itemDeleteSubmit = function (e) {
    // get current item
    const currentItem = ItemController.getCurrentItem();
    // delete from ItemController items
    ItemController.deleteItem(currentItem.id);
    // delete from ui
    UIController.deleteListItem(currentItem.id);
    const totalCalories = ItemController.getTotalCalories();
    UIController.showTotalCalories(totalCalories);
    // delete from local storage
    StorageController.deleteItemStorage(currentItem.id);
    UIController.clearEditState();
    e.preventDefault();
  }

  // clear items event
  const clearAllItemsClick = function (e) {
    // delete all items from ItemController
    console.log("clearAllItems clicked")
    ItemController.clearAllItems();
    const totalCalories = ItemController.getTotalCalories();
    UIController.showTotalCalories(totalCalories);
    // clear from ui
    UIController.clearItems();
    UIController.hideList();
    // clear from local storage
    StorageController.clearItemsStorage();
    e.preventDefault();
  }

  return {  // public methods
    init: function () {
      // clear the other buttons besides add
      UIController.clearEditState();
      // fetch items from data structure
      const items = ItemController.getItems();
      // check if any items
      if (items.length === 0) {
        UIController.hideList();
      } else {
        // populate list with items
        UIController.populateItemList(items);
      }
      // get total calories
      const totalCalories = ItemController.getTotalCalories();
      UIController.showTotalCalories(totalCalories);
      // load event listeners
      loadEventListeners();
    }
  }
})(ItemController, StorageController, UIController);

App.init();