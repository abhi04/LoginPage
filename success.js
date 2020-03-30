function validateform(){
var name=document.myform.username.value;
var password=document.myform.password.value;
console.log(password);
var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;

if(name.length<4 || name.length>15){
  alert("Name should be greater then 4 charcaters and less then 15 characters");
  return false;
}
else{
if(password.length<8 || password.length>16 ){
  alert("Password length should be greater then 8 or less then 16 characters");
  return false;}
else{
if(password.match(lowerCaseLetters) && password.match(upperCaseLetters) && password.match(numbers) ){

   return true;
}
else{
  alert("Password must contain Lowercase,Uppercase and Number");
   return false;
}

}
}
}
