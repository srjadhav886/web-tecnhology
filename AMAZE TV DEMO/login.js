
// const username = new Array();
// const pass = new Array("9881261418");
// function validateLoginForm() {
//     var Username = document.getElementById("#logName").value;
//     var password = document.getElementById("#logPassword").value;

//     if (Username == "" || password == "") {
//         alert("Error Password or Username");
//     }


// }
// function validateSignupForm() {
//     var mail = document.getElementById("signEmail").value;
//     var name = document.getElementById("signName").value;
//     var password = document.getElementById("signPassword").value;
//     username.push = name;
//     pass.push = password;


//     if (mail == "" || name == "" || password == "") {
//         document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
//         return false;
//     }



//     else {
//         alert("Successfully signed up");
//         return true;
//     }
// }
function check() {
    var Username = document.getElementById("logName").value;
    var password = document.getElementById("logPassword").value;
    console.log(Username);
    if (Username == "myuserid" && password == "mypswrd") {
        window.open('project1.html')
    }
    else {
        alert(sadasd);
    }
}