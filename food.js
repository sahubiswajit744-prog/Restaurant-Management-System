
document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", () => {
        const answer = item.querySelector(".faq-answer");
        answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
});


let logBtn = document.getElementById("logBtn");

logBtn.addEventListener("click", function(){
    document.querySelector(".loginPage").style.display = "block";
});


document.querySelector(".loginPage button").addEventListener("click", function(){
    let email = document.getElementById("name");
    let pass = document.getElementById("pass");

    if(email.value === "" || pass.value === ""){
        alert("Please enter Email and Password");
    } else {
        alert("Successfully Logged In");
        document.querySelector(".loginPage").style.display = "none";
    }
});

