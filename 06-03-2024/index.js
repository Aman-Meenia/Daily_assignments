const readline = require("readline");
const { stdin: input, stdout: output } = require("node:process");
class BankAccount {
  constructor(accountNo, accountHolder, balance) {
    this.accountNo = accountNo;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Rs.${amount}  is credited to your account `);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Not sufficient balance");
    } else {
      this.balance -= amount;
      console.log(`Rs. ${amount} withdraw successfully`);
    }
  }
  displayBalance() {
    console.log(`Balance is ${this.balance}`);
  }
}

class SavingAccount extends BankAccount {
  constructor(accountNo, accountHolder, balance, withdrawLimit) {
    super(balance, accountHolder, accountNo);
    this.withdrawLimit = withdrawLimit;
    this.balance = balance;
    this.accountNo = accountNo;
    this.accountHolder = accountHolder;
  }

  addInterest(interestRate) {
    const interest = (interestRate / 100) * this.balance;
    this.balance += interest;
    console.log(` Interest of ${interest} to account ${this.accountNo}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Not sufficient balance");
    } else {
      if (amount > this.withdrawLimit) {
        const penalty = 0.02 * amount;

        if (amount + penalty > this.balance) {
          console.log("Not sufficient balance");
        } else {
          this.balance -= amount;
          this.balance -= penalty;
          console.log(`Rs. ${amount} withdraw successfully`);
        }
      } else {
        this.balance -= amount;
        console.log(`Rs. ${amount} withdraw successfully`);
      }
    }
  }
}

const account1 = new BankAccount(123123, "aman", 10000);
account1.deposit(1000);
account1.withdraw(1212);
account1.displayBalance();
const savingsAccount1 = new SavingAccount(123124, "Trigu", 100000, 10000);
savingsAccount1.displayBalance();
// savingsAccount1.addInterest(10);
savingsAccount1.withdraw(20000);
savingsAccount1.displayBalance();
