let div_col = document.querySelector(".bodydiv");
let btn = document.querySelector(".btn");
let colors = ["aqua","chocolate","darkcyan","darkorange","greenyellow","mediumorchid","paleturquoise"];
btn.addEventListener("click",function(){
    let index = parseInt((Math.random()*colors.length)+1);
    console.log(index);
    div_col.style.background= `${colors[index]}`;
})