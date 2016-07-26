angular.module("ResourcePractice")
    .factory("UserResource", UserResource)

UserResource.$inject = ['$resource']

// fully generates RESTful API for users
function UserResource($resource) {
    return $resource(
        "http://jsonplaceholder.typicode.com/users/:id",
        {id: '@id'},
        {'update': {method: 'PUT'},
         'todos' : {
            method: 'GET',
            url: "http://jsonplaceholder.typicode.com/users/:userId/todos",
            isArray: true
         }
      })
}

// when you want to get embedded "todos" example ^^^^^
