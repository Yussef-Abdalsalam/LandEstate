let username1 = document.getElementById("exampleInputName");
let email1 = document.getElementById("exampleInputEmail");
let password1 = document.getElementById("exampleInputPassword");
let pp = document.getElementById("pp");




function validateForm() {
    if (username1.value === "" || email1.value === "" || password1.value === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in all fields!',
        });


    } else {
        let form = [];
        form.push(
            [username1.value,
            email1.value,
            password1.value
            ])
        localStorage.setItem("formData", JSON.stringify(form));
        window.location.href = "login.html";
    }
}





