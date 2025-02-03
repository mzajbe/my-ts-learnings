function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(3, 2);

const addArrow = (num1: number, num2: number): number => num1 + num2;
const addArrowWithDefaultNumber = (num1: number, num2: number = 10): number =>
  num1 + num2;

addArrow(4, 5);
addArrowWithDefaultNumber(1);

//object --> function --> method

const user = {
  name: "zajbe",
  balance: 0,
  addBalance(balance: string) {
    return `My new balance is : ${this.balance + balance}`; //we have to use this when we want to access any property in object.
  },
};

//in js 'this' not work in arrow function. it works only in normal function.
//we will use normal function in object(we will call it method)

const arr: number[] = [1, 2, 3];

const newArray: number[] = arr.map(
  (element: number): number => element * element
);
