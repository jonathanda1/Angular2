n_line_stops   = ['Times Square', '34th', '28th-n', '23rd-n', 'Union Square', '8th']
l_line_stops   = ['8th Ave', '6th Ave', 'Union Square', '3rd Ave', '1st Ave']
six_line_stops = ['Grand Central', '33rd', '28th-six', '23rd-six', 'Union Square', 'Astor Place']

mta = [
  :n_line   => n_line_stops,
  :l_line   => l_line_stops,
  :six_line => six_line_stops
]



#starting stop
puts "Which stop would you like to get on at?"
puts mta[:n_line].each_with_index |stop,i|
  puts "#{i}) #{stop}"
end
puts "Please enter a number"
start_stop = gets.to_i

#ending stop
puts "Which stop will be your destination?"
puts mta[:n_line].each_with_index |stop,i|
  puts "#{i}) #{stop}"
end
puts "Please enter a number"
end_stop = gets.to_i

length_of_trip = ((start_stop - end_stop) - 1).abs

puts "Length of trip: #{length_of_trip}"
