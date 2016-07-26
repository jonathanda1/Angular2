angular.module("ResourcePractice")
    .factory("PostResource", PostResource)

PostResource.$inject = ['$resource']

// fully generates RESTful API for users
function PostResource($resource) {
    return $resource(
        "http://jsonplaceholder.typicode.com/posts/:id",
        {id: '@id'},
        {'update': {method: 'PATCH'}}
    )
}
