const images = ["락다운.png", "리와인드.png", "이세페.png", "키딩.png", "어나더월드.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`

document.body.appendChild(bgImage);
console.log(bgImage);