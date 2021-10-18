let defaultSize = 16; 
let color = '#ff0000';
let randomColor = Math.floor(Math.random()*16777215).toString(16);
const grid = document.querySelector(".grid"); 
const randomColors = document.querySelector("#random");
const chosenColor = document.querySelector("#favcolor");
const eraser = document.querySelector("#eraser"); 
const clearGrid = document.querySelector("#clear");
const sizeSlider = document.querySelector("#sizeSlider");
const sliderNumber = document.querySelector(".velicina");
sliderNumber.textContent=`Grid size: ${defaultSize}x${defaultSize}  `;


napraviGrid(defaultSize);

ukljuciCrtanje();


clearGrid.addEventListener("click",()=> ocistiPapir());

eraser.addEventListener("click",()=>koristiBoju('rgb(229, 226, 226)'));

chosenColor.addEventListener("input",()=>koristiBoju(`${chosenColor.value}`));

randomColors.addEventListener("click", randomBoje);

sizeSlider.addEventListener("input",()=>promeniGrid(sizeSlider.value) )

function napraviGrid(size){
    for(i=0; i<size*size; i++){
    const gridItem=document.createElement("div"); 
    gridItem.classList.add("grid-item");

    grid.appendChild(gridItem); }}


function promeniGrid(newSize){ 
  
    sliderNumber.textContent = `Grid size: ${sizeSlider.value}x${sizeSlider.value}  `;
    grid.style.cssText = (`grid-template-columns:repeat(${newSize},1fr);
               grid-template-rows:repeat(${newSize},1fr);`);
    ocistiPapir();
    isprazniGrid();
    napraviGrid(newSize); 
    ukljuciCrtanje();
    }


function getRandomColor(){

    randomColor=`#${Math.floor(Math.random()*16777215).toString(16)}`;
    return randomColor;
}
function koristiBoju(x)
{
    gridItems.forEach((gridItem)=> gridItem.addEventListener("mouseover",()=>{
    gridItem.style.background=x;
}))
}
function randomBoje()
{
    gridItems.forEach((gridItem)=> gridItem.addEventListener("mouseover",()=>{
     gridItem.style.background=getRandomColor();
}))
}

function ocistiPapir(){ 
   gridItems.forEach((gridItem)=> 
   gridItem.style.background="rgb(229, 226, 226)")
}


function ukljuciCrtanje()
{
    gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((gridItem)=> gridItem.addEventListener("mouseover",()=>
    gridItem.style.background=color))
}

function isprazniGrid()
{
    grid.innerHTML='';
}