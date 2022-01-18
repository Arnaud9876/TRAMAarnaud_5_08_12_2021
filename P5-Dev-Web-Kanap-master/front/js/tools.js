/*-- Mes fonctions--*/

/*--fonction si le panier est vide crée un tableau quand meme
sinon traite les données--*/
function getBasket() {
  let storage = window.localStorage;
  var panier = storage.getItem("cartInLocalStorage");

  if (panier == null) {
    return (panier = Array());
  } else {
    return (panier = JSON.parse(panier));
  }
}
