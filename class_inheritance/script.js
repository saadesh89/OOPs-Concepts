class BankAccount {
  customerName;
  balance;
  accountNumber;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Date.now();
  }

  deposite(amount) {
    this.balance = this.balance + amount;
  }

  withdraw(amount) {
    this.balance = this.balance - amount;
  }
}

class SavingAccount extends BankAccount {
  // to extends from BankAcount use 'extends' keyword
  transactionLimit = 10000;

  constructor(customerName, balance) {
    super(
      customerName,
      balance
    ); /* this keyword will take all values from BankAccount constructor */
  }

  takingLoan(amount) {
    console.log(`taking loan of ${amount}`);
  }
}

const aadesh = new SavingAccount("aadesh", 3000);
aadesh.deposite(3000);
console.log(aadesh);
aadesh.withdraw(5000);
console.log(aadesh);

aadesh.takingLoan(100000);
