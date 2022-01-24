/*--le panier--*/
var section = document.getElementById("cart__items");

var panier = getBasket();
const urlApi = "http://localhost:3000/api/products/";
panier.forEach((produit) => {
  fetch(urlApi + produit.id)
    .then((response) => response.json())
    .then(function (data) {
      let resultats = data;
      console.log(resultats);
      /*--l'article cart__item--*/
      let articleCartItem = document.createElement("article");
      articleCartItem.setAttribute("class", "cart__item");
      articleCartItem.setAttribute("data-id", produit.id);
      articleCartItem.setAttribute("data-color", produit.color);
      section.appendChild(articleCartItem);
      /*--la div cart__item__img et son img--*/
      let divCartImg = document.createElement("div");
      divCartImg.setAttribute("class", "cart__item__img");
      let cartImg = document.createElement("img");
      cartImg.setAttribute("img", resultats.img);
      cartImg.setAttribute("alt", resultats.alt);
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
      cartName.setAttribute("data-name", produit.name);
      let cartColor = document.createElement("p");
      cartColor.setAttribute("data-color", produit.color);
      let cartPrice = document.createElement("p");
      cartPrice.setAttribute("data-price", produit.price);
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
      divSettingsQuantityP.setAttribute("input", "itemQuantity");
      divCartContent.appendChild(divSettings);
      divSettings.appendChild(divSettingsQuantity);
      divSettingsQuantity.appendChild(divSettingsQuantityP);

      /*--la div pour supprimer un element--*/
      let divDelete = document.createElement("div");
      divDelete.setAttribute("class", "cart__item__content__settings__delete");
      let divPDelete = document.createElement("p");
      divPDelete.setAttribute("class", "deleteItem");

      console.log(section);
    });
});

/**envoyer le bon de commande (post) **/
