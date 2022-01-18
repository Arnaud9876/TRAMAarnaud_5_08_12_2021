/**envoyer le bon de commande (post) **/
var panier = getBasket();
const urlApi = "http://localhost:3000/api/products/";
panier.forEach((produit) => {
  fetch(urlApi + produit.id)
    .then((response) => response.json())
    .then(function (data) {
      let resultats = data;
      console.log(resultats);
    });
});
