const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Logrado Async!!"), 2000)
      : reject(new Error("Error!"));
  });
};

const anotherAsync = async () => {
  const waitingFn = await fnAsync();

  console.log(waitingFn);

  console.log("Hello!");
};

console.log("Before");
anotherAsync();
console.log("After");
