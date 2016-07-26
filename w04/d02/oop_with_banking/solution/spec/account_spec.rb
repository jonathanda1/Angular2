require_relative "../lib/account"

describe Account do
  let :checking_account do
    Account.new("checking", 1234, 1000)
  end

  it "can read name" do
    expect(checking_account.name).to eq("checking")
  end

  it "can read balance" do
    expect(checking_account.balance).to eq(1000)
  end

  describe "display balance" do
    context "with correct pin" do
      it "should display balance" do
        expect(STDOUT).to receive(:puts).with("Balance: 1000")
        checking_account.display_balance(1234)
      end
    end

    context "with incorrect pin" do
      it "should display error" do
        expect(STDOUT).to receive(:puts).with("Error: Incorrect Pin")
        checking_account.display_balance(0000)
      end
    end
  end

  describe "withdraw funds" do
    context "with correct pin" do

      it "should deduct funds" do
        checking_account.withdraw_funds(1234, 50)
        expect(checking_account.balance).to eq(950)
      end

      it "should display message" do
        expect(STDOUT).to receive(:puts).with("Withdrew 50. Balance is now 950")
        checking_account.withdraw_funds(1234, 50)
      end
    end

    context "with incorrect pin" do
      it "should display error" do
        expect(STDOUT).to receive(:puts).with("Error: Incorrect Pin")
        checking_account.withdraw_funds(0000, 50)
      end
    end
  end

  describe "deposit funds" do
    context "with correct pin" do

      it "should deposit funds" do
        checking_account.deposit_funds(1234, 50)
        expect(checking_account.balance).to eq(1050)
      end

      it "should display message" do
        expect(STDOUT).to receive(:puts).with("Deposited 50. Balance is now 1050")
        checking_account.deposit_funds(1234, 50)
      end
    end

    context "with incorrect pin" do
      it "should display error" do
        expect(STDOUT).to receive(:puts).with("Error: Incorrect Pin")
        checking_account.deposit_funds(0000, 50)
      end
    end
  end
end
