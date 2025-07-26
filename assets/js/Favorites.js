let box = document.getElementById("box");
let arrCart = [];
let arrowPosts = async () => {
    try {
        let response = await fetch(`https://edu-me01.github.io/Json-Data/Real-state.json`)
            let data = await response.json();

        console.log(localStorage.getItem("favorites")[1]);
        for (let i = 0; i < data.properties.length; i++) {
            for (let l = 0; l < localStorage.getItem("favorites").length; l++) {
                if (data.properties[i].id == localStorage.getItem("favorites")[l]) {
                    console.log(data.properties[i].id);
                    
                     box.innerHTML += `
                    <div class="card col-3 m-2" style="width: 18rem;">
                       <img src=${data.properties[i].mainImage} class="card-img-top" alt="...">
                       <div class="card-body">
                       <h5 class="card-title">${data.properties[i].title}</h5>
                       <p class="card-text">${data.properties[i].price}</p> 
                       <div class="text-center icons">
                          <button onclick="addcart(${data.properties[i].id})" ><i class="fa-solid fa-cart-shopping"></i>Add to Cart</button>
                       
                       </div>       
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

function ClearFavorites() {
    localStorage.removeItem("favorites");
    box.innerHTML = "";
    Swal.fire({
        title: "Clear Favorites",
        icon: "success",
        draggable: true
    });
}

function addcart(cart) {
            console.log(cart);
            arrCart.push(cart)

            localStorage.setItem("carts", JSON.stringify(arrCart));
            Swal.fire({
                title: "Drag me!",
                icon: "success",
                draggable: true
            });
        }

