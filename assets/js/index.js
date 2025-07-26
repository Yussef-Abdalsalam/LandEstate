let header = document.getElementById("header");


async function Header1() {
    try {
        let response = await fetch(`https://edu-me01.github.io/Json-Data/Real-state.json`)
        let data = await response.json();        
        header.innerHTML += `
                      
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="true" data-bs-interval="8000" >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2500" >
          <img src="${data.properties[0].images[0]}" class="d-block slid w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="2500" >
          <img src="${data.properties[0].images[1]}" class="d-block slid w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="2500" >
          <img src="${data.properties[0].images[2]}" class="d-block slid w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="2500" >
          <img src="${data.properties[1].images[0]}" class="d-block slid w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="2500" >
          <img src="${data.properties[1].images[1]}" class="d-block slid w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="2500" >
          <img src="${data.properties[1].images[2]}" class="d-block slid w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="2500" >
          <img src="${data.properties[2].images[0]}" class="d-block slid w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="2500" >
          <img src="${data.properties[2].images[2]}" class="d-block slid w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="2500" >
          <img src="${data.properties[2].images[2]}" class="d-block slid w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    `;
                   
    } catch (error) {
        console.log(error);
    }

}
Header1()




















