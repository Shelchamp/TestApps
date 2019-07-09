document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants
  console.log("Page  Loaded");
  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
    li.setAttribute("style", "cursor: pointer")
  });



  // adding SF places as list items
  const addPlace = e => {
    e.preventDefault();

    const inputBox = document.querySelector(".favorite-input");
    const text = inputBox.value;
    const ulEl = document.getElementById("sf-places");
    const liEl = document.createElement("li");
    liEl.textContent = text;
    ulEl.appendChild(liEl);
    inputBox.value = "";

  }
  const placeSubmit = document.querySelector(".favorite-submit")
  placeSubmit.addEventListener("click", addPlace);
  



  // adding new photos

  const showImgForm = e => {
    e.preventDefault();
    const div = document.querySelector(".photo-form-container");
    if (div.className === "photo-form-container") {
      div.className = "photo-form-container hidden";   
    } else {
      div.className = "photo-form-container";   
    }
  }

  const photoButt = document.querySelector(".photo-show-button");
  photoButt.addEventListener("click", showImgForm);

  const addPhoto = e => {
    e.preventDefault();
    
    const input = document.querySelector(".photo-url-input");
    const url = input.value;
    input.value = "";
    const ulEl = document.querySelector(".dog-photos");
    const liEl = document.createElement("li");
    const imgEl = document.createElement("img");
    imgEl.src = url;
    liEl.appendChild(imgEl);
    ulEl.appendChild(liEl);
  }

  const addPhotoButt = document.querySelector(".photo-url-submit");
  addPhotoButt.addEventListener("click", addPhoto);



});
