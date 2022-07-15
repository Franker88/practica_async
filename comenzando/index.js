/* CallBacks para llamar a una función dentro de otra */
/*
const saludo = (nombre) => {
  console.log("Bienvenido " + nombre);
};

const despedida = (nombre) => {
  console.log("Hasta luego " + nombre);
};

const accion = (nombre, ejecucion) => {
  return ejecucion(nombre);
};

accion("Carlos", despedida);
*/
/* XML */

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.escuelajs.com/api/v1";

function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();

  xhttp.open("GET", urlApi, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readystate === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("Error desconocido " + urlApi);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

fetchData(`${API}/products`, function (error1, data1) {
  if (error1) return console.error(error1);
  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
    if (error2) return console.error(error2);
    fetchData(
      `${API}/categories/${data2?.category?.id}`,
      function (error3, data3) {
        if (error3) return console.error(error3);
        console.log(data1[0]);
        console.log(data2.title);
        console.log(data3.name);
      }
    );
  });
});
