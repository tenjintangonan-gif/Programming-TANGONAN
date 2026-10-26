function verifyLogin(event) {
    event.preventDefault();
    
    const USER = "Irelia";
    const PASS = "FORIONIAAA";
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;
    const errormsg = document.getElementById("errormsg").value;

    if (userName === USER && password === PASS){
        alert("WELCOME SUMMONER!");
        window.location.href = "Forms.html";
    } else {
        alert("Invalid Entries!");
        errorMessage.textContent = "Invalid Username and Password";
    }
}

const myLogInButton = document.getElementById("btnLogIn");
myLogInButton.addEventListener('click', verifyLogin);