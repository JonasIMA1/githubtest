

const imageContainerEl = document.querySelector(".image-container");

const PrevEl = document.getElementById("Prev");
const NextEl = document.getElementById("Next");

let x = 0;
let timer;

function updateGallery()
{
   imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
    }, 3000);
}

updateGallery();

PrevEl.addEventListener("click",() =>{
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});

NextEl.addEventListener("click",() =>{
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});
