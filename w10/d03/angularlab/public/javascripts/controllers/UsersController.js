angular.module("TheResourceLab")
      .controller("UsersController", UsersController)

    UsersController.$inject = ['UserResource']

    function UsersController (UserResource) {
      var vm = this
      vm.users = []
      vm.remove = remove
      vm.newUser = {}
      vm.addUser = addUser


      // List all users
      UserResource.query().$promise.then(function (users) {
        vm.users = users
      })

      // Saves User
      function addUser (user) {
      UserResource.save({
       name: user.name,
       username: user.username,
       address: user.address
      }).$promise.then(function(user) {
        vm.users.push(user)
        // logs messages in console
        vm.newUser = {}
        console.log("user created")
      })
    }


      // deletes one user
      function remove(user) {
        console.log(user)
      UserResource.delete({id: user._id}).$promise.then(function() {
        vm.users.splice(vm.users.indexOf(user), 1)
      })
    }

    }


// front end user id = id only when you pass it to $resource ... on index.html and back end it is _id

// anything back end related the id is _id but in $resource when you call id it is id
