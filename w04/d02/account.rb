class Account
  attr_accessor :name, :pin, :initial_balance

  def initialize(name, pin, initial_balance)
    @name = name
    @pin = pin
    @initial_balance = initial_balance
