function login() {
    var user_id = document.getElementById('user_id').value;
    var pass = document.getElementById('pass').value;

    if (user_id === "My shop" && pass === "Pro") {
        window.location.href = 'foodSelection.html';
        
    }else if(user_id === "" && pass === ""){
          window.alert("Please Fill Details");
    } 
    else {
        window.alert("Login unsuccessful, Check Password and Try Again");
    }
}
