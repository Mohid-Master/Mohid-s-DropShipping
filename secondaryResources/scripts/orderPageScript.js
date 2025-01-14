// -----> Basic Funtions <-----
function randomColor() {
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  return { r, g, b };
}
function toRad(deg) {
  return deg * (Math.PI / 180.0);
}
function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function easeOutSine(x) {
  return Math.sin((x * Math.PI) / 2);
}
// get percent between 2 number
function getPercent(input, min, max) {
  return ((input - min) * 100) / (max - min) / 100;
}
calculateDiscount = (discountObtained) => {
  document.querySelectorAll(".obtainedDiscount")[0].innerHTML =
    discountObtained + "%";
  document.querySelectorAll(".obtainedDiscount")[1].innerHTML =
    discountObtained + "%";
  price = selectedProduct.priceWithoutDiscount;
  obtainedDiscountPercentage = discountObtained;
  let discountAmount = (obtainedDiscountPercentage / 100) * price;
  let finalPrice = Math.floor(price - discountAmount);
  // finalPrice = Math.floor(price - (obtainedDiscount / price * 100));

  if (speed < 0.01)
    document.querySelector(".finalPrice").innerText = finalPrice;
};

// -----> Basic Constants & Variables <-----
const discountWheelCanvas = document.getElementById("discountWheel");
const ctx = discountWheelCanvas.getContext("2d");
const width = document.getElementById("discountWheel").width;
const height = document.getElementById("discountWheel").height;
const centerX = width / 2;
const centerY = height / 2;
const radius = width / 2;
let discountObtained = 0;
let items = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let currentDeg = 0;
let step = 360 / items.length;
let colors = [];
let itemDegs = {};
let obtainedDiscount = 0;

// -----> Spinning Wheel Code <-----
for (let i = 0; i < items.length + 1; i++) {
  // colors.push(randomColor())
  i % 2 === 0
    ? colors.push({ r: 30, g: 98, b: 9 })
    : colors.push({ r: 242, g: 242, b: 242 });
}
createWheel = () => draw();
draw();
function draw() {
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, toRad(0), toRad(360));
  ctx.fillStyle = `rgb(${33},${33},${33})`;
  ctx.lineTo(centerX, centerY);
  ctx.fill();
  let startDeg = currentDeg;
  for (let i = 0; i < items.length; i++, startDeg += step) {
    let endDeg = startDeg + step;
    color = colors[i % 2 !== 0 ? 0 : 1];
    let colorStyle = `rgb(${color.r},${color.g},${color.b})`;
    ctx.beginPath();
    rad = toRad(360 / step);
    ctx.arc(centerX, centerY, radius - 2, toRad(startDeg), toRad(endDeg));
    let colorStyle2 = `rgb(${color.r - 30},${color.g - 30},${color.b - 30})`;
    ctx.fillStyle = colorStyle2;
    ctx.lineTo(centerX, centerY);
    ctx.fill();
    ctx.beginPath();
    rad = toRad(360 / step);
    ctx.arc(centerX, centerY, radius - 30, toRad(startDeg), toRad(endDeg));
    ctx.fillStyle = colorStyle;
    ctx.lineTo(centerX, centerY);
    ctx.fill();
    // draw text
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(toRad((startDeg + endDeg) / 2));
    ctx.textAlign = "center";
    color.r > 150 || color.g > 150 || color.b > 150
      ? (ctx.fillStyle = "#000")
      : (ctx.fillStyle = "#fff");
    ctx.font = "bold 24px Lora";
    ctx.fillText(items[i], 130, 10);
    ctx.restore();
    itemDegs[items[i]] = {
      startDeg: startDeg,
      endDeg: endDeg,
    };
    // check winner
    if (
      startDeg % 360 < 360 &&
      startDeg % 360 > 270 &&
      endDeg % 360 > 0 &&
      endDeg % 360 < 90
    ) {
      discountObtained = items[i];
      calculateDiscount(discountObtained);
      //   obtainedDiscount = items[i];
    }
  }
}
let speed = 0;
// let maxRotation = randomRange(360 * 3, 360 * 6);
let maxRotation = 360 * 3 + randomRange(0, 360) * 3 - randomRange(0, 360);
let pause = false;
function animate() {
  if (pause) return;
  speed = easeOutSine(getPercent(currentDeg, maxRotation, 0)) * 20;
  if (speed < 0.01) {
    speed = 0;
    pause = true;
  }
  currentDeg += speed;
  draw();
  window.requestAnimationFrame(animate);
}
function spin() {
  if (speed != 0 || discountObtained != 0) return;
  //   maxRotation = 0;
  currentDeg = 0;
  createWheel();
  draw();
  // maxRotation = (360 * 6) - itemDegs['cat'].endDeg + 10
  itemDegs = {};
  // console.log("max", maxRotation);
  // console.log(itemDegs);
  pause = false;
  window.requestAnimationFrame(animate);
}

