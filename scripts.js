const container = document.querySelector(".container");
const yellow = document.querySelector(".color-yellow");
const pink = document.querySelector(".color-pink");
const blue = document.querySelector(".color-sky-blue");
const umbrella = document.querySelector(".umbrella");
const button = document.querySelector("button");
const logo = document.querySelector(".logo");
const blueUmbrellaURL = "./Assets/Blue_umbrella.png";
const pinkUmbrellaURL = "./Assets/Pink_umbrella.png";
const yellowUmbrellaURL = "./Assets/Yello_umbrella.png";
const loaderURL = "./Assets/loader_icon.svg";
const fileUpload = document.querySelector(".file-upload");
const colorContainer = document.querySelector(".color-container");
function switchToYellow() {
  colorContainer.querySelectorAll("li").forEach((btn) => {
    btn.classList.remove("active");
  });
  yellow.classList.add("active");
  container.style.background = "#FFFAF0";
  button.style.background = "#fed33c";
  umbrella.src = loaderURL;
  umbrella.style.width = "80px";
  umbrella.classList.add("rotate-animation");
  setTimeout(() => {
    umbrella.src = yellowUmbrellaURL;
    umbrella.style.width = "400px";
    umbrella.classList.remove("rotate-animation");
  }, 2900);
}
function switchToPink() {
  colorContainer.querySelectorAll("li").forEach((btn) => {
    btn.classList.remove("active");
  });
  pink.classList.add("active");
  container.style.background = "#fceef5";
  button.style.background = "#d90166";
  umbrella.src = loaderURL;
  umbrella.style.width = "80px";
  umbrella.classList.add("rotate-animation");
  setTimeout(() => {
    umbrella.src = pinkUmbrellaURL;
    umbrella.style.width = "400px";
    umbrella.classList.remove("rotate-animation");
  }, 2900);
}
function switchToBlue() {
  colorContainer.querySelectorAll("li").forEach((btn) => {
    btn.classList.remove("active");
  });
  blue.classList.add("active");
  container.style.background = "#ebf4fa";
  button.style.background = "#02a4d3";
  umbrella.src = loaderURL;
  umbrella.style.width = "80px";
  umbrella.classList.add("rotate-animation");
  setTimeout(() => {
    umbrella.src = blueUmbrellaURL;
    umbrella.style.width = "400px";
    umbrella.classList.remove("rotate-animation");
  }, 2900);
}

yellow.addEventListener("click", switchToYellow);
pink.addEventListener("click", switchToPink);
blue.addEventListener("click", switchToBlue);
button.addEventListener("click", () => {
  document.querySelector(".file-upload").click();
});
fileUpload.addEventListener("change", function () {
  button.innerHTML = `<img
  src=${loaderURL}
  alt="usmall-umbrella"
  class="small-umbrella"
/> ${fileUpload.files[0].name}`;
  console.log(fileUpload.files);

  const fileReader = new FileReader();
  fileReader.readAsDataURL(fileUpload.files[0]);
  fileReader.onload = function (event) {
    logo.style.display = "block";
    logo.src = event.target.result;
  };
});
