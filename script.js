//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

// Function to download an image from a given URL
function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image's URL: ${url}`));
    img.src = url;
  });
}

// Function to download and display images
function downloadAndDisplayImages(imageArray) {
  const promises = imageArray.map(image => downloadImage(image.url));
  Promise.all(promises)
    .then(images => {
      output.innerHTML = '';
      images.forEach(image => output.appendChild(image));
    })
    .catch(error => console.error(error));
}

// Add event listener to the button to trigger image download and display
btn.addEventListener("click", () => downloadAndDisplayImages(images));

