/**afficher canap par son ID **/
let baseUrl = window.location.href;
console.log(baseUrl);
let id = baseUrl.substring(baseUrl.lastIndexOf("=") + 1);
console.log(id);
const productId = "http://localhost:3000/api/products/" + id;
console.log(productId);
fetch(productId)
  .then((response) => response.json())
  .then(function (data) {
    let resultats = data;
    console.log(resultats.name);
  });