// -----> Map & Address Handelling Code <-----
const map = L.map("mapDiv").setView([30.3753, 69.3451], 5); // Default to Pakistan
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

let marker = L.marker([30.3753, 69.3451], { draggable: true }).addTo(map);
let selectedLocation = {};
// Define bounds for Pakistan
const bounds = [
  [23.6345, 60.8728], // Southwest corner
  [37.0841, 77.6536], // Northeast corner
];

// Set max bounds and restrict zoom
map.setMaxBounds(bounds);
map.on("drag", function () {
  map.panInsideBounds(bounds, { animate: false });
});

// Restrict zoom levels
map.setMinZoom(5);
map.setMaxZoom(35);

// Function to locate the user
function locateUser() {
  if (navigator.geolocation) {
    document.getElementById("locateMeBtn").innerText = "Locating...";

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        reverseGeocode(lat, lon);

        // If marker exists, remove it
        if (marker) {
          // map.removeLayer(marker);
        }
        marker.setLatLng([lat, lon]).bindPopup("You are here!").openPopup();

        // Add a marker at the user's location
        // marker = L.marker([lat, lon]).addTo(map)
        //     .bindPopup('You are here!')
        //     .openPopup();
        zoomOnMarker();
        document.getElementById("locateMeBtn").innerText = "Locate Me";
        confirmLocation();
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert("User  denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
          case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
        }
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
// Event listener for the button
document.getElementById("locateMeBtn").addEventListener("click", locateUser);

async function fetchSuggestions() {
  const query = document.getElementById("address").value.trim();
  const suggestionsBox = document.getElementById("suggestions");
  suggestionsBox.style.display = "none";
  suggestionsBox.classList.remove("loading");
  suggestionsBox.innerHTML = "";

  if (query.length < 3) return; // Minimum 3 characters to fetch suggestions

  suggestionsBox.classList.add("loading");
  suggestionsBox.style.display = "block";

  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&countrycodes=pk&q=${query}`
  );
  const data = await response.json();
  suggestionsBox.classList.remove("loading");

  if (data.length > 0) {
    data.forEach((location) => {
      const suggestionItem = document.createElement("li");
      suggestionItem.textContent = location.display_name;
      suggestionItem.onclick = () => selectSuggestion(location);
      suggestionsBox.appendChild(suggestionItem);
    });
  } else {
    suggestionsBox.innerHTML =
      '<li style="text-align: center; color: gray;">No results found</li>';
  }
}

async function selectSuggestion(location) {
  const { lat, lon, display_name } = location;
  marker.setLatLng([lat, lon]);
  map.setView([lat, lon], 14);
  await reverseGeocode(lat, lon);

  document.getElementById("address").value = display_name;
  document.getElementById("suggestions").style.display = "none";
}

async function reverseGeocode(lat, lng) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
  );
  const data = await response.json();

  if (data) {
    selectedLocation = {
      latitude: lat,
      longitude: lng,
      address: data.display_name || "Unknown",
      city:
        data.address.city ||
        data.address.town ||
        data.address.village ||
        "Unknown",
      state: data.address.state || "Unknown",
      postal_code: data.address.postcode || "Unknown",
      country: data.address.country || "Unknown",
    };

    document.getElementById("address").value = selectedLocation.address;
  } else {
    selectedLocation = {};
    document.getElementById("address").value = "Address not found.";
  }
}

function resetMap() {
  map.setView([30.3753, 69.3451], 5);
  marker.setLatLng([30.3753, 69.3451]);
  document.getElementById("address").value = "";
  document.getElementById("suggestions").style.display = "none";
  selectedLocation = {};
  document.getElementById("locationData").textContent = "None";
}

async function confirmLocation() {
  const { lat, lng } = marker.getLatLng();
  if (
    !selectedLocation.latitude ||
    !selectedLocation.longitude ||
    selectedLocation.latitude != lat ||
    selectedLocation.longitude != lng
  ) {
    zoomOnMarker();
    await reverseGeocode(lat, lng);
  }

  if (Object.keys(selectedLocation).length > 0) {
    document.getElementById("locationData").textContent = JSON.stringify(
      selectedLocation,
      null,
      2
    );
  } else {
    alert("Please select a valid location first.");
  }
  return  document.getElementById("locationData").textContent;
}

function zoomOnMarker() {
  const { lat, lng } = marker.getLatLng();
  map.setView([lat, lng], 10); // Zoom in on the marker
}




// -----> Reciept Funtionality  <-----
backgroundImage.height = 600;
backgroundImage.width = 500;
document
  .getElementById("generateReceipt")
  .addEventListener("click", function () {
    validateInputs()
    let name = document.getElementById("name").value;
    // if (name == "") name = "Nahi bataoun ga";
    const address = document.getElementById("address").value;
    const quantity = document.getElementById("quantity").value;
    const amount = document.querySelector(".finalPrice").innerText - 0;
    const additionalRequestsInputValue = document.querySelector("#additionalRequestsInput").value;
    const contactNo = document.getElementById('contactNoInput').value;
    const email = document.getElementById('emailInput').value;
    const currentTime = new Date().toLocaleString();
    const receiptCanvas = document.getElementById("receiptCanvas");
    const ctx = receiptCanvas.getContext("2d");
    receiptCanvas.height = 600;
    ctx.clearRect(0, 0, receiptCanvas.width, receiptCanvas.height);

    // Draw a rectangle behind the text for better visibility
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)"; // Semi-transparent black
    // ctx.fillRect(10 - padding, 210 - padding, textWidth + padding * 2, 30 + padding * 2);
    // ctx.fillRect(0, 0, receiptCanvas.width, receiptCanvas.height);

    // backgroundImage.width = receiptCanvas.width
    // backgroundImage.height = receiptCanvas.height
    // backgroundImage.onload = () => {
    // Draw the background image
    ctx.drawImage(
      backgroundImage,
      0,
      0,
      receiptCanvas.width,
      receiptCanvas.height
    );

    // ctx.drawImage(document.querySelectorAll(".miniProductView")[0],200,200,100,100);

    // Draw additional images after the background is loaded
    // drawAdditionalImages();
    // };
    // ctx.fillStyle = "#fff";
    // ctx.textBaseline = 'top'; // Set text baseline

    let left = 50;
    let top = 200;
    // Center the text horizontally
    ctx.textAlign = "center";

    // Draw the first text
    ctx.font = "bold 10px serif";
    ctx.fillStyle = "rgba(30, 98, 9, 0.6)"; // Adjusted alpha for visibility
    ctx.fillText(
        "Please make sure to keep the receipt safe, it will be useful for delivery",
        receiptCanvas.width / 2, // Centered horizontally
        130
    );
    ctx.fillText(`Order Time: ${currentTime}`, receiptCanvas.width/2, 510);

    // Draw the second text
    ctx.font = "bold 8px Arial";
    ctx.fillStyle = "rgba(30, 98, 9, 1)"; // Full opacity for the next text
    // ctx.fillText(
    //     "Thank you for your purchase!",
    //     receiptCanvas.width / 2, // Centered horizontally
    //     140
    // );
    // ctx.fillStyle = "#333";
    // ctx.fillText("Back Support Belt", 150, 150 );

    function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
      const words = text.split(" ");
      let line = "";

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + " ";
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;

        if (testWidth > maxWidth && n > 0) {
          ctx.fillText(line, x, y);
          line = words[n] + " ";
          y += lineHeight; // Move to the next line
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, x, y); // Draw the last line
    }

    // let address = "1234 Long Address That Might Need To Be Wrapped Because It Is Too Long";
    const maxWidth = receiptCanvas.width - 70; // 10 pixels padding on each side
    const lineHeight = 20; // Adjust line height as needed
    ctx.textAlign = "left";

    ctx.font = "bold 18px lora"; // Set your desired font
    ctx.fillStyle = "black"; // Set your desired text color
    // productName = s
    // "Back Support Belt";
    ctx.fillText(`Name: ${name}`, left, top - 30);
    ctx.fillText(`Product Name: ${selectedProduct.productName}`, left, top);
    // Call the wrapText function
    wrapText(ctx, `Address: ${address}`, left, top + 185, maxWidth, lineHeight);
    wrapText(ctx, `Special Requests: ${additionalRequestsInputValue}`, left, top + 150, maxWidth, lineHeight);
    // Exp
    // ctx.fillText(`Address: ${address}`, left, 210);
    ctx.fillText(`Quantity: ${quantity}`, left, top + 30);
    if(document.getElementById("sizeProductInput")){
      const size = document.getElementById("sizeProductInput").value;
    ctx.fillText(`Size: ${size}`, left, top + 60);
    }else{
    ctx.fillText(`Product Code: ${selectedProduct.productId}`, left, top + 60);
    }
    (quantity==1) ? ctx.fillText(`Amount: PKR ${amount}`, left, top + 90):ctx.fillText(`Amount: PKR ${((amount-0)*(quantity-0))}`, left, top + 90);
    ctx.fillText(`Email: ${email}`, left, top + 120);
    // ctx.fillText(`Quantity: ${quantity}`, left, top + 30);
    
    
    // ctx.font = "10px";
    
    // Add barcode
    // JsBarcode("#barcode", generateBarcode(), { format: "CODE128" });
    // const barcodeImage = new Image();
    // barcodeImage.src = document.getElementById('barcode').toDataURL();
    // barcodeImage.onload = () => ctx.drawImage(barcodeImage, left, 200, 150, 50);

    // Add QR code
    // QRCode.toCanvas(document.createElement('canvas'), `Order Details: Name=${name}, Quantity=${quantity}, Amount=${amount}`, (error, qrCanvas) => {
    //     if (!error) ctx.drawImage(qrCanvas, 200, 200, 150, 150);
    // });
    if (receiptCanvas.height == 0) {
      let progress = 0;
      let id = setInterval(frame, 10);
      function frame() {
        if (progress == 100) {
          clearInterval(id);
        } else {
          progress++;
          //   element.style.width = width + "%";
          receiptCanvas.height = (progress / 100) * 400;
        }
      }
    }
  });

function generateBarcode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// document.getElementById('generateReceipt').addEventListener('click', function() {
//     const name = document.getElementById('name').value;
//     const address = document.getElementById('address').value;
//     const quantity = document.getElementById('quantity').value;
//     const size = document.getElementById('size').value;
//     const amount = document.getElementById('amount').value;
//     const currentTime = new Date().toLocaleString();
//     const receiptCanvas = document.getElementById('receiptCanvas');
//     const ctx = receiptCanvas.getContext('2d');

//     // Clear the canvas
//     ctx.clearRect(0, 0, receiptCanvas.width, receiptCanvas.height);

//     // Draw receipt
//     ctx.fillStyle = '#fff';
//     ctx.fillRect(0, 0, receiptCanvas.width, receiptCanvas.height);
//     ctx.fillStyle = '#4CAF50';
//     ctx.font = '16px Arial';
//     ctx.fillText(`Receipt`, left, 30);
//     ctx.fillText(`Name: ${name}`, left, 60);
//     ctx.fillText(`Address: ${address}`, left, 90);
//     ctx.fillText(`Quantity: ${quantity}`, left, 120);
//     ctx.fillText(`Size: ${size}`, left, 150);
//     ctx.fillText(`Amount: $${amount}`, left, 180);
//     ctx.fillText(`Order Code: ${generateRandomCode()}`, left, 210);
//     ctx.fillText(`Order Time: ${currentTime}`, left, 240);

//     // Generate barcode
//     const barcode = generateBarcode();
//     ctx.fillText(`Barcode: ${barcode}`, left, 270);
// });
let downloaded = false;
function downloadReceiptFunction () {
  const receiptCanvas = document.getElementById("receiptCanvas");
  receiptCanvas.toBlob(function (blob) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Mohid'sDropShippingStoreReciept.png";
    a.click();
  downloaded=true;
});
  }
document
  .getElementById("downloadReceipt")
  .addEventListener("click",downloadReceiptFunction);
    //const link = document.createElement('a');
    // link.download = 'receipt.png';
    // link.href = receiptCanvas.toDataURL('image/png');
    // link.click();

document.getElementById("sendOrder").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const DetailedAddress = document.getElementById("locationData").innerText  ;
  const quantity = document.getElementById("quantity").value;
  let size = false;
  (selectedProduct.productId == '130125BIO') ? size = document.getElementById("size").value:size= false;
  const amount = document.querySelector(".finalPrice").innerText - 0;
  const contactNo = document.getElementById('contactNoInput').value;
  const email = document.getElementById('emailInput').value;
  const additionalRequestsInputValue = document.querySelector("#additionalRequestsInput").value;

  // const orderCode = generateRandomCode();
  const currentTime = new Date().toLocaleString();
  const orderData = `Name: ${name}, Address: ${address}, Detailed Address: ${DetailedAddress},Email: ${email},Contact No: ${contactNo},Product: ${selectedProduct.productName},${size?`Size: ${size}`:selectedProduct.productId}, Quantity: ${quantity}, Amount: ${(amount - 0)*(quantity - 0)},Special Requests: ${additionalRequestsInputValue}, Order Time: ${currentTime}`;
  const encodedData = encodeURIComponent(orderData);
  const whatsappNumber = "923211217548"; // Replace with your WhatsApp number
  if (!downloaded)  downloadReceiptFunction()
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedData}%0A${encodeURIComponent(selectedProduct.productImageLinks[0])}`;
// Message Mohid's DropShipping Store on WhatsApp. https://wa.me/923211217548
// setTimeout(()=>{
  // showMessage("Opening Whatsapp in 5 seconds", 'error')
  window.open(whatsappLink, "_blank");
// },5000)
});
