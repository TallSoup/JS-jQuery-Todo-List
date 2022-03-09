$(document).ready(function() {
  $('.list-group.todo, .list-group.completed').on('click', "input[type='checkbox']", function(){
    console.log("clicked");
    var listItemID = "#" + $(this).closest('li').attr("id");
    console.log(listItemID);
    var listHTML = ($(this).closest('li')).prop("outerHTML");
    console.log(listHTML);

    if ($(this).is(":checked")) {
      // add to end of completed list
      $("ul.completed").append($(listHTML));
      // remove from todo list
      $(".todo " + listItemID).remove();
      // apply muted and check box
      // $(listItemID).removeClass("todo");
      $(listItemID).addClass("text-muted");
      $(listItemID + " input").prop("checked", true);
      $(listItemID + " input").attr("checked", true);
      // console.log(listHTML);
    } else {
      console.log("Unchecked");
      // add to todo again
      $("ul.todo").append($(listHTML));
      // remove from completed
      $(".completed " + listItemID).remove();
      // remove muted and uncheck
      $(listItemID).removeClass("text-muted");
      // $(listItemID).addClass("todo");
      $(listItemID + " input").prop("checked", false);
      $(listItemID + " input").attr("checked", false);
    }

  })



  function newID() {
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let newID = "";
    const random = chars[Math.floor(Math.random() * chars.length)];
    for (let i = 0; i < 5; i++) {
      ;
      newID += chars[Math.floor(Math.random() * chars.length)];
    }
    return newID;
  }

  $(".add").click(function() {
    var newTodo = $(".addItem").val();
    $(".addItem").val("");
    console.log(newTodo)
    if (newTodo != "") {
      $("ul.todo").append('<li id=' + newID() + ' class="list-group-item d-flex gap-2"><input class="form-check-input flex-shrink-0 " type="checkbox" ><span>' + newTodo + '</span></li>');
    }
  })


  // remove all completed
  $(".clear").click(function() {
    console.log("clicky")
    $(".completed li").remove();
  })



})
