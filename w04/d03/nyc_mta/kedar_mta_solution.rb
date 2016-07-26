kedar_mta_solution

n_line_stops   = ['Times Square', '34th', '28th-n', '23rd-n', 'Union Square', '8th']
l_line_stops   = ['8th Ave', '6th Ave', 'Union Square', '3rd Ave', '1st Ave']
six_line_stops = ['Grand Central', '33rd', '28th-six', '23rd-six', 'Union Square', 'Astor Place']

mta = [n_line_stops, l_line_stops, six_line_stops]
union_square_stop_number = [4, 2, 4]

# Get starting line
puts "What line would you like to start on?"
puts "0) N"
puts "1) L"
puts "2) 6"
print "Enter a number: "
start_line = gets.to_i

# Get starting stop
puts "What stop would you like to start at?"
mta[start_line].each_with_index do |stop, i|
    puts "#{i}) #{stop}"
end
print "Enter a number: "
start_stop = gets.to_i

# Get ending line
puts "What line would you like to start on?"
puts "0) N"
puts "1) L"
puts "2) 6"
print "Enter a number: "
end_line = gets.to_i

# Get ending stop
puts "What stop would you like to end at?"
mta[end_line].each_with_index do |stop, i|
    puts "#{i}) #{stop}"
end
print "Enter a number: "
end_stop = gets.to_i

# Determine length of trip
length_of_trip = -1
if start_line == end_line
    length_of_trip = (start_stop - end_stop).abs
else
    length_of_trip = (start_stop - union_square_stop_number[start_line]).abs +
        (end_stop - union_square_stop_number[end_line]).abs
end
puts "Length of trip: #{length_of_trip}"
