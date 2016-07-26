angular.module("IntroAngular")
    .controller("HomeController", HomeController)

// this = this controller = HomeController
function HomeController () {
    this.test = "Hello World"
    this.count = 10
    return this
}

