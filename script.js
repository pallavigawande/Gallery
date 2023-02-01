let gallery = document.querySelector(".gallery");
let image1 = document.querySelector(".img1");
let image2 = document.querySelector(".img2");
let image3 = document.querySelector(".img3");
let image4 = document.querySelector(".img4");
let finfo = document.querySelector(".form");
image1 = addEventListener("click", info);

function openFormFunction() {
  document.getElementById("form").classList.remove("hide");
}

function info() {
  gallery.classList.add(hide);
  finfo.classList.remove(hide);
}
