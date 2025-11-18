// 1
const add = (x, y) => console.log(x + y);
add(5, 9);

// 2

const minus = function (num1, num2) {
  console.log(num1 - num2);
};
minus(8, 3);

// 3

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
};
isEven(6);

// 4

function main(num1, num2, callback) {
  return callback(num1, num2);
}

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(main(5, 7, multiply));

//5

const isPositive = (number) => {
  if (number >= 0) {
    return `${number} დადებითია`;
  } else {
    return "უარყოფითია";
  }
};
console.log(isPositive(50));

// 6

const double = function (num) {
  return num * 2;
};

console.log(double(22));

// 7

function funqcia(num, meorefunqcia) {
  return meorefunqcia(num);
}

function doubleNum(num) {
  return num * 2;
}

console.log(funqcia(9, doubleNum));

// 8

const isDivisibleByFive = (num1) => {
  if (num1 % 5 === 0) {
    console.log("იყოფა ხუთზე");
  } else {
    return `რიცხვის ხუთზე გაყოფისას გვრჩება ნაშთი (${num1 % 5})`;
  }
};

console.log(isDivisibleByFive(29));

// 9

function mtavari(num, gadamowmeba) {
  return gadamowmeba(num);
}

function checkIsEven(num) {
  if (num % 2 === 0) {
    return "ლუწია";
  } else {
    return "კენტია";
  }
}

console.log(mtavari(407, checkIsEven));

// 10

const cube = (num1) => console.log(num1 * num1 * num1);
cube(15);

// 11

function mainFunction(num1, num2, callback) {
  return callback(num1, num2);
}

function multiplyfunction(num1, num2) {
  return num1 * num2;
}

console.log(mainFunction(6, 25, multiplyfunction));

// 12

const ispositivenumber = (num) => {
  if (num >= 0) {
    return `რიცხვი ${num} დადებითია`;
  } else {
    return "უარყოფითია";
  }
};

console.log(ispositivenumber(43));

// 13

const half = function (num) {
  return num / 2;
};

console.log(half(1500));

// 14

function mtavarifunqcia(num1, num2, callback) {
  return callback(num1, num2);
}

function addition(num1, num2) {
  return num1 + num2;
}

console.log(mtavarifunqcia(12, 7, addition));

// 15

const kvadrati = (num) => console.log(num * num);
kvadrati(7);

console.log(
  "%ccode by:  Giorgi!",
  "color: cyan; font-family: 'DM Serif Display', serif;  font-size: 30px; font-weight: 900;"
);
