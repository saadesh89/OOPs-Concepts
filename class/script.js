class BankAccount {
  customerName;
  accountNumber;
  balance;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Date.now();
  }

  deposit(amount) {
    this.balance = this.balance + amount;
  }

  withdraw(amount) {
    this.balance = this.balance - amount;
  }
}

const aadesh = new BankAccount("Aadesh", 1000);
console.log("add", aadesh);
aadesh.deposit(143);
console.log("deposit", aadesh);
aadesh.withdraw(43);
console.log("withdraw", aadesh);
