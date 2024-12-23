const productlist = document.getElementsByClassName("product");

//Creates a function to filter products with the class "fav".
function filter() {
  const filtervalue = document.getElementById("product-filter").value;
  console.log(filtervalue);
  //Configure the filter to show only fav products or all products.
  for (const pr of productlist) {
    //If the filter is in all it shows all products with flex display.
    if (filtervalue === "all") {
      pr.style.display = "flex";
    } else if (filtervalue === "fav") {
      //If the product doesn't contain the class "fav" it isn't shown.
      if (!pr.classList.contains(filtervalue)) {
        pr.style.display = "none";
      }
    }
  }
}

function typefilter() {
  const filtervalue = document.getElementById("type-filter").value;
  console.log(filtervalue);
  //Configure the filter to show the products you want.
  for (const pr of productlist) {
    //If the filter is in all it shows all products with flex display.
    if (filtervalue === "all") {
      pr.style.display = "flex";
    } else if (filtervalue === "earrings") {
      //If the product contains the class "earrings" it's shown.
      if (!pr.classList.contains(filtervalue)) {
        pr.style.display = "none";
      }
    }
  }
}

//Gets all the buttons that are in the products like a list of buttons.
const favButtons = document.getElementsByTagName("button");

//Goes through all the buttons.
for (const favButton of favButtons) {
  //Puts a function onclick in the buttons.
  favButton.onclick = (event) => {
    //"Event.target" shows the element which has been clicked.
    const clickelement = event.target;
    console.log(clickelement);

    /*
  By "clickelement.closest" we get the closest element from above to the 
  clicked element.

  By ".toggle" we put in the product (in this case) the class "fav".
*/
    const productfather = clickelement.closest(".product");
    productfather.classList.toggle("fav");

    /*
  If the button has been clicked, the product has the class "fav", then 
  the button has a ❤️, if not (or it's clicked again), a 🤍.
*/
    if (productfather.classList.contains("fav")) {
      favButton.textContent = "❤️";
    } else {
      favButton.textContent = "🤍";
    }
  };
}
