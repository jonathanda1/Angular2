class Library
  attr_accessor :band, :title, :genre

  def initialize(band, title, genre)
    @band = band
    @title = title
    @genre = genre
  end

  def favorite_band
    puts "Your favorite song is under the genre #{genre} by #{band} and called #{title}."
  end
end

song = Library.new "The Beatles","Sgt. Peppers", "Classic Rock"
puts song.favorite_band
