var signUpSpan=document.querySelector('#SignUPspan');
var signupContainer=document.querySelector('.signup');
var signinContainer=document.querySelector('.login')
var signinSpan=document.querySelector('#SignInSpan')
var nameInput=document.querySelector('#registName')
var emailRegInput=document.querySelector('#registEmail')
var passwordRegInput=document.querySelector('#registPassword')
var signUpBTN=document.querySelector('#signUp')
var succsesSpan=document.querySelector('#success')
var warningSpan=document.querySelector('#warningReg')
var warningSpanLogin=document.querySelector('#warning')
var emailSignInInput=document.getElementById('loginEmail')
var passwordSignInInput=document.getElementById('loginPassword')
var loginBTN=document.getElementById('login')
var welcomContainer=document.querySelector('.welcome')
var userName=document.getElementById('nameUser')
////////////////////Switch///////////////////////////
signUpSpan.addEventListener('click',function (eventInfo) {
    signinContainer.classList.add('d-none')
    signupContainer.classList.replace('d-none','d-block')
})
signinSpan.addEventListener('click',function (eventInfo) {
    signinContainer.classList.replace('d-none','d-block')
    signupContainer.classList.replace('d-block','d-none')
})
///////////////////////////////////////////////////////
//Regist///
var rigestArry=[];
if(JSON.parse(localStorage.getItem('user'))!=null){
    rigestArry=JSON.parse(localStorage.getItem("user"))
}
else{
    rigestArry=[];
}
function Regist() {
    if(nameInput.value==''||emailRegInput.value==''||passwordRegInput.value==''){
        warningSpan.innerHTML='All Input Requird'}
    else if(isEmailExist()==false){
        warningSpan.innerHTML='email is already exists'
    }
    else{
    var userRigest={
        name:nameInput.value,
        email:emailRegInput.value,
        password:passwordRegInput.value
    }
    rigestArry.push(userRigest)
    localStorage.setItem('user',JSON.stringify(rigestArry))
    succsesSpan.innerHTML='Completed'}
}

signUpBTN.addEventListener('click',function (eventInfo) {
    Regist();
})
function isEmailExist() {
    for (var i = 0; i < rigestArry.length; i++) {
        if (rigestArry[i].email.toLowerCase() == emailRegInput.value.toLowerCase()) {
            return false
        }
    }
}
loginBTN.addEventListener('click',function () {
    for(let i=0;i<rigestArry.length;i++){
        if(rigestArry[i].email.toLowerCase() == emailSignInInput.value.toLowerCase() && rigestArry[i].password == passwordSignInInput.value.toLowerCase()){
            signinContainer.classList.add('d-none')
            welcomContainer.classList.replace('d-none','d-block')
            userName.innerHTML='welcome'+' '+rigestArry[i].name
        }else{
            warningSpanLogin.innerHTML='Invalid username or password'
        }
    }
})