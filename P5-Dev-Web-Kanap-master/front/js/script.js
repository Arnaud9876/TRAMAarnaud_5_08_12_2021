/**--mettre tous les canaps--**/

const index = "http://localhost:3000/api/products/";
fetch(index)
  .then((response) => response.json())
  .then(function (data) {
    let resultats = data;
    console.log(resultats.length);
    for (let i = 0; i < resultats.length; i++) {
      for (let j = 0; j < resultats[i].colors.length; j++) {
        console.log(resultats[i].colors[j]);
      }
    }
  })
  .catch(function (error) {
    console.log(error);
  });
