function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.balance = balance;
  this.accountNumber = Date.now();

  //   this.deposit = (amount) => {
  //     this.balance = this.balance + amount;
  //   };

  //   this.withdraw = (amount) => {
  //     this.balance = this.balance - amount;
  //   };
}

BankAccount.prototype.deposit = function (amount) {
  this.balance = this.balance + amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance = this.balance - amount;
};

// const rakesh = new BankAccount("Rakesh");
// console.log(rakesh);
// rakesh.deposit(2020);
// rakesh.withdraw(20);
// console.log(rakesh);

// ======================================================================

const accounts = [];

const addAccount = document.querySelector("#addAccount");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");

addAccount.addEventListener("submit", (e) => {
  e.preventDefault();

  const account = new BankAccount(customerName.value, balance.value);
  accounts.push(account);
  console.log(accounts);
});

// ==================================================================

const depositForm = document.querySelector("#depositForm");
const accountNumber = document.querySelector("#accountNumber");
const withdrawAmount = document.querySelector("#withdrawAmount");

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const account = accounts.find(
    (item) => item.accountNumber === +accountNumber.value
  );

  account.withdraw(+withdrawAmount.value);

  console.log(accounts);
});
