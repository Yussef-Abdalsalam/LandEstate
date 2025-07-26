let username1 = document.getElementById("exampleInputName");
let email1 = document.getElementById("exampleInputEmail");
let pp = document.getElementById("pp");
let formData = JSON.parse(localStorage.getItem("formData"));


let arrowPosts = async (theAPISource) => {
    try {
        let response = await fetch(`https://edu-me01.github.io/Json-Data/Real-state.json`)
        let data = await response.json();


        const user = data.users.find(u => u.name === username1.value && u.email === email1.value);

        if (user) {
            window.location.href = "index.html";
            return
        }else if (formData[0][0] === username1.value && formData[0][1] === email1.value) {
            window.location.href = "index.html";
            return 
        } else {
            Swal.fire({
                icon: "error",
                text: "User not found!",
                footer: '<a href="./Register.html">Register</a>'
            });

        }





    } catch (error) {
        console.log(error);

    }
}
