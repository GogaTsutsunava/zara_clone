document.addEventListener("DOMContentLoaded", function () {
  const photos = document.querySelectorAll(".photo");
  const text = document.querySelector(".log");
  let currentPhoto = 0;
  let isUserScrolling = false;
  let autoScrollPaused = false;
  let autoScrollTimeout;
  let touchStartY = null; // Declare touchStartY in a higher scope

// Function to start or stop auto-scroll
function updateAutoScroll() {
  if (window.innerWidth > 992 && !autoScrollPaused) {
    startAutoScroll();
  } else {
    stopAutoScroll();
  }
}

// Event listener for window resize
window.addEventListener("resize", function () {
  updateAutoScroll(); // Update auto-scroll when the window is resized
});


// Call the function to set the initial auto-scroll state

// Event listener for touchstart (initial touch position)
document.addEventListener("touchstart", function (event) {
  touchStartY = event.touches[0].clientY;
});

// Event listener for touchend (detect swipe)
document.addEventListener("touchend", function (event) {
  if (touchStartY !== null) {
    const touchEndY = event.changedTouches[0].clientY;
    const touchYDiff = touchEndY - touchStartY;

    if (touchYDiff > 0) {
      // Swipe down, go to the previous photo
      scrollToPreviousPhoto();
    } else if (touchYDiff < 0) {
      // Swipe up, go to the next photo
      scrollToNextPhoto();
    }

    touchStartY = null; // Reset touchStartY
  }
});

  // Event listener for touchstart (initial touch position)
document.addEventListener("touchstart", function (event) {
  touchStartY = event.touches[0].clientY;
});

// Event listener for touchend (detect swipe)
document.addEventListener("touchend", function (event) {
  if (touchStartY !== null) {
      const touchEndY = event.changedTouches[0].clientY;
      const touchYDiff = touchEndY - touchStartY;

      if (touchYDiff > 0) {
          // Swipe down, go to the next photo
          scrollToNextPhoto();
      } else if (touchYDiff < 0) {
          // Swipe up, go to the previous photo
          scrollToPreviousPhoto();
      }

      touchStartY = null; // Reset touchStartY
  }
});


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
});

  // Event listener for arrow keys
  document.addEventListener("keydown", function (event) {
    if (!isUserScrolling) {
      startAutoScroll(); // Stop auto-scroll only if it's not already stopped
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


// ... (The rest of your existing code)

// Event listener for arrow keys
document.addEventListener("keydown", function (event) {
  if (!isUserScrolling) {
    startAutoScroll(); // Stop auto-scroll only if it's not already stopped
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
