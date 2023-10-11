let product = [
  {
    name: "SWEATSHIRT WITH CONTRAST EMBROIDERY",
    img: "./Images/sweatshirt.jpg",
    id: 1,
    price: "148 GEL",
  },
  {
    name: "straight fit jeans",
    img: "./Images/jeans2.jpg",
    id: 2,
    price: "149 GEL",
  },
  {
    name: "straight fit jeans",
    img: "./Images/jeans3.jpg",
    id: 3,
    price: "149 GEL",
  },
  {
    name: "Astraight fit jeans",
    img: "./Images/jeans4.jpg",
    id: 4,
    price: "149 GEL",
  },
  {
    name: "SLIM fit jeans",
    img: "./Images/jeans.jpg",
    id: 5,
    price: "149 GEL",
  },
  {
    name: "STRAIGHT FIT CARGO JEANS",
    img: "./Images/trousers.jpg",
    id: 5,
    price: "169 GEL",
  },
  {
    name: "shirt",
    img: "./Images/tshirt.jpg",
    id: 6,
    price: "159 GEL",
  },
  {
    name: "LEATHER TASSEL LOAFERS",
    img: "./Images/leather.jpg",
    id: 7,
    price: "199 GEL",
  },
  {
    name: "PACK OF 3 RIBBED SOCKS",
    img: "./Images/socks.jpg",
    id: 8,
    price: "49 GEL",
  },
  {
    name: "3-PACK OF MATCHING SOCKS",
    img: "./Images/socks2.jpg",
    id: 9,
    price: "49 GEL",
  },
  {
    name: "belt",
    img: "./Images/belt.jpg",
    id: 10,
    price: "100 GEL",
  },

  {
    name: "SOFT XL CROSSBODY BAG",
    img: "./Images/bag.jpg",
    id: 11,
    price: "99 GEL",
  },
  {
    name: "SHORT SLEEVE STRETCH SHIRT",
    img: "./Images/shirt2.jpg",
    id: 12,
    price: "149 GEL",
  },
  {
    name: "JACQUARD SHIRT",
    img: "./Images/textured.jpg",
    id: 13,
    price: "159 GEL",
  },
  {
    name: "CHAIN WITH GEOMETRIC PENDANT",
    img: "./Images/pendant.jpg",
    id: 14,
    price: "89 GEL",
  },
  {
    name: "CONTRAST KNIT POLO SHIRT",
    img: "./Images/knit polo.jpg",
    id: 15,
    price: "149 GEL",
  },
  {
    name: "CROCHET KNIT SHIRT",
    img: "./Images/knitshirt.jpg",
    id: 16,
    price: "159 GEL",
  },
];

// function id() {
//   product = product.filter((element) => {
//     return element.id == 1, 2, 3;
//   });
// }

// id();

function renderProducts() {
  const productContainer = document.getElementById("product");

  product.forEach((element) => {
    const card = `
      
        <div class="image">
          <div class = "some">
            <img class= "main-images" src="${element.img}" alt="${element.name}">
            <div class="text">
                <span class="card-title">${element.name}</span>
                <span class="card-title">${element.price}</span>
                <div data-id="${element.id}" class="save-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
              </svg></div>
              </div>
         </div>
          
        </div>
    `;

    productContainer.innerHTML += card;
  });

  // Add a click event listener to the "Save" buttons
  document.querySelectorAll(".save-button").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = parseInt(this.getAttribute("data-id"), 16);
      addToFavorites(productId);
    });
  });
}

// Call the function to render products
renderProducts();

// Get a reference to the toggle button and the menu div
const toggleMenuButton = document.getElementById("toggleMenuButton");
const hamburgerDiv = document.querySelector(".hamburger-div");
const body = document.body;

// Add a click event listener to the toggle button
toggleMenuButton.addEventListener("click", function () {
  // Check if the menu is currently hidden
  const isHidden = hamburgerDiv.classList.contains("hidden");

  // Toggle the visibility of the menu div based on its current state
  if (isHidden) {
    // If it's hidden, show it
    hamburgerDiv.classList.remove("hidden");

    toggleMenuButton.innerHTML = "&#10006;";
  } else {
    // If it's visible, hide it
    hamburgerDiv.classList.add("hidden");
    toggleMenuButton.innerHTML = "&#9776;";
  }
  if (window.innerWidth <= 768) {
    hamburgerDiv.classList.add("none");
    toggleMenuButton.innerHTML = "&#9776;";
  }

  if (window.innerWidth <= 768) {
    document.getElementById("mySidepanel").style.width = "100%";
    document.getElementById("mySidepanel").style.height = "100%";
  }
});

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
