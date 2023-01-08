// // "use strict";
// // const calcAverage = (a, b, c) => (a + b + c) / 3;
// // function checkWinner(avgDolphins, avgKoalas) {
// //   if (avgDolphins >= avgKoalas * 2) {
// //     console.log(`Dolphines win by(${avgDolphins} vs ${avgKoalas})`);
// //   } else if (avgKoalas >= avgDolphins * 2) {
// //     console.log(`Koalas win by (${avgKoalas} vs ${avgDolphins})`);
// //   } else {
// //     console.log("no one wins");
// //   }
// // }
// // const avgDolphins1 = calcAverage(44, 23, 71);
// // const avgKoalas1 = calcAverage(65, 54, 49);
// // const avgDolphins2 = calcAverage(85, 54, 41);
// // const avgKoalas2 = calcAverage(23, 34, 27);

// // checkWinner(avgDolphins1, avgKoalas1);
// // checkWinner(avgDolphins2, avgKoalas2);
// const calTips = (bill) => {
//   if (bill > 50 && bill < 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };
// const bills = [125, 555, 44];
// const tips = [calTips(bills[0]), calTips(bills[1]), calTips(bills[2])];
// console.log(tips);
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);
// const jonas = {
//   name: "jonas",
//   hasDriver: false,
//   year: 1991,
//   friends: ["micheal", "jim", "dwight"],
//   msg: function () {
//     this.age = 2023 - this.year;
//     this.driverl = this.hasDriver ? "a driver lisense" : "no driver lisense";
//     return `${this.name} is ${this.age} years old and has ${this.driverl}`;
//   },
// };
// console.log(jonas.msg());
const Mark = {
  name: "Mark",
  weight: 78,
  height: 1.69,
  calBmi: function () {
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
  },
};
const John = {
  name: "John",
  weight: 92,
  height: 1.95,
  calBmi: function () {
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
  },
};
if (Mark.calBmi() > John.calBmi()) {
  console.log(
    `${Mark.name} (${Mark.bmi})  has higher BMI than ${John.name}(${John.bmi})`
  );
} else {
  console.log(
    `${John.name} (${John.bmi})  has higher BMI than ${Mark.name}(${Mark.bmi})`
  );
}
