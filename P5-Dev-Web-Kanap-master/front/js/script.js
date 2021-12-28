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

/*--fonction des cartes des elements des canapes--*/

function constructElement(resultats) {
  let productLink = document.createElement("a");
  productLink.setAttribute("href", "./product.html?id=" + resultats._id);
  containerCanape.appendChild(productLink);
  let article = document.createElement("article");
  let img = document.createElement("img");
  img.src = resultats.imageUrl;
  img.alt = resultats.altTxt;
  article.appendChild(img);
  let h3 = document.createElement("h3");
  h3.class = "productName";
  h3.textContent = resultats.name;
  article.appendChild(h3);
  let p = document.createElement("p");
  p.class = "productDescription";
  p.textContent = resultats.description;
  article.appendChild(p);
  productLink.appendChild(article);
}
