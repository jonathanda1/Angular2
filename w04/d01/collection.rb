hammonds_mines = {
  :working => [
    {
      :location      => "Mongolia",
      :depth         => "150 meters",
      :annual_budget => 850_000,
      :specimens => [
        "Brachiosaurus",
        "Triceratops",
        "Gallimimus",
        "Compsognathus"
      ]
    },
    {
      :location      => "Nicaragua",
      :depth         => "200 meters",
      :annual_budget => 1_500_000,
      :specimens => [
        "Tyrannosaurus Rex",
        "Stegosaurus",
        "Triceratops"
      ]
    },
    {
      :location      => "Patagonia",
      :depth         => "400 meters",
      :annual_budget => 1_200_000,
      :specimens => [
        "Dilophosaurus",
        "Brachiosaurus",
        "Triceratops",
        "Velociraptor"
      ]
    },
    {
      :location      => "Mexico",
      :depth         => "350 meters",
      :annual_budget => 900_000,
      :specimens => [
        "Stegosaurus",
        "Gallimimus",
        "Parasaurolophus"
      ]
    }
  ],
  :planned => [
    "China",
    "Nicaragua 2"
  ]
}

#1. What kind of data structure is hammonds_mines?
Hashes

#2. How many "working" mines does he have? How many are "planned"? Save each to appropriately named variables.
4 working, 1 planned.
working_mines = hammonds_mines[:working]
planned_mines = hammonds_mines[:planned]

#3. Access the depth of John Hammond's mine in Mexico. Save the depth to an appropriately named variable.
mexico_depth = hammonds_mines[:working][3][:depth]

#4. What is the data type of the depth?
string

#5. Can you write a Ruby statement that will tell us if it under the limit for unregulated mines in Mexico, which is 200 meters? What would that statement be?
if mexico_depth.to_i < 200
  puts "It is under the limit for unregulated mines"
else
  "It is over the limit for unregulated mines"
end

#6. Access the annual budget for Hammond's mine in Patagonia. Save the budget to an appropriately named variable.
patagonia_budget = hammonds_mines[:working][2][:annual_budget]

#7. If there are 50 workers there, how much is the maximum each can be payed every month (in US dollars)?
1,200,000/12 = 100,000/50 = 2,000
The maximum each worker can be paid is $2,000/mo

#8. Access the list of dinosaur specimens found in Nicaragua.
hammonds_mines[:working][1][:specimens]
#9. Access all the Stegosauruses.
hammonds_mines[:working][1][:specimens][1]
hammonds_mines[:working][3][:specimens][0]
