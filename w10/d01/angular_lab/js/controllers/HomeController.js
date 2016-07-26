angular.module("AngularLab")
    .controller("HomeController", HomeController)

function HomeController () {
    this.test = "Hello World"
    return this
}
