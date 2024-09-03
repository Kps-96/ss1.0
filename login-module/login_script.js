const signupbtn = document.getElementById("signup");
const loginbtn = document.getElementById("login");
const main = document.getElementById("main");

signupbtn.addEventListener('click', () => {
    main.classList.add("active")
});

loginbtn.addEventListener('click', () => {
    main.classList.remove("active")
});

