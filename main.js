document.addEventListener("DOMContentLoaded", function () {
  const photos = document.querySelectorAll(".photo");
  const text = document.querySelector(".log");
  let currentPhoto = 0;
  let isUserScrolling = false;
  let autoScrollPaused = false;
  let autoScrollTimeout;
  let autoScrollInterval = null; // Initialize to null

  // Initially, display the first photo
  photos[currentPhoto].classList.add("active");
  const textContent = document.querySelector(".log");

  function color() {
    const div = document.querySelector("#list");
    if (window.innerWidth <= 992 && currentPhoto === 0) {
      div.classList.add("white");
    } else {
      div.classList.remove("white");
    }
  }
  color();

  function changeTextColor() {
    if ((currentPhoto > 0 && currentPhoto < 3) || currentPhoto > 4) {
      textContent.classList.add("black-text"); // Add a class to change text color
    } else {
      textContent.classList.remove("black-text"); // Remove the class to revert text color
    }
  }

  function changeColor() {
    const div = document.querySelector("#list");
    if (window.innerWidth <= 992 && currentPhoto >= 0 && currentPhoto < 3) {
      div.classList.add("white");
    } else {
      div.classList.remove("white");
    }
  }

  // Function to scroll to the next photo
  function scrollToNextPhoto() {
    if (currentPhoto < photos.length - 1) {
      photos[currentPhoto].classList.remove("active");
      photos[currentPhoto].classList.add("previous");
      currentPhoto++;
      changeTextColor();
      changeColor();
      photos[currentPhoto].classList.remove("previous");
      photos[currentPhoto].classList.add("active");
    }
  }

  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  function startAutoScroll() {
    autoScrollInterval = setInterval(scrollToNextPhoto, 3000);
  }

  startAutoScroll(); // Start auto-scroll initially

  // Function to scroll to the previous photo (if needed)
  function scrollToPreviousPhoto() {
    if (currentPhoto > 0) {
      photos[currentPhoto].classList.remove("active");
      photos[currentPhoto].classList.add("previous");
      currentPhoto--;

      changeTextColor();
      changeColor();
      photos[currentPhoto].classList.remove("previous");
      photos[currentPhoto].classList.add("active");
    }
  }

  // Event listener for mousewheel or touchpad scrolling
  document.addEventListener("wheel", function (event) {
    if (!isUserScrolling) {
      stopAutoScroll(); // Stop auto-scroll only if it's not already stopped
    }
    isUserScrolling = true;
    clearTimeout(autoScrollTimeout);
    autoScrollTimeout = setTimeout(function () {
      isUserScrolling = false;
      startAutoScroll();
    }, 3000); // Resume auto-scroll after 3 seconds of inactivity

    if (event.deltaY > 0) {
      scrollToNextPhoto();
    } else {
      scrollToPreviousPhoto();
    }
  });

  // Event listener for arrow keys
  document.addEventListener("keydown", function (event) {
    if (!isUserScrolling) {
      stopAutoScroll(); // Stop auto-scroll only if it's not already stopped
    }
    isUserScrolling = true;
    clearTimeout(autoScrollTimeout);
    autoScrollTimeout = setTimeout(function () {
      isUserScrolling = false;
      startAutoScroll();
    }, 3000); // Resume auto-scroll after 3 seconds of inactivity

    if (event.key === "ArrowDown") {
      scrollToNextPhoto();
    } else if (event.key === "ArrowUp") {
      scrollToPreviousPhoto();
    }
  });
});

// ... (The rest of your existing code)

// Event listener for arrow keys
document.addEventListener("keydown", function (event) {
  if (!isUserScrolling) {
    stopAutoScroll(); // Stop auto-scroll only if it's not already stopped
  }
  isUserScrolling = true;
  clearTimeout(autoScrollTimeout);
  autoScrollTimeout = setTimeout(function () {
    isUserScrolling = false;
    startAutoScroll();
  }, 3000); // Resume auto-scroll after 3 seconds of inactivity

  if (event.key === "ArrowDown") {
    scrollToNextPhoto();
  } else if (event.key === "ArrowUp") {
    scrollToPreviousPhoto();
  }
});

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
    body.classList.add("body-no-scroll");
    toggleMenuButton.innerHTML = "&#10006;";
  } else {
    // If it's visible, hide it
    hamburgerDiv.classList.add("hidden");
    body.classList.remove("body-no-scroll");
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

// Function to retrieve all saved items from local storage
function getAllSavedItems() {
  const savedItems = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("savedItem_")) {
      const savedItem = JSON.parse(localStorage.getItem(key));
      savedItems.push(savedItem);
    }
  }
  return savedItems;
}

// Get all saved items
const savedItems = getAllSavedItems();

// Display the saved items in your favorites list
savedItems.forEach((item) => {
  // Display the item as you need in your favorites list
});
