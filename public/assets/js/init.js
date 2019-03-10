// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function() {
  setTimeout(function(){
    window.location.reload();
  },5000);

  $("#devour").on("click", function() {
    var id = $(this).attr("data-burger");

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

      }
    );
  });

  $("#cook").on("click", function() {
    var id = $(this).attr("data-burger");

    var eaten = {
      devoured: false
    };

    // Send the PUT request.
    $.ajax("/" + id, {
      type: "PUT",
      data: eaten
    }).then(
      function(result) {
        console.log("This burger has been cooked again!");

      }
    );
  });

  $(".create-form").on("submit", function(event) {
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
        // Reload the page to get the updated list
      }
    );
  });

  $("#delete").on("click", function() {
    var id = $(this).attr("data-burger");

    // Send the DELETE request.
    $.ajax("/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
      }
    );
  });
});
