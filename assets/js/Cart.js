let box = document.getElementById("box");
let arrowPosts = async () => {
    try {
        let response = await fetch(`https://edu-me01.github.io/Json-Data/Real-state.json`)
            let data = await response.json();

        console.log(localStorage.getItem("carts")[1]);
        for (let i = 0; i < data.properties.length; i++) {
            for (let l = 0; l < localStorage.getItem("carts").length; l++) {
                if (data.properties[i].id == localStorage.getItem("carts")[l]) {
                    
                     box.innerHTML += `
                    <div class="card col-3 m-2" style="width: 18rem;">
                       <img src=${data.properties[i].mainImage} class="card-img-top" alt="...">
                       <div class="card-body">
                       <h5 class="card-title">${data.properties[i].title}</h5>
                       <p class="card-text">${data.properties[i].price}</p>        
                    </div>
                    `;
                }
            }
            console.log(data.properties[i].id);
        }
    } catch (error) {
        console.log(error);
    }
}
arrowPosts()

function ClearCart() {
    localStorage.removeItem("carts");
    box.innerHTML = "";
    Swal.fire({
        title: "Clear Cart!",
        icon: "success",
        draggable: true
    });
}