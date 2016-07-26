console.log('main.js loaded!');

$(document).ready(function() {
  console.log("this works")
})

var $personalTodo,
    $bootsyTodo,
    $form,
    $todoTask,
    $todoBootsyLevel;

var renderTodo = _.template(`
 <li id="todo-<%= _id %>" class="todo-item bootsy<%= bootsyLevel %>">
   <%= task %>
   <input id="<%=_id %>"" class="check" type="checkbox" name="todo[completed]" <%= completed ? "checked" : "" %> />
   <span id= '<%=_id %>' class="remove-item">X</span>
 </li>
 `);

$(document).ready(function() {
  $personalTodo    = $("#personal-todo");
  $bootsyTodo      = $("#bootsy-todo");
  $form            = $("#new-todo");
  $todoTask        = $("#todo-task");
  $todoBootsyLevel = $('#todo-bootsy-level');

// CREATE
  $form.on('submit', function(e) {
    e.preventDefault();
    console.log($todoTask.val());
    console.log($todoBootsyLevel.val());
    var newTodo = {task:        $todoTask.val(),
                   bootsyLevel: $todoBootsyLevel.val()
                  };
    $.ajax({
      method: "POST",
      url: "/api/todos",
      data: newTodo
    }).then(function (jsonTodo) {
      // CLEAR THE FORM
      $todoTask.val('');
      $todoBootsyLevel.val('');
      return jsonTodo;
    },
    function(err) {
      console.log("failed:", err)
    }
   ).then(
    function(jsonTodo) {
      // renderTodo IS THE LODASH TEMPLATE STORED IN A GLOBAL VARIABLE ABOVE
      var todoHTML = renderTodo(jsonTodo);
      $bootsyTodo.append(todoHTML);
    }
   )
  });


// INDEX
  $.ajax({
    type: "GET",
    url:  "/api/todos",
  }).then(
    function(jsonTodos) {
      jsonTodos.forEach(function(jsonTodo) {
        // for each item in jsonTodos render the template above
        // renderTodo IS THE LODASH TEMPLATE STORED IN A GLOBAL VARIABLE ABOVE
        var todoHTML = renderTodo(jsonTodo);
        // if completed is true then it moves from persontodo to bootsytodo
        if(jsonTodo.completed) {
          $personalTodo.append(todoHTML);
        } else {
          $bootsyTodo.append(todoHTML);
        }
      })
    }
  )
})

// DELETE
function deleteHandler() {
  console.log(this);
  var html = $(this).parent();
  $.ajax({
    type: "DELETE",
    url: "/api/todos/" + encodeURIComponent(this.id)
  }).then(
  function() {
    html.remove();
  })
}

$(document).on("click", ".remove-item", deleteHandler)

//UPDATE

function updateHandler (event) {
  var getId = function(jqueryThing) {
    return jqueryThing.attr('id')
  }
  console.log(event)
  var html = $(event.target).parent();
  console.log(html)
  var id = getId(html);
  console.log(html)
  $.ajax({
    type: "PUT",
    url: "/api/todos/" + encodeURIComponent(id.substring(5)),
    data: {}
  }).then(
  function(jsonTodo) {
    html.remove();
    var todoHTML = renderTodo(jsonTodo);
    if(jsonTodo.completed) {
      $personalTodo.append(todoHTML);
    } else {
      $bootsyTodo.append(todoHTML);
    }
  }
  )
}

$(document).on("click", ".check", updateHandler)


