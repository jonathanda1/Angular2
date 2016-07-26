angular.module("ResourcePractice")
      .controller("PostsController", PostsController)

    PostsController.$inject = ['PostResource']

    function PostsController (PostResource) {
      var vm = this

      vm.posts = []
      vm.firstPost = {}

    // get all posts
    PostResource.query().$promise.then(function (posts) {
      vm.posts = posts
    })

    // get one post
    PostResource.get({ id: 1 }).$promise.then(function (post) {
      vm.firstPost = post
    })

    // 2 ways to add a post -- PROMISE vs CALLBAck

    // save a specific post -- Id is created by mongodb
    PostResource.save({
      userId: 1,
      title: "Ninety-nine bottles",
      body: "Ninety-eight bottles"
    }).$promise.then(function (post) {
      vm.posts.push(post)
    })
                                      // $promise waiting for post to be saved into database and  only then will it be pushed into the front end


    // var post = new PostResource({
    //   userId: 2,
    //   title: "Ninety-seven bottles",
    //   body: "Ninety-six bottles"
    // })
    // post.$save(function (post) {
    //   vm.posts.push(post)
    // })


    // Delete a specific post
    PostResource.delete({id: 1}).$promise.then(function (post) {
    console.log("Post deleted")
    })


    // Update a specific post
    PostResource.get({id: 1}).$promise.then(function(post) { //gets the post first
        post.title = "Ninety-nine bottles"                   // updates info
        PostResource.update({id: 1}, post)                   // updates post
     })

  }




