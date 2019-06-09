// adding items to list function

function formListen(){
    $('#js-shopping-list-form').submit(function(event){     
    event.preventDefault();
    const userText = $(event.currentTarget).find("#shopping-list-entry");
    
    const newBox = `  <li>
    <span class="shopping-item">${userText.val()}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`
    $(".shopping-list").append(newBox);
    userText.val("");
});
}
//check fucntion

function checkingItem(){
 $('.shopping-list').on('click','li', function(event){
   $(this).find('.shopping-item').toggleClass("shopping-item__checked");
});
}
//delete function

function removeItem(){
  $('ul').on('click','.shopping-item-delete', function(event){
  $(this).closest('li').remove();
});
}

//Callback functions

$(formListen());
$(removeItem());
$(checkingItem());

