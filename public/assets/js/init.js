// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function() {
  // setTimeout(function(){
  //   window.location.reload();
  // },5000);

  $(".devour").on("click", function() {
    var id = $(this).attr("data-burger");
    console.log(id);
    var eaten = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/" + id, {
      type: "PUT",
      data: eaten
    }).then(
      function(result) {
        console.log("This burger has been devoured");
        location.reload();
      }
    );
  });

  $(".cook").on("click", function() {
    var id = $(this).attr("data-burger");
    console.log(id);
    var eaten = {
      devoured: false
    };

    // Send the PUT request.
    $.ajax("/cook/" + id, {
      type: "PUT",
      data: eaten
    }).then(
      function(result) {
        console.log("This burger has been cooked again!");
        location.reload();
      }
    );
  });

  $(".create-update-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#addBurger").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger" + name);
        location.reload();
      }
    );
  });

  $(".delete").on("click", function() {
    var id = $(this).attr("data-burger");

    // Send the DELETE request.
    $.ajax("/delete/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted burger", id);
        location.reload();
      }
    );
  });
});
