const dropDown_block = document.querySelector(".c-header.-style.--01.--alteo .ct-content.-items.--dropdown");
const dropDown_icon = document.querySelector(".c-header.-style.--01.--alteo .nav.-item.--09");
const header = document.querySelector(".c-header.-style.--01.--alteo");
let N = 0;

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

