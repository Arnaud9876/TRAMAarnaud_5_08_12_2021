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
    printProduct(resultats);

    /*--ajout du produit dans le localStorage--*/

    document.getElementById("addToCart").addEventListener("click", function () {
      let storage = window.localStorage;
      if (
        storage.getItem("id") !== null &&
        storage.getItem("colors") !== null
      ) {
        if (
          storage.getItem("id") === resultats._id &&
          storage.getItem("colors") === document.getElementById("colors").value
        ) {
          storage.quantity += document.getElementById("quantity").value;
        } else {
          storage.id = resultats._id;
          storage.name = resultats.name;
          storage.price = resultats.price;
          storage.colors = document.getElementById("colors").value;
          storage.quantity = document.getElementById("quantity").value;
        }
        else{
          
        }
      }

      /*--
      let cart = new Array();
      cart.push(resultats._id);
      cart.push(resultats.name);
      cart.push(resultats.price);
      cart.push(document.getElementById("colors").value);
      cart.push(document.getElementById("quantity").value);
--*/

      alert(storage.getItem("id"));
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
