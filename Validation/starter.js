const form = document.querySelector(".form-check");
form.addEventListener("submit", function(e){
    e.preventDefault();
    const username = this.elements["username"].value;
    const password = this.elements["password"].value
    if(!username){
        alert("Please enter your username");
        return;
    } 
    if(!password){
        alert("Please enter your password");
        return;
    } 
    
});