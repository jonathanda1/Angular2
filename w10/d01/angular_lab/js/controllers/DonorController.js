angular.module("AngularLab")
    .controller("DonorController", DonorController)

function DonorController () {
  this.email = "development@metmuseum.org"
  this.phone = "212-650-2425"
  this.amounts = [{amount:"50"},
                  {amount:"100"},
                  {amount:"250"},
                  {amount:"500"},
                  {amount:"1000"}]
  return this
}
