import { addData, deleteDataById, getAllData, getDataById } from "./constants/constants.js";

let adminForm = document.querySelector("form");
let productName = document.querySelector(".name")
let description = document.querySelector(".description")
let price = document.querySelector(".price")
let stock = document.querySelector(".stock")
let discount = document.querySelector(".discount")
let image = document.querySelector(".image")
let category = document.querySelector("#category");



let { data } = await getAllData("products");
let tbody = document.querySelector("tbody");
function selectCategory() {
    // let {data} = await getDataById("products");
    adminForm.addEventListener("submit", async function (event) {
        const { data: categories } = await getAllData("categories");
        const selectedCategory = categories.find((q) => q.name.toLowerCase().trim() === category.value.toLowerCase())
        const categoryId = selectedCategory.id;

        let product = {
            name:productName.value.trim(),
            description:description.value.trim(),
            price:price.value.trim(),
            stock:stock.value.trim(),
            discount:discount.value.trim(),
            image:image.value.trim(),
            categoryId:categoryId,
        }
        async function addNewProduct(){
            let {data} = await addData("products",product);
        }
        addNewProduct();
    })
}
selectCategory();


function drawTable(products) {
    console.log(products);
    tbody.innerHTML = "";
    products.forEach(product => {
        let prodElem = document.createElement("tr");
        prodElem.className = "product-table";
        prodElem.innerHTML = `
                    <td><img src="${product.image}" alt="" class = "img-table"></td>
                    <td>${product.id}</td>
                    <td>${product.categoryId}</td>
                    <td>${product.name}</td>
                    <td>${product.description}</td>
                    <td>${product.price}</td>
                    <td>${product.stock}</td>
                    <td>${product.discount}</td>
                    <td class = "actions">
                        <button class = "btn btn-warning edit" >Edit</button>
                        <button class = "btn btn-danger delete" data-id =${product.id}>Delete</button>
                    </td>
        `
        tbody.appendChild(prodElem);
    });
    let dltBtn = document.querySelectorAll(".delete");
    dltBtn.forEach(btn => {
        console.log(btn)
        let dataId = btn.getAttribute("data-id");
        btn.addEventListener("click",function(){
            deleteDataById("products",dataId);
            btn.closest("tr").remove();
        })
    });
}
drawTable(data);
