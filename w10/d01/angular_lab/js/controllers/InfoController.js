angular.module("AngularLab")
    .controller("InfoController", InfoController)


function InfoController () {
  this.image = "http://4.bp.blogspot.com/--e_BDE_jjKQ/VdtAbTHozTI/AAAAAAAAHsI/bGdPlHsDlZQ/s1600/Sargent_DIGITAL_Hero.jpg"
  this.title = "Sargent Portraits of Artists & Friends"
  this.painter = "John Sargent"
  this.hours = [
            {day: "Friday", hours: "10:00 am - 9:00 pm"},
            {day: "Saturday", hours: "10:00 am - 9:00 pm"},
            {day: "Sunday", hours: "10:00 am - 5:00 pm"},
            {day: "Monday", hours: "10:00 am - 5:00 pm"},
            {day: "Tuesday", hours: "10:00 am - 5:00 pm"},
            {day: "Wednesday", hours: "10:00 am - 5:00 pm"},
            {day: "Thursday", hours: "10:00 am - 5:00 pm"}
                  ];
  this.admission = [
                      {status: "Adults", price: "25"},
                      {status: "Seniors", price: "17"},
                      {status: "Students", price: "12"}
                      ];
    return this
}
