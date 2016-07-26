require_relative "./account"

class Bank
  attr_reader :accounts

  def initialize
    @accounts = {}
  end

  def open_account(name, pin, balance)
    @accounts[name] = Account.new name, pin, balance
  end

  def close_account(name, pin)
    if @accounts[name].checkpin(pin)
      @accounts.delete(name)
    end
  end

  def lookup_account(name)
    @accounts[name].inspect
  end

end
