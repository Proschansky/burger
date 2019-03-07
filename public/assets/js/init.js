// Make sure we wait to attach our handlers until the DOM is fully loaded.
 function DataConstructor (burgerId, burger_name, devoured,){
  this.id = burgerId;
  this.burger_name = burger_name;
  this.devoured = devoured;
};

$(function() {
  $("#notComplete").on("click", function() {
    var id = $(this).attr("data-burger");

    var eaten = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/" + id, {
      type: "PUT",
      data: eaten
    }).then(
      function() {
        console.log("This burger has been devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newCat = {
      name: $("#ca").val().trim(),
      sleepy: $("[name=sleepy]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/cats", {
      type: "POST",
      data: newCat
    }).then(
      function() {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-cat").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
