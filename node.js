const email = document.querySelector(".main_input input");
email.addEventListener("click",()=>{
    email.style.border ="1px solid white"
})
const img = [
    "img/Pak movie/imgpm1.webp",
    "img/Pak movie/imgpm2.webp",
    "img/Pak movie/imgpm3.webp",
    "img/Pak movie/imgpm4.webp",
    "img/Pak movie/imgpm5.webp",
    "img/Pak movie/imgpm6.webp",
    "img/Pak movie/imgpm7.webp",
    "img/Pak movie/imgpm8.webp",
    "img/Pak movie/imgpm9.webp",
]
const container = document.querySelectorAll(".img");
let i = 0;
Array.from(container).forEach(e => {
    
    e.innerHTML = `<img src="${img[i]}" alt="">`
    i = i+1
});
container.forEach(element => {
    element.addEventListener("click",()=>{
        element.style
    })
});
let b1 = document.getElementById("b1")
let d1 = 0
b1.addEventListener("click",()=>{
    if(d1 == 0 ){
        var b1hiden = document.getElementById("b1-hide").style.display = "flex";
        d1 = 1;
    }
    else{
        var b1hiden = document.getElementById("b1-hide").style.display = "none";
        d1 = 0;
    }
})
let b2 = document.getElementById("b2")

b2.addEventListener("click",()=>{
    if(d1 == 0 ){
        var b1hiden = document.getElementById("b2-hide").style.display = "flex";
        d1 = 1;
    }
    else{
        var b1hiden = document.getElementById("b2-hide").style.display = "none";
        d1 = 0;
    }
})
let b3 = document.getElementById("b3")
b3.addEventListener("click",()=>{
    if(d1 == 0 ){
        var b1hiden = document.getElementById("b3-hide").style.display = "flex";
        d1 = 1;
    }
    else{
        var b1hiden = document.getElementById("b3-hide").style.display = "none";
        d1 = 0;
    }
})
let b4 = document.getElementById("b4")
b4.addEventListener("click",()=>{
    if(d1 == 0 ){
        var b1hiden = document.getElementById("b4-hide").style.display = "flex";
        d1 = 1;
    }
    else{
        var b1hiden = document.getElementById("b4-hide").style.display = "none";
        d1 = 0;
    }
})
let b5 = document.getElementById("b5")
b5.addEventListener("click",()=>{
    if(d1 == 0 ){
        var b1hiden = document.getElementById("b5-hide").style.display = "flex";
        d1 = 1;
    }
    else{
        var b1hiden = document.getElementById("b5-hide").style.display = "none";
        d1 = 0;
    }
})
let b6 = document.getElementById("b6")
b6.addEventListener("click",()=>{
    if(d1 == 0 ){
        var b1hiden = document.getElementById("b6-hide").style.display = "flex";
        d1 = 1;
    }
    else{
        var b1hiden = document.getElementById("b6-hide").style.display = "none";
        d1 = 0;
    }
})