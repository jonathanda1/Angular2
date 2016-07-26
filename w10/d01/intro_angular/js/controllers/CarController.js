angular.module("IntroAngular")
    .controller("CarController", CarController)

function CarController () {
    this.test = "Goodbye World"
    this.moreCars = [ {make: "Honda" ,
                    model: "Civic"},
                    {make: "Honda",
                    model: "Accord"},
                    {make: "Toyota",
                    model: "Camry"}
                 ];
    return this
};
