angular.module("TheResourceLab")
       .factory("UserResource", UserResource)

UserResource.$inject = ['$resource']

function UserResource($resource) {
  return $resource(
    "http://localhost:3000/users/:id" ,
    {id: '@id'}
  )
}
