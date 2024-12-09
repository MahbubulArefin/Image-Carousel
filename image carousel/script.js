var index = 0;

function showimg(i) {
  var images = document.getElementsByClassName("img");
  var dots = document.getElementsByClassName("dot");

  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  for (let i = 0; i < images.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  index += i;
  console.log("hello");

  if (index > images.length - 1) {
    index = 0;
  }

  if (index < 0) {
    index = images.length - 1;
  }

  images[index].style.display = "block";
  images[index].classList.add("fade");
  dots[index].className += " active";
}

window.addEventListener("load", function () {
  showimg(index);
});
