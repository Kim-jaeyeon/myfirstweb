const images=["3.JPG","4.JPG","5.JPG","6.JPG","8.JPG","9.JPG","10.JPG","11.JPG","12.JPG","13.JPG","14.JPG","15.JPG","16.JPG","17.JPG","18.JPG","19.JPG","20.JPG","21.JPG",];

const chosenImage=images[Math.floor(Math.random()*images.length)];

const bgImage= document.createElement("img");
bgImage.src=`img/${chosenImage}`;

document.body.appendChild(bgImage);