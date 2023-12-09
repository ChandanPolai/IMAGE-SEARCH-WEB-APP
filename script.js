// ⬇️mu unsplash api key code
const acsessKey = "N6TkpDl1ydfDlwJiiIaSqyqRtaDokzj07Z1X0iU4eBI";
const search_Box = document.querySelector(".search_field");
const search_Btn = document.querySelector(".search-btn");
const mySection = document.querySelector("section");
const loadBtn = document.querySelector(".button1");

let page = 1;
//fetch images on unsplash api
const fetchImages = async (query, pageno) => {
  const url = `https://api.unsplash.com/search/photos/?query=${query}&per_page=28&page=${pageno}&client_id=${acsessKey}`;

  const resPonse = await fetch(url);
  const data = await resPonse.json();

  console.log(data);

  // 🤖🤖 check the condition the correct search word length
  if (data.results.length > 0) {
    data.results.forEach((photo) => {
      // 🚀🚀we have create the main div and add img tag in the src
      const imageElement = document.createElement("main");
      imageElement.innerHTML = `<img src="${photo.urls.regular}"/>`;

      // 🛺🛺craete a overlay element in the image inner
      const overlayElement = document.createElement("div");
      overlayElement.classList.add("overlay");

      // ⬇️⬇️create overlay text to show the images name
      const overlayText = document.createElement("h3");
      overlayText.textContent = `${photo.alt_description}`;

      // ⬇️⬇️add download btn functionality
      const downloadBtn = document.createElement("button");
      downloadBtn.className = "bx bxs-download";
      downloadBtn.classList.add("download_icon");

      // heading tag can append
      overlayElement.appendChild(overlayText);
      // download btn append
      overlayElement.appendChild(downloadBtn);
      imageElement.appendChild(overlayElement);
      mySection.appendChild(imageElement);
      // console.log(photo);
    });
  } else {
    mySection.innerHTML = `<h2>please enter some correct word 👻👻👻</h2>`;
  }

  // 🦕🦎check the btn last page of the image
  if (data.total_pages === pageno) {
    loadBtn.style.display = "none";
  } else {
    loadBtn.style.display = "block";
  }
};

//button for search images
search_Btn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchThings = search_Box.value.trim();
  if (searchThings !== "") {
    page = 1;
    fetchImages(searchThings, page);
  } else {
    mySection.innerHTML = `<h2>please enter your query</h2>`;
  }
});

// 📢📢load btn to load the extra images
loadBtn.addEventListener("click", () => {
  fetchImages(search_Box.value.trim(), ++page);
});




// const acsessKey = "N6TkpDl1ydfDlwJiiIaSqyqRtaDokzj07Z1X0iU4eBI";
// const search_Box = document.querySelector(".search_field");
// const search_Btn = document.querySelector(".search-btn");
// const mySection = document.querySelector("section");
// const loadBtn = document.querySelector(".button1");

// let page = 1;

// // Function to download the image
// const downloadImage = async (url, filename) => {
//   const response = await fetch(url);
//   const blob = await response.blob();

//   // Create a temporary link element
//   const link = document.createElement('a');
//   link.href = window.URL.createObjectURL(blob);
//   link.download = filename;

//   // Append the link to the document
//   document.body.appendChild(link);

//   // Trigger a click on the link to start the download
//   link.click();

//   // Remove the link from the document
//   document.body.removeChild(link);
// };

// const fetchImages = async (query, pageno) => {
//   const url = `https://api.unsplash.com/search/photos/?query=${query}&per_page=28&page=${pageno}&client_id=${acsessKey}`;

//   const resPonse = await fetch(url);
//   const data = await resPonse.json();

//   console.log(data);

//   if (data.results.length > 0) {
//     data.results.forEach((photo) => {
//       const imageElement = document.createElement("main");
//       imageElement.innerHTML = `<img src="${photo.urls.regular}"/>`;

//       const overlayElement = document.createElement("div");
//       overlayElement.classList.add("overlay");

//       const overlayText = document.createElement("h3");
//       overlayText.textContent = `${photo.alt_description}`;

//       const downloadBtn = document.createElement("button");
//       downloadBtn.className = "bx bxs-download";
//       downloadBtn.classList.add("download_icon");

//       // Add a click event listener to the download button
//       downloadBtn.addEventListener('click', () => {
//         const imageUrl = photo.urls.regular;
//         const filename = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
//         downloadImage(imageUrl, filename);
//       });

//       overlayElement.appendChild(overlayText);
//       overlayElement.appendChild(downloadBtn);
//       imageElement.appendChild(overlayElement);
//       mySection.appendChild(imageElement);
//     });
//   } else {
//     mySection.innerHTML = `<h2>please enter some correct word 👻👻👻</h2>`;
//   }

//   if (data.total_pages === pageno) {
//     loadBtn.style.display = "none";
//   } else {
//     loadBtn.style.display = "block";
//   }
// };

// search_Btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const searchThings = search_Box.value.trim();
//   if (searchThings !== "") {
//     page = 1;
//     fetchImages(searchThings, page);
//   } else {
//     mySection.innerHTML = `<h2>please enter your query</h2>`;
//   }
// });

// loadBtn.addEventListener("click", () => {
//   fetchImages(search_Box.value.trim(), ++page);
// });
