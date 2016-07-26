class Account
  attr_reader :username, :balance
  attr_writer :pin

  def initialize(username, pin, balance)
    @username = username
    @pin = pin
    @balance = balance
  end

  def checkpin(pin)
    pin==@pin
  end

  def display_balance(pin)
    puts checkpin(pin) ? "balance: #{@balance}" : "incorrect pin"
  end

  def withdraw_funds(pin, amount)
    if checkpin(pin)
      if amount<= @balance
        @balance-=amount
        puts "#{amount} withdrawn"
        puts "#{balance} remaining"
      else
        puts "insufficient funds"
      end
    else puts "incorrect pin"
    end
  end

  def deposit_funds(pin, amount)
    if checkpin(pin)
      @balance += amount
      puts "#{amount} added"
      puts "#{balance} remaining"
    else
      puts "incorrect pin"
    end
  end
end
