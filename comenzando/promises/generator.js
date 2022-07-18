function* iteracion(array) {
  for (let value of array) {
    yield value;
  }
}

const array1 = ["Manuel", "Anuel", "Nuel", "Horacio", "Mario", "Vicente"];
const it = iteracion(array1);

for (let i = 0; i <= array1.length; i++) {
  /* if (i < array1.length) {
    console.log(it.next().value);
  } else {
    console.log(`Done: ${it.next().done} - Finalizado`);
  } */

  let data1 = it.next();
  if (data1.value != undefined) {
    console.log(data1.value);
  } else {
    console.log(`Done: ${it.next().done} - Finalizado`);
  }
}
