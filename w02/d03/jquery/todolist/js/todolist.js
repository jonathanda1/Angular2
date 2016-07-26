console.log("hi")

$("#completed").

$("#removed").

$("#add").click(function () {
  var newTodoText = $().val();
  $("#table").append("<tr><td><td>"+newTodoText+"</td></td></tr>")
});

// add button would add a
//<tr>
//  <td></td>
//  <td></td>
//</tr>
