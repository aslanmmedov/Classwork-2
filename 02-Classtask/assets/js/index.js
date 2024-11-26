import { getAllData } from "./constants/constants.js";

let productsCard = document.querySelector(".product-cards");
let filterField = document.querySelector(".filterField");
// let products = null;
async function getData(){
    let {data} = await getAllData("products");
    drawCards(data);
    searchData(data);
}
getData();
function drawCards(products){
    // console.log(products);
    productsCard.innerHTML = "";
    products.forEach(product => {
        let prodElem = document.createElement("div");
        prodElem.className = "product-card";
        prodElem.innerHTML = `
             <div class="card">
                <div class="card-img">
                    <img src="${product.image}" alt="">
                </div>
                <div class="card-parag">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <span>Price: $${product.price}</span>
                </div>
            </div>
        `
        productsCard.appendChild(prodElem);
    });
}

function searchData(products){
    filterField.addEventListener("keyup",function(event){   
        let filteredName = products.filter((p) => p.name.toLowerCase().includes(event.target.value.toLowerCase().trim()));
        drawCards(filteredName);    
    });
}
