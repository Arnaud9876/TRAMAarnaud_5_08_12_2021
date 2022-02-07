/*--le panier--*/
var section = document.getElementById("cart__items");

var panier = getBasket();
const urlApi = "http://localhost:3000/api/products/";
panier.forEach((produit) => {
  fetch(urlApi + produit.id)
    .then((response) => response.json())
    .then(function (data) {
      let resultats = data;
      /*-- console.log(resultats);--*/
      /*--l'article cart__items--*/
      let articleCartItem = document.createElement("article");
      articleCartItem.setAttribute("class", "cart__item");
      articleCartItem.setAttribute("data-id", produit.id);
      articleCartItem.setAttribute("data-color", produit.color);
      section.appendChild(articleCartItem);
      /*--la div cart__item__img et son img--*/
      let divCartImg = document.createElement("div");
      divCartImg.setAttribute("class", "cart__item__img");
      let cartImg = document.createElement("img");
      cartImg.setAttribute("src", resultats.imageUrl);
      cartImg.setAttribute("alt", resultats.altTxt);
      articleCartItem.appendChild(divCartImg);
      divCartImg.appendChild(cartImg);
      /*--la div cart__item__content--*/
      let divCartContent = document.createElement("div");
      divCartContent.setAttribute("class", "cart__item__content");
      articleCartItem.appendChild(divCartContent);
      /*--la div cart__item__content__description--*/
      let divCartDescription = document.createElement("div");
      divCartDescription.setAttribute(
        "class",
        "cart__item__content__description"
      );
      divCartContent.appendChild(divCartDescription);
      /*--le produit--*/
      let cartName = document.createElement("h2");
      cartName.textContent = produit.name;
      let cartColor = document.createElement("p");
      cartColor.textContent = produit.colors;
      let cartPrice = document.createElement("p");
      cartPrice.textContent = resultats.price + " €";
      divCartDescription.appendChild(cartName);
      divCartDescription.appendChild(cartColor);
      divCartDescription.appendChild(cartPrice);
      /*--la div cart__item__content__settings pour modifier--*/
      let divSettings = document.createElement("div");
      divSettings.setAttribute("class", "cart__item__content__settings");
      let divSettingsQuantity = document.createElement("div");
      divSettingsQuantity.setAttribute(
        "class",
        "cart__item__content__settings__quantity"
      );
      let divSettingsQuantityP = document.createElement("p");
      divSettingsQuantityP.textContent = "Qté : ";
      let divSettingsQuantityInput = document.createElement("input");
      divSettingsQuantityInput.setAttribute("class", "itemQuantity");
      divSettingsQuantityInput.setAttribute("type", "number");
      divSettingsQuantityInput.setAttribute("name", "itemQuantity");
      divSettingsQuantityInput.setAttribute("min", "1");
      divSettingsQuantityInput.setAttribute("max", "100");
      divSettingsQuantityInput.setAttribute("value", produit.quantity);
      divCartContent.appendChild(divSettings);
      divSettings.appendChild(divSettingsQuantity);
      divSettingsQuantity.appendChild(divSettingsQuantityP);
      divSettingsQuantity.appendChild(divSettingsQuantityInput);
      /*--la div pour supprimer un element--*/
      let divDelete = document.createElement("div");
      divDelete.setAttribute("class", "cart__item__content__settings__delete");
      let divDeleteP = document.createElement("p");
      divDeleteP.setAttribute("class", "deleteItem");
      divDeleteP.textContent = "Supprimer";
      divDelete.appendChild(divDeleteP);
      divSettings.appendChild(divDelete);
    });
});

/*--le calcul du panier--*/

async function gettotalPrice() {
  var priceTotal = 0;
  var totalQuantity = 0;
  for (var m = 0; m < panier.length; m++) {
    await fetch(urlApi + panier[m].id)
      .then((response) => response.json())
      .then(function (data) {
        let resultats = data;
        console.log(panier[m].quantity);
        let priceProduct =
          parseInt(resultats.price) * parseInt(panier[m].quantity);

        /*--variable du prix total du panier--*/
        priceTotal += priceProduct;
        let productTotalPrice = document.getElementById("totalPrice");
        productTotalPrice.innerHTML = priceTotal;

        /*--variable de la quantité total du panier--*/
        totalQuantity += panier[m].quantity;
        let productTotalQuantity = document.getElementById("totalQuantity");
        productTotalQuantity.innerHTML = totalQuantity;

        console.log(panier);
        console.log(totalQuantity);
        console.log(priceTotal);
      });
  }
}
gettotalPrice();

/**envoyer le bon de commande (post) **/
