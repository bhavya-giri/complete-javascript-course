// const markWeight = 78,
//   johnWeight = 92,
//   markHeight = 1.69,
//   johnHeight = 1.95,
//   markBmi = markWeight / markHeight ** 2,
//   johnBmi = johnWeight / johnHeight ** 2,
//   markHigherBmi = markBmi > johnBmi;

// if (markHigherBmi) {
//   console.log(`Marks BMI is higher ${markBmi} than John Bmi ${johnBmi}`);
// } else {
//   console.log(`John BMI is higher ${johnBmi} than John Bmi ${markBmi}`);
// }

// const dolphins = (97 + 108 + 89) / 3;
// const koalas = (88 + 91 + 110) / 3;

// if (dolphins === koalas) console.log("draw");
// else if (dolphins > koalas && dolphins >= 100) console.log("dolphins wins");
// else console.log("koalas wins");

const bill1 = 275,
  bill2 = 40,
  bill3 = 430,
  tip1 = bill1 > 50 && bill1 < 300 ? bill1 * 0.15 : bill1 * 0.2,
  tip2 = bill2 > 50 && bill2 < 300 ? bill2 * 0.15 : bill2 * 0.2,
  tip3 = bill3 > 50 && bill3 < 300 ? bill3 * 0.15 : bill3 * 0.2;
console.log(`bill 1 with tip is ${bill1 + tip1} `);
console.log(`bill 2 with tip is ${bill2 + tip2} `);
console.log(`bill 3 with tip is ${bill3 + tip3} `);
