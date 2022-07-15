const promise1 = new Promise((resolve, reject) => {
  resolve("Hey!");
});

const cows = 5;

const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the famr`);
  } else {
    reject(`there is no enough cows on farm`);
  }
});

countCows
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The cows was count");
  });
