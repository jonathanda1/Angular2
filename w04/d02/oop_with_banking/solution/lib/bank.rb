require_relative "./account"

class Bank
  def initialize
    @accounts = {}
  end

  def open_account(name, pin, balance)
    @accounts[name] = Account.new(name, pin, balance)
  end

  def close_account(name)
    @accounts.delete(name)
  end

  def lookup_account(name)
    @accounts[name]
  end

end
