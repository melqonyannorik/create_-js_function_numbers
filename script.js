//3. Տրված են a, b և c ամբողջ թվերը: Արտածել YES, եթե

//ա) երեքն էլ դրական են,

// function result(a, b, c) {
//   if (a >= 0 && b >= 0 && c >= 0) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }
// result(0, 7, 5);

// բ) դրանցից գոնե մեկը դրական է,

// function result(a, b, c) {
//   if (a >= 0 || b >= 0 || c >= 0) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }
// result(7, -5, -7);

//գ) դրանցից ճիշտ մեկը դրական է,

// function result(a, b, c) {
//   if (
//     (a >= 0 && b < 0 && c < 0) ||
//     (b >= 0 && a < 0 && c < 0) ||
//     (c >= 0 && b < 0 && a < 0)
//   ) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }
// result(-5, -2, 5);

// դ) դրանցից ճիշտ երկուսը դրական են,

// function result(a, b, c) {
//   if (
//     (a >= 0 && b >= 0 && c < 0) ||
//     (b >= 0 && c >= 0 && a < 0) ||
//     (c >= 0 && a >= 0 && b < 0)
//   ) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }
// result(2, -5, 9);

// ե) դրանցից գոնե երկուսն իրար հավասար են,

// function result(a, b, c) {
//   if (
//     (a === b && a !== c) ||
//     (a === c && b !== c) ||
//     (c === a && c !== b) ||
//     (b == c && c !== a)
//   ) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }
// result(2, 1, 1);

//զ) դրանցից գոնե երկուսն իրարից միայն նշանով են տարբերվում:

// function result(a, b, c) {
//   if (a === b * -1 || a === c * -1 || b === c * -1) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }
// result(1, 2, -2);

// 4. Տրված է a դրական ամբողջ թիվը: Արտածել YES, եթե այն

// ա) երկնիշ և զույգ թիվ է,

// function result(a) {
//   if (a % 2 == 0 && a <= 99 && a > 9) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }
// result(56);

//բ) եռանիշ և կենտ թիվ է:

// function result(a) {
//   if (a % 2 !== 0 && a > 99 && a <= 999) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }
//  result(227);
