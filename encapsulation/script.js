// using '#' keyword can convert keyword or function to private so it'll be accessible between class
// private keyword and function can not accessible by its subclass or child class

class BankAccount {
  customerName;
  #balance = 0; // using '#' keyword convert to private property so it'll be not access outside the class if we've to acces then create a methid for it like "set" or "get"
  accountNumber;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.#balance = balance;
    this.accountNumber = Date.now();
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  set balance(amount) {
    //using this method we can set our balance outside the class
    if (isNaN(amount)) {
      throw new Error("amount is not valid");
    }
    this.#balance = amount;
  }

  get balance() {
    return this.#balance;
  }
}

class CurrentAccount extends BankAccount {
  transactionLimit;

  constructor(customerName, balance) {
    super(customerName, balance);
    this.transactionLimit = 50000;
  }

  #calculatingInterest() {
    console.log("calculating interest");
  }

  takingBusinessLoan(amount) {
    this.#calculatingInterest();
    console.log(`taking loan of ${amount}`);
  }
}

const aadesh = new CurrentAccount("aadesh", 300);

aadesh.balance = 40000;

console.log(aadesh.balance);

aadesh.takingBusinessLoan(10000000);
console.log(aadesh);
