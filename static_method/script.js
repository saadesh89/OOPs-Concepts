class User {
  constructor(name, age, income) {
    this.name = name;
    this.age = age;
    this.income = income;
  }

  static compareByAge(user1, user2) {
    return user1.age - user2.age;
  }

  static compairByIncome(user1, user2) {
    return user1.income - user2.income;
  }

  static {
    console.log("this is initialize method");
  }

  static cache() {
    console.log("this cache method called");
  }
}

const user1 = new User("aadesh", 25, 2000);
const user2 = new User("sanket", 23, 3421);
const user3 = new User("hitesh", 27, 2038);
// console.log([user1, user2, user3]);

// const users = [user1, user2, user3];

// users.sort(User.compareByAge);
// console.log(users);

// users.sort(User.compairByIncome);
// console.log(users);

User.cache();
User.cache();
// when we call static methods then the initialize static method called only one time
