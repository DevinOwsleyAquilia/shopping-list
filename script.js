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
      //event.preventDefault();
      console.log("check item");
      $(this).parent().parent().find('.shopping-item').addClass('shopping-item__checked');
      checkItem();
    });
    //trigger for delete item (button trigger)
    $(document).on('click', '.shopping-item-delete', function (event) {
      //event.preventDefault();
      console.log("delete item");
      deleteItem();
    });
  })
  
  function addItem() {
    //console.log("inside function, add item");
    let itemValue = $('#shopping-list-entry').val();
    //alert(itemValue);
    if (itemValue.length === 0) {
        alert('You have to add something!');
    }
    else {
        let row = '';
        row += '<li>';
        row += '<span class="shopping-item">' + itemValue + '</span>';
        row += '<div class="shopping-item-controls">';
        row += '<button class="shopping-item-toggle">';
        row += '<span class="button-label">check</span>';
        row += '</button>';
        row += '<button class="shopping-item-delete">';
        row += '<span class="button-label">delete</span>';
        row += '</button>';
        row += '</div>';
        row += '</li>';

        //add each of the rows above to the previous ones
        $('.shopping-list').append(row);
        $('#shopping-list-entry').val('');
    }
  };
  
  function checkItem() {
    //console.log("Inside function, check item");
    //console.log($(this).parent());
    $(this).parent().parent().find('.shopping-item').toggleClass('shopping-item__checked');
  };
  
  function deleteItem() {
    //console.log("Inside function, delete item");
    $(this).closest('li').remove();
  };

  $(document).ready(function() {
      $('#js-shopping-list-form').submit(function (event) {
          event.preventDefault();
          addItem();
      });
  });
  $(document).on('click', '.shopping-item-toggle', checkItem);
  $(document).on('click', '.shopping-item-delete', deleteItem);
  