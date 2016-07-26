class Movie
    attr_accessor :picture, :genre
    attr_reader :title #so that you can no longer set value of title

  def initialize (title, genre, picture)
      @picture = picture
      @title = title
      @genre = genre
  end

  #custom method
  def to_s #can use this to show just two attributes(case of pw)
    "title: #{@title}, genre: #{@genre}"
  end

  def rating
    rand
  end

end

  #Getter
  #def title                          #function () {
  #    @title                         # return @title
  #end                                #}

  #Setter
  #def title= title
   # @title = title
  #end


jurassic_park = Movie.new "Jurassic Park", "Action", "www.pretend-url.com"
puts jurassic_park.rating #setter

ironman = Movie.new "Ironman", "", ""
puts ironman.title
#ironman.title = "Ironman" #setting

#superman = Movie.new "Superman", "Action", "www.pretend-url.com"
#superman.title = "Superman" #setting

#batman = Movie.new "Batman", "Action", "www.pretend-url.com"
#batman.title = "Batman"
