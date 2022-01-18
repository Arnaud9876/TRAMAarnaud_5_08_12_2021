/**afficher canape par son ID **/
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
    printProduct(resultats);

    /*--ajout du produit dans le localStorage--*/
    document.getElementById("addToCart").addEventListener("click", function () {
      let storage = window.localStorage;

      /*--variable d'un produit--*/
      let produit = {
        id: resultats._id,
        name: resultats.name,
        colors: document.getElementById("colors").value,
        quantity: parseInt(document.getElementById("quantity").value),
      };

      /*--variable qui rajoute des unités dans le panier si l'id du produit est deja present--*/
      var panier = getBasket();
      let foundProduct = panier.find(
        (p) => p.id == produit.id && p.colors == produit.colors
      );
      console.log(foundProduct);
      if (foundProduct != undefined) {
        foundProduct.quantity =
          parseInt(foundProduct.quantity) + parseInt(produit.quantity);
        console.log("produit deja present dans le panier");
      } else {
        panier.push(produit);

        console.log("produits non present dans le panier");
      }
      console.log(panier);
      /*--variable qui enleve si besoin--*/

      storage.setItem("cartInLocalStorage", JSON.stringify(panier));
    });
  });

/*--les infos du produit--*/
function printProduct(resultats) {
  let image = document.createElement("img");
  image.src = resultats.imageUrl;
  image.alt = resultats.altTxt;
  document.querySelector(".item__img").appendChild(image);

  let title = document.getElementById("title");
  let price = document.getElementById("price");
  title.textContent = resultats.name;
  price.textContent = resultats.price;

  let description = document.getElementById("description");
  description.textContent = resultats.description;

  /*--les couleurs en option--*/
  for (let i = 0; i < resultats.colors.length; i++) {
    let option = document.createElement("option");
    option.value = resultats.colors[i];
    option.textContent = resultats.colors[i];
    document.getElementById("colors").appendChild(option);
  }
}
