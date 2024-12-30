function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.balance = balance;
  this.accountNumber = Date.now();
}

BankAccount.prototype.deposit = function (amount) {
  this.balance = this.balance + amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance = this.balance - amount;
};

function SavingAccount(customerName, balance = 0) {
  BankAccount.call(this, customerName, balance);
  this.withdrawLimit = 10000;
}

SavingAccount.prototype = Object.create(BankAccount.prototype);

SavingAccount.prototype.takingLoan = function (amount) {
  console.log(`taking personal loan of ${amount}`);
};

const aadesh = new SavingAccount("aadesh", 1000);

console.log(aadesh);
aadesh.deposit(500);
console.log(aadesh);
aadesh.withdraw(200);
console.log(aadesh);
aadesh.takingLoan(40000);
