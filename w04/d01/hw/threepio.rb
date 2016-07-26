puts "Hello, I am C-3P0, human-cyborg relations."
puts "And your name is?"
user_input = gets.chomp
  if user_input == "Obi-Wan Kenobi"
    puts "Oh, marvelous! Simply marvelous! Say hello to R2-D2;
    he's been looking all over for you!"
  else
    puts "It is a pleasure to meet you, #{user_input}.
    I'm terribly sorry for prying, but you don't by any chance go by the alias
    of Obi-Wan Kenobi, do you?"
end

answer = gets.chomp
  if answer == "yes" or answer == "Yes" or answer == "YES" or answer == "y" or answer == "Y"
    puts "Oh, marvelous! Simply marvelous! Say hello to R2-D2;
    he's been looking all over for you!"
  elsif answer == "no" or answer == "No" or answer == "NO" or answer == "n" or answer == "N"
    puts "I've really enjoyed speaking with you, #{user_input},
    but if you'll please excuse me, I have to help my friend find
    someone named Obi-Wan Kenobi."
  else
    puts "I'm sorry, I didn't hear you correctly. I only respond to 'yes' or 'no'..."
    puts "Well R2, I suppose we'll just have to keep looking.
    R2-D2: (Agreeable droid noises)"
end


