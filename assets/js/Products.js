let box = document.getElementById("box")
let arrCart = [];
let arrfav = [];
let arrowPosts = async () => {
    try {
        let response = await fetch(`https://edu-me01.github.io/Json-Data/Real-state.json`)
        let data = await response.json();  
        console.log(data.properties[1].mainImage);

        for (let i = 0; i < data.properties.length; i++) {
            console.log(data.properties[i]);
            box.innerHTML += `
                    <div class="card col-3 m-2" style="width: 18rem;">
                    <img src=${data.properties[i].mainImage} class="card-img-top pb-1" alt="...">
                    <button class="b Details" onclick="productDetails(${data.properties[i].id})">Details</button>
                       <div class="card-body">
                       <h5 class="card-title">${data.properties[i].title}</h5>
                       <p class="card-text">${data.properties[i].price}</p>
                       <div class="d-flex justify-content-between icons">
                          <button onclick="addcart(${data.properties[i].id})" ><i class="fa-solid fa-cart-shopping"></i>Add to Cart</button>
                          <button onclick="addfav(${data.properties[i].id})" ><i class="fa-solid fa-heart"></i></button>
                       
                       </div>
                    </div>
                    `;
        }
    } catch (error) {
        console.log(error);
    }
}
arrowPosts()

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

function addfav(fav) {
            console.log(fav);
            arrfav.push(fav)

            localStorage.setItem("favorites", JSON.stringify(arrfav));
            Swal.fire({
                title: "Drag me!",
                icon: "success",
                draggable: true
            });
        }

function productDetails(id) {
    // Redirect to the product details page with the selected product ID
    window.location.href = `./Product.html`;
    localStorage.setItem("productId", id);
    
}