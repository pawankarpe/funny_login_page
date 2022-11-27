let usernameRef = document.getElementById('username');
let passwordRef = document.getElementById('password');
let submitRef = document.getElementById('submit');
let messageRef = document.getElementById('message-ref');

let validUserName = () =>{
    // username should contain more than 3 char should begain with alphabate and can contain numbers
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;
    return usernameRegex.test(usernameRef.value);

}

let validPassword =() =>{
//Password should contain atleast 8 chara . 1 should be alpha 1 should be number 1 should be capital 
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z0-9]).{8,}$/gm;
    return passwordRegex.test(passwordRef.value);
}

usernameRef.addEventListener("input", ()=>{
    if (!validUserName()) {
        messageRef.style.visibility="hidden";
        usernameRef.style.cssText=
        "border-color: #fe2e2e; background-color: #ffc2c2";       
    }
    else{
        usernameRef.style.cssText = 
        "border-color: #34bd34; background-color: #c2ffc2"
    }
});

passwordRef.addEventListener("input", ()=>{
    if (!validPassword()) {
        messageRef.style.visibility="hidden";
        passwordRef.style.cssText=
        "border-color: #fe2e2e; background-color: #ffc2c2";  
    } else {
        passwordRef.style.cssText=
        "border-color: #34bd34; background-color: #c2ffc2";
    }
})

submitRef.addEventListener("mouseover", ()=>{
    //if password and username any of two eigther invalid please do this...
    if (!validUserName() || !validPassword()) {
        //get the current position of submit btn
        let containerReact = document.querySelector(".container").getBoundingClientRect();
        let submitReact = submitRef.getBoundingClientRect();
        let offset = submitReact.left - containerReact.left;
        console.log(offset);
        //If the button is on the left hand side..move it to the right hand side
        if(offset <= 100){
            submitRef.style.transform = "translateX(16.25em)";
        }
        //vice versa
        else{
            submitRef.style.transform = "translateX(0)";
        }
        
    }
});
submitRef.addEventListener("click", ()=>{
    messageRef.style.visibility= "visible";
});