class Ticket
  attr_accessor :price, :artist, :venue

  def initialize(price, artist, venue)
    @price = price
    @artist = artist
    @venue = venue
  end

  def announcement
    puts "#{artist} is playing at #{venue} for #{price} never"
  end
end

ticket = Ticket.new "$25", "Madonna", "The Hollywood Bowl"
puts ticket.announcement

ticket2 = Ticket.new "$30", "Bob Marley", "Jamaica"
puts ticket2.announcement
