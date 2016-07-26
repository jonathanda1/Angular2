require_relative "../lib/bank"

describe Bank do
  let :bank do
    Bank.new
  end

  describe "open account" do
    it "should open account with right name an properties" do
      account = bank.open_account("checking", 1234, 10000)
      expect(account.name).to eq("checking")
      expect(account.balance).to eq(10000)
      expect(account.check_pin(1234)).to eq(true)
    end
  end

  describe "lookup account" do
    before do
      @account = bank.open_account("savings", 1234, 500)
    end

    it "should lookup a previously opened account by name" do
      expect(bank.lookup_account("savings")).to eq(@account)
    end
  end

  describe "close account" do
    before do
      @account = bank.open_account("savings", 1234, 500)
    end

    it "should delete the account from the bank" do
      bank.close_account("savings")
      expect(bank.lookup_account("savings")).to be_nil
    end
  end
end
