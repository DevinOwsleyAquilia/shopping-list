//create individual triggers 
//trigger when the page loads below
$(function () {
  //trigger for add item button (form trigger)
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    console.log("add item");
    addItem();
  })
  //trigger for check item (button trigger)
  $(document).on('click', '.shopping-item-toggle', function (event) {
    event.preventDefault();
    console.log("check item");
    checkItem();
  });
  //trigger for delete item (button trigger)
  $(document).on('click', '.shopping-item-delete', function (event) {
    event.preventDefault();
    console.log("delete item");
    deleteItem();
  });
})

function addItem() {
  console.log("inside function, add item");
};

function checkItem() {
  console.log("Inside function, check item");
};

function deleteItem() {
  console.log("Inside function, delete item");
};
