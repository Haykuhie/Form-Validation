//Selectors

const form = document.getElementById('form')
const userName = document.getElementById('uname')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const comment = document.getElementById('comment')
const Submit = document.getElementById('btn')


Submit.addEventListener('click', (e)=>{
    e.preventDefault();
    checkInputs()
} )

function checkInputs(){
     //username validation

    if(userName.value.trim()==''){
        //add error class
        userName.parentElement.className='error'

        //showing error by error text and error icon
        form.querySelector('.small1').innerText='Username is a mandatory field'
        //checking the length of username field
    }else if(userName.value.trim().length<5 ||userName.value.trim().length>20){
        userName.parentElement.className='error'
        //showing error by error text and error icon
        form.querySelector('.small1').innerText='Username length can not be shorter than 5 and longer than 20elements'
        //valid username
    }else{
        userName.parentElement.className='success'        
    }

  //email validation
  if(email.value.trim()==''){
    //add error class
    email.parentElement.className='error'
    form.querySelector('.small2').innerText='Email is a mandatory field'
}else{
    email.parentElement.className='success'
}

// phone number validation

if(phone.value.trim()==''){
    //add error class
    phone.parentElement.className='error'
    form.querySelector('.small3').innerText='Phone number is a mandatory field'
}else if(phone.value.trim().length>15){
    //showing error by error text and error icon
    phone.parentElement.className='error'    
    form.querySelector('.small3').innerText='Phone number can not have more than 15 digits'
    //valid phone number
}else {
    phone.parentElement.className='success'
}

// comment length setting
if(comment.value.trim()==''){
    //add error class
    comment.parentElement.className='error'
    form.querySelector('.small4').innerText='You should write something'
}else if(comment.value.trim().length>200){    
    //showing error by error text and error icon
      
    form.querySelector('.small4').innerText='You can write maximum of 200 characters'
    comment.parentElement.className='error'  
    //valid phone number
}else{
    comment.parentElement.className='success'
}

 // checking if all fields are filled correctly and clearing the fields
 if(userName.parentElement.className=='success'  &&
    email.parentElement.className=='success' &&
    phone.parentElement.className=='success' &&
    comment.parentElement.className=='success'){
        
    userName.value==''
    email.value==''
    phone.value==''
    comment.value==''
 }




}
   


