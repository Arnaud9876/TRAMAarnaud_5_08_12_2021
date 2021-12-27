/**--mettre tous les canaps--**/

const containerCanape = document.getElementById("items");

const index = "http://localhost:3000/api/products/";
fetch(index)
  .then((response) => response.json())
  .then(function (data) {
    let resultats = data;
    console.log(resultats.length);
    for (let i = 0; i < resultats.length; i++) {
      constructElement(resultats[i]);
      for (let j = 0; j < resultats[i].colors.length; j++) {
        console.log(resultats[i].colors[j]);
      }
    }
  })
  .catch(function (error) {
    console.log(error);
  });

function constructElement(resultats) {
  let productLink = document.createElement("a");
  productLink.setAttribute("href", "./product.html?id=" + resultats._id);
  containerCanape.appendChild(productLink);
  let article = document.createElement("article");
  article.innerHTML =
    "<img src=" +
    resultats.imageUrl +
    ">" +
    '<h3 class="productName">' +
    resultats.name +
    "</h3>" +
    '<p class="productDescription">' +
    resultats.description +
    "</p>";
  productLink.appendChild(article);
}
