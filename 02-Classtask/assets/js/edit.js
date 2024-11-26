import { editDataById, getAllData } from "./constants/constants.js";

let adminForm = document.querySelector("form");
let productName = document.querySelector(".name")
let description = document.querySelector(".description")
let price = document.querySelector(".price")
let stock = document.querySelector(".stock")
let discount = document.querySelector(".discount")
let image = document.querySelector(".image")
let category = document.querySelector("#category");

const pId = new URLSearchParams(window.location.search).get("id");
adminForm.addEventListener("submit", async function(event){
    event.preventDefault();
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
        console.log(product)
        let {data} = await editDataById("products",pId,product);

})