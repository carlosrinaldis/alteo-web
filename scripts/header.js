const dropDown_block = document.querySelector(".c-header.-style.--01.--alteo .ct-content.-items.--dropdown");
const dropDown_icon = document.querySelector(".c-header.-style.--01.--alteo .nav.-item.--09");
const header = document.querySelector(".c-header.-style.--01.--alteo");

// function firstTest() {
//     N = N + 1;
//     if (N % 2 == 0) {
//         dropDown_block.style.display = "none";
//         header.style.backgroundColor = "initial";

//     } else {
//         dropDown_block.style.display = "grid";
//         header.style.background = "white";
//     }
// }

function dropDownMenuToggle() {
    dropDown_block.classList.toggle("---show");
    header.classList.toggle("--bk-white")
}

dropDown_icon.addEventListener("click", dropDownMenuToggle);

console.log(header);

// Image Toggle

const imageGrid_block = document.querySelector(".image-grid");
const imageGrid_imageCards = imageGrid_block.querySelectorAll (".c-image-card .ct-content.-img");

function imageDetailsToggle() {
    let n = this.querySelector(".-block.--01.-text");
    console.log(n);
    n.classList.toggle('monkey');
};

imageGrid_imageCards.forEach(element => {
    element.addEventListener("click", imageDetailsToggle);
});



console.log(imageGrid_imageCards);

// console.log(imageCard_textBlocks);

