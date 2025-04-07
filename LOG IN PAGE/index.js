let form = document.querySelector(".form");
let name = document.querySelector(".name");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let submitBtn = document.querySelector(".submitBtn");

let infoArr = [] ;
function submitData (e) {
    e.preventDefault();
    console.log("function is working")
    let infoName = name.value;
    let infoEmail = email.value;
    let infoPassword = password.value;
    infoArr.push(infoName,infoEmail,infoPassword)
   console.log(infoArr);
   saveInfo();
}

// Save In local Storage.

function saveInfo () {
    localStorage.setItem("userData", JSON.stringify(infoArr))
}


submitBtn.addEventListener("click",submitData)