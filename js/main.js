var emailvalue = document.getElementById("exampleInputEmail1")
var emailpassword = document.getElementById("exampleInputPassword1")
var phonenumber = document.getElementById("phonenumber")
var newemailpassword = document.getElementById("password")
var currentlypassword = document.getElementById("newpasswordd")

let phoneenumberr = 1551246422
let emaillpassword = 123456789
var username ="emelnassar"
emaillpassword=localStorage.getItem('products')
$(".exiticon").click(function(){
    $('.card').css('display','none')
    $('h1').css('color','red')
    
})
$("#submit").click(function(){
 emailname = emailvalue.value
 emailpass = emailpassword.value
 console.log(emailname)
 console.log(emailpass)
if(emailname==username && emailpass==emaillpassword){
    $(".mainprofilepage").css("display","flex")
    $(".layer").css("display","none")
    console.log(emailname)
    
}})
$('.btnlogout').click(function(){
    $(".mainprofilepage").css("display","none")
    $(".layer").css("display","flex")
    clearproduct()

})
$("#newpassword").click(function(){
    $(".newpass").css("display","flex")
})
function clearproduct(){
    emailvalue.value=""
    emailpassword.value=""
   }
$("#newpasswords").click(function(){
    phonenumberowner = phonenumber.value
    console.log(phoneenumberr)
    if(phoneenumberr == phonenumberowner){
        emaillpassword = newemailpassword.value
        localStorage.setItem('products',emaillpassword)

        console.log(emaillpassword)
    $(".newpass").css("display","none")
    }
})
