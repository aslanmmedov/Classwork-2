import { addData } from "./functions.js";

let formControl = document.querySelector(".form-control");
let title = document.querySelector(".title")
let desc = document.querySelector(".desc")
let author = document.querySelector(".author")

formControl.addEventListener("submit",function(){
    let data = {
        title:title.value.trim(),
        body:desc.value.trim(),
        author:author.value.trim(),
    }
    addData("blogs",data)
})

