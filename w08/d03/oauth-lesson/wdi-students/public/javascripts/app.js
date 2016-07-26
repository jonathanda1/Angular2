var allStudents;
var filteredStudents = [];
var searchName = '';
var template;

$(function() {
  // load all students one time at load
  $.get('/api/students', function(data) {
    allStudents = data;
    template = _.template($('#studentTemplate').html());
    render();
  });
});

function render() {
  applyFilterAndSort();
  $('#students').html(template({students: filteredStudents}));
}

function applyFilterAndSort() {
  if (searchName) {
    filteredStudents = allStudents.filter(function(student) {
      return student.name.toLowerCase().indexOf(searchName.toLowerCase()) >= 0;
    });
  } else {
    filteredStudents = allStudents;
  }
  var sortKey = $('#sortCohort').is(":checked") ? 'cohort' : 'name';
  filteredStudents = _.sortBy(filteredStudents, sortKey);
}

function doSearch() {
  var curSearch = $('#search').val();
  if (curSearch != searchName) searchName = curSearch;
  render();
}


/* ----- event handlers ----- */

$('#search').on('keypress blur', function(evt) {
  if (evt.keyCode === 13 || evt.type === 'blur') doSearch();
});

$('[type="radio"]').on('change', function() { render(); });

function addFact() {
  console.log('clicked')
  $.ajax ({
    method:"POST",
    url: "/api/facts",
    data: {
          fact: $("#fact").val()
          }
  }).then(function(data) {
  // clear form
  $("fact").val('');
  // add the new fact to list of facts
  console.log(data);
  console.log(allStudents);
  var updated = allStudents.find(function(student) {
    return (student._id == data._id)
  })
  updated.facts.push(data.facts.pop());
  render();
 });
};

function deleteFact () {
  var fact = this
  var factId = this.id
  console.log("/api/facts/" + encodeURIComponent(factId))
  $.ajax({
    url: "/api/facts/" + encodeURIComponent(factId),
    type:"DELETE",
    data: {factId: fact, studentId: userId},
    success: function(result) {
      console.log(result)
    }
  }).then(function() {
    fact.remove();
  })
}

$(document).on("click", ".delete-button", deleteFact)
