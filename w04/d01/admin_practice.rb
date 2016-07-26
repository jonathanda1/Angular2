@user ={ :password => "dog" , :is_admin => false}

params = {:password => "dog"}

#oneline
puts "Here are your admin privileges" if params[:password] == @user[:password] and params[:is_admin] == true
puts "Authorization failed: Bad Password" if @user[:password] != params[:password]
puts "Authorization failed: User is not an admin" if @user[:is_admin] == false

#Standard
if @user[:is_admin] == true and params[:password] == @user[:password]
  puts "Here are your admin privileges"
elsif @user[:password] != params[:password]
  puts "Authoraization failed: Bad Password"
else
  puts "Authorization failed: User is not an admin"
end


