![Wolf Of Wall Street](the-wolf-of-wall-street-official-extended-trailer-0.jpg)

# A Career In Banking

After several years of long hard hours in fledgling startups, plus two decades working for social justice oriented non-profits, you're burnt out and broke! So you decide to shoot for some stability and go write code for the banking industry!

Unfortunately, the year is 2008 and you arrive in the midst of financial meltdown! Nothing is working, and financial instability has mean your bank had to shut down your main ATM system. So you boss comes to you and says you need to write an ATM program from scratch.

Here's how he describes what the ATM program should do:

## Program specs

The program you'll be writing should allow you to:

  1. Open a new account with an account name, pin, and initial balance
  2. Login to an existing account using the account name, and pin
  3. Once you're logged in, you should be able to display the balance, add funds, and withdraw funds
  4. You should be able to logout of an existing account
  5. You Should be able to close your account.

The program will run from the command line with a text interface.

One more requirement: Your manager is freaked out about the state of banking systems! So he wants to verify the pin on every transaction. The user shouldn't have to re-enter the pin, but you should make sure the pin stored in memory matches the account.

## Lesson Objectives

The goal of this lesson is to take a program from a loosely described specification, come up with a clear user interface, and design a software architecture using whiteboarding, and finally implement the code!

### Part 1: Interface Description

10 min

Before we even get started, we've gotten some specs, but let's make sure we understand the interface. With a group of 3/4, let's draw out the steps for how you interact with the program.

5 mins

Discussion of interface

### Part 2: Classes And Data

With your group, spend 15 minutes talking about the technical architecture of the program. Answer the following questions:

1. What data do we need to keep track of?
2. What classes might we want to create to represent different aspects of the program?
3. What is the interface for those classes? A class interface consists of:
	- What inputs get passed to the constructor?
	- What methods does the class have? For each method:
	   - What parameters does it take as input?
	   - What is the expected output, based on the parameters and internal state of the object

15 minutes 
Lets discuss our architecture

### Part 3: Implementing the Account class

At this point, we've hopefully all agreed that we need to implement a class to represent accounts.

After much discussion, we agree on the following interface:

1. You will initialize the account class by passing an account name, a pin, and an initial balance
2. The account class should have read accessors to check it's name and balance. It should not have an accessor for a pin.
3. The account class should have a check_pin method. The check_pin method will take a pin to test. If that pin matches the pin on the account, it will return true. If it doesn't, it will return false.
4. The account class should have a display_balance method. The method should take a pin for security sake. If the pin matches the pin on the account, the method should 'puts' the balance. Otherwise it should 'puts' "Pin Error"
5. The account class should have a withdraw_funds method. The method should take a pin and an amount to withdraw. If the pin matches, and their are sufficient funds in the account, the method should subtract the given amount from the balance, and 'puts' how much was withdrawn plus the new balance. If the pin does not match, the method should output "Pin Error". If there are insufficient funds, it should output "Insufficient funds"
5. The account class should have a deposit_funds method. The method should take a pin and an amount to deposit. If the pin matches, the method should add the given amount from the balance, and 'puts' how much was deposited plus the new balance. If the pin does not match, the method should output "Pin Error".

---

10 minutes -- With a partner, pair programming, define the class, and implement the constructor to save the account name, pin, and balance to instance variables. Make the read methods for name and balance 

---

10 minutes -- implement the check_pin method, and then implement the display balance method (you can use the check_pin method inside it)

---

15 minutes -- implement the withdraw_funds method and the deposit_funds method


### Part 4 Implementing The Bank Class

We're going to implement a bank class to track all of our accounts.

After much discussion, we agree on the following interface:

1. The bank constructor will take no parameters. Internally, the constructor will setup an empty hash to track all accounts.
2. The bank will have an open_account method which creates a new account. The method will take an account name, pin, and balance, which it will pass to the constructor for the account. It will save the account in the accounts hash using the account name as the key.
3. THe bank will have a close_account method which will take a name of an account and delete it from the hash
4. The bank will have a lookup_account method which will take a name of an account and return the account object by looking it up in the hash

--

20 min
With a partner, implement the Bank class
