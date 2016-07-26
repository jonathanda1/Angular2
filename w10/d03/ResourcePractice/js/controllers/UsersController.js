angular.module("ResourcePractice")
      .controller("UsersController", UsersController)

    UsersController.$inject = ['UserResource']


    function UsersController (UserResource) {
      var vm = this
      vm.users = [];
      vm.firstUser = {}

      // shows all users
      UserResource.query().$promise.then(function (users) {
      vm.users = users
      })

      // shows one user
      UserResource.get({ id: 1 }).$promise.then(function (user) {
      vm.firstUser = user
      })

      // saves posts one user
      UserResource.save({
      name: "Jonathan"
     }).$promise.then(function (user) {
      vm.users.push(user)
      console.log("created")
     })

     // deletes one user
     UserResource.delete({id: 2}).$promise.then(function (user) {
      console.log("User deleted")
      })

     // Updates one user
     UserResource.get({id: 1}).$promise.then(function(user) {
        user.email = "geni@jabba.org"
        UserResource.update({id: 1}, user)
     })

    }

