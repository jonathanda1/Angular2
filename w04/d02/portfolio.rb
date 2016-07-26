class Portfolio
  attr_accessor :price
  attr_reader :name

  def initialize (name, price)
    @name = name
    @price = price
  end

  def buy
    rand
  end

  def sell
    rand
  end

end

google = Portfolio.new "Google", "$743.98"
puts google.name
puts google.price
puts google.sell
puts google.buy
