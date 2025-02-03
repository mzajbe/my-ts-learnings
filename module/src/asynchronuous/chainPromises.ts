// https://www.freecodecamp.org/news/learn-async-programming-in-typescript-promises-asyncawait-and-callbacks/

// Example on how chaining promises works
// First promise

const promiseOne = new Promise<string>((resolve, reject) => {
  const functionOne: string = "This is first promise function";

  setTimeout(() => {
    resolve(functionOne);
  }, 1000);
});

//second promise

const promiseTwo = (data: string) => {
  const functionTwo: string = "This is the second promise";
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${data}  '+' ${functionTwo}`);
    }, 1000);
  });
};

//chaining first and second promises together

promiseOne
  .then(promiseTwo)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
