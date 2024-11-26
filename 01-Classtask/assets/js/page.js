import { deleteDataById, editDataById, getAllData } from "./functions.js";

let search = document.querySelector(".search-field");

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
                    <a href = "add.html?id=${blog.id}" class = "btn-yellow">Edit</a>
                </div>
        `
        cardHolder.appendChild(blogB);
    });

    let dltBtn = document.querySelectorAll(".btn-red");
    dltBtn.forEach(btn => {
        let dataId = btn.getAttribute("data-id");
        btn.addEventListener("click",function(){
            deleteDataById("blogs",dataId);
        })
    });
    
    search.addEventListener("keyup",function(event){
        let filteredName = data.filter((p) => p.title.includes(event.key))
        filteredName.forEach(blog => {
            cardHolder.innerHTML = "";
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
                        <a href = "add.html?id=${blog.id}" class = "btn-yellow">Edit</a>
                    </div>
            `
            cardHolder.appendChild(blogB);
        });
    })
}
fetchData()