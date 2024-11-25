import { deleteDataById, editDataById, getAllData } from "./functions.js";



async function fetchData() {
    const data = await getAllData("blogs");
    let cardHolder = document.querySelector(".card-holder");
    data.forEach(blog => {
        let blogB = document.createElement("div");
        blogB.className = "blog-body"
        blogB.innerHTML =
        `
                <div class="card-body">
                    <h2>${blog.title}</h2>
                <p class="parag">${blog.body}</p>
                <span>Written by ${blog.author}</span>
                </div>
                <div class="card-btn">
                    <button class = "btn-red" data-id =${blog.id} >Delete</button>
                    <a href = "add.html?data-id = ${blog.id}" class = "btn-yellow">Edit</a>
                </div>
        `
        cardHolder.appendChild(blogB);
    });

    let dltBtn = document.querySelectorAll(".btn-red");
    let editBtn = document.querySelectorAll(".btn-yellow")
    dltBtn.forEach(btn => {
        let dataId = btn.getAttribute("data-id");
        btn.addEventListener("click",function(){
            deleteDataById("blogs",dataId);
        })
    });
    
}
fetchData()