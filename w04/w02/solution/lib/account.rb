class Account
  def initialize(name, pin, balance)
    @name = name
    @pin = pin
    @balance = balance
  end

  attr_reader :name, :balance

  def display_balance(pin)
    if check_pin(pin)
      puts "Balance: #{balance}"
    else
      puts pin_error
    end
  end

  def withdraw_funds(pin, amount)
    if check_pin(pin)
      @balance -= amount
      puts "Withdrew #{amount}. Balance is now #{balance}"
    else
      puts pin_error
    end
  end

  def deposit_funds(pin, amount)
    if check_pin(pin)
      @balance += amount
      puts "Deposited #{amount}. Balance is now #{balance}"
    else
      puts pin_error
    end
  end

  def check_pin(pin)
    @pin == pin
  end

  private

  def pin_error
    "Error: Incorrect Pin"
  end

end
