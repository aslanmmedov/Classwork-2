import { addData, editDataById } from "./functions.js";

const pId = new URLSearchParams(window.location.search).get("id");

let formControl = document.querySelector(".form-control");
let title = document.querySelector(".title")
let desc = document.querySelector(".desc")
let author = document.querySelector(".author")

// console.log(pId);
formControl.addEventListener("submit",function(event){
    event.preventDefault();
    if(pId !== null){
        let data = {
            title:title.value.trim(),
            body:desc.value.trim(),
            author:author.value.trim(),
        }  
        // console.log(data)
        editDataById("blogs",pId,data);      
    }
    else{
        let data = {
            title:title.value.trim(),
            body:desc.value.trim(),
            author:author.value.trim(),
        }  
        // console.log(data)
        addData("blogs",data)
    }
    
})