function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.balance = balance;
  this.accountNumber = Date.now();

  this.deposite = function (amount) {
    this.balance = this.balance + amount;
  };

  this.withdraw = (amount) => {
    this.balance = this.balance - amount;
  };
}

// const rakesh = new BankAccount("Rakesh");
// const hitesh = new BankAccount("Hitesh", 5000);

// rakesh.deposite(200);
// rakesh.withdraw(150);

// console.log(rakesh, hitesh);

// ===================================================

const accounts = [];
const addAccount = document.querySelector("#addAccount");
const customerName = document.querySelector("#customerName");
const customerbalance = document.querySelector("#customerbalance");

addAccount.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(customerName.value, customerbalance.value);

  const account = new BankAccount(customerName.value, +customerbalance.value);
  accounts.push(account);
  console.log("accounts", accounts);
});

//==============================================================

const depositeForm = document.querySelector("#depositeForm");
const accountNumber = document.querySelector("#accountNumber");
const amount = document.querySelector("#amount");

depositeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const account = accounts.find(
    (item) => item.accountNumber === +accountNumber.value
  );
  console.log("heyyy", account);

  account.deposite(+amount.value);

  console.log(accounts);
});
