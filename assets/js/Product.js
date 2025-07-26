let box = document.getElementById("box")
let arrCart = [];
let arrfav = [];


let productDetail = async () => {
    try {
        let response = await fetch(`https://edu-me01.github.io/Json-Data/Real-state.json`)
        let data = await response.json();

        console.log(localStorage.getItem("productId"));
        for (let i = 0; i < data.properties.length; i++) {
            if (data.properties[i].id == localStorage.getItem("productId")) {

                box.innerHTML += `
                       <div class="col-md-8">
                <div class="card">
                    <img src="./assets/imgs/2.jpg" class="card-img-top" alt="...">
                    <div class="text-center card-body">
                         <h5 class="card-title">${data.properties[i].title}</h5>
                        <p class="card-text">${data.properties[i].description}</p>
                       <p class="card-text">${data.properties[i].price}$</p>
                    </div>
                        <div class="d-flex justify-content-evenly pb-3 icons">
                          <button onclick="addcart(${data.properties[i].id})" ><i class="fa-solid fa-cart-shopping"></i>Add to Cart</button>
                          <button onclick="addfav(${data.properties[i].id})" ><i class="fa-solid fa-heart"></i></button>
                       </div>
                </div>
            </div> 
                    `;
            }

            console.log(data.properties[i]);
        }
    } catch (error) {
        console.log(error);
    }
}



productDetail()

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

