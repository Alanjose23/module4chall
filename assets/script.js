// Assignment Code
var generateBtn = document.querySelector("#generate");
var lettersU = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lettersL= []
for(let letter of lettersU){
  lettersL.push(letter.toLowerCase());
}
var numbers = ['1', '2','3','4','5','6','7','8','9','0'];
var specialcar = ['~','!','@', '#', '$', '%','^','&','*','(',')','_','-','+','=','{','[','}',']','|',':',';','<','>','.','?','/'];

var passwordarr = [];
var generatorarr = [];

function generaterandomnum() {
    var arrayval = Math.floor(Math.random() * (generatorarr.length));
    return arrayval;
}
function generatePassword(){
// prompt user for password criteria
var passuess = window.prompt("do you want a new password", "yes");
var length = window.prompt("What is your password length (has to be between 8-128)");
var specpass = window.prompt("do you want special characters (yes or no)",'yes');
var numpass = window.prompt("do you want numbers in password (yes or no)", "yes");
var upperpass = window.prompt("do you want uppercase characters (yes or no)", "yes");
var lowerpass = window.prompt("do you want lowercase characters (yes or no)", "yes");
if (passuess === 'yes' && length > 7 && length < 129) {

if (specpass === "yes"&&numpass === "yes"&&upperpass === "yes"&&lowerpass === "yes") {
generatorarr = lettersL.concat(lettersU).concat(numbers).concat(specialcar);
for(var i = 0; i < length;i++){
var password1 = generatorarr[generaterandomnum()];
passwordarr.push(password1);
}
var finalpass = passwordarr.join('');
return finalpass;
}
else if(specpass === "no"&&numpass === "yes"&&upperpass === "yes"&&lowerpass === "yes"){
generatorarr = lettersL.concat(lettersU).concat(numbers);
for(var i = 0; i < length;i++){
var password1 = generatorarr[generaterandomnum()];
passwordarr.push(password1);
}
var finalpass = passwordarr.join('');
return finalpass;
}
else if(specpass === "yes"&&numpass === "no"&&upperpass === "yes"&&lowerpass === "yes") {
    generatorarr = lettersL.concat(lettersU).concat(specialcar);
    for(var i = 0; i < length;i++){
    var password1 = generatorarr[generaterandomnum()];
    passwordarr.push(password1);
    }
    var finalpass = passwordarr.join('');
    return finalpass;
}
else if(specpass === "no"&&numpass === "no"&&upperpass === "yes"&&lowerpass === "yes") {
    generatorarr = lettersL.concat(lettersU);
    for(var i = 0; i < length;i++){
    var password1 = generatorarr[generaterandomnum()];
    passwordarr.push(password1);
    }
    var finalpass = passwordarr.join('');
    return finalpass;
}
else if(specpass === "yes"&&numpass === "yes"&&upperpass === "no"&&lowerpass === "yes") {
    generatorarr = lettersL.concat(numbers).concat(specialcar);
    for(var i = 0; i < length;i++){
    var password1 = generatorarr[generaterandomnum()];
    passwordarr.push(password1);
    }
    var finalpass = passwordarr.join('');
    return finalpass;
}
else if(specpass === "yes"&&numpass === "yes"&&upperpass === "yes"&&lowerpass === "no") {
    generatorarr = lettersU.concat(numbers).concat(specialcar);
    for(var i = 0; i < length;i++){
    var password1 = generatorarr[generaterandomnum()];
    passwordarr.push(password1);
    }
    var finalpass = passwordarr.join('');
    return finalpass;
}
else if(specpass === "yes"&&numpass === "yes"&&upperpass === "no"&&lowerpass === "no") {
    generatorarr = numbers.concat(specialcar);
    for(var i = 0; i < length;i++){
    var password1 = generatorarr[generaterandomnum()];
    passwordarr.push(password1);
    }
    var finalpass = passwordarr.join('');
    return finalpass;
}
else if(specpass === "no"&&numpass === "yes"&&upperpass === "yes"&&lowerpass === "no") {
    generatorarr = lettersU.concat(numbers);
    for(var i = 0; i < length;i++){
    var password1 = generatorarr[generaterandomnum()];
    passwordarr.push(password1);
    }
    var finalpass = passwordarr.join('');
    return finalpass;
}
else if(specpass === "yes"&&numpass === "no"&&upperpass === "no"&&lowerpass === "yes") {
    generatorarr = lettersL.concat(specialcar);
    for(var i = 0; i < length;i++){
    var password1 = generatorarr[generaterandomnum()];
    passwordarr.push(password1);
    }
    var finalpass = passwordarr.join('');
    return finalpass;
}
else if(specpass === "no"&&numpass === "no"&&upperpass === "no"&&lowerpass === "yes") {
    generatorarr = lettersL;
    for(var i = 0; i < length;i++){
    var password1 = generatorarr[generaterandomnum()];
    passwordarr.push(password1);
    }
    var finalpass = passwordarr.join('');
    return finalpass;
}
else if(specpass === "yes"&&numpass === "no"&&upperpass === "no"&&lowerpass === "no") {
    generatorarr = specialcar;
    for(var i = 0; i < length;i++){
    var password1 = generatorarr[generaterandomnum()];
    passwordarr.push(password1);
    }
    var finalpass = passwordarr.join('');
    return finalpass;
}
else if(specpass === "no"&&numpass === "yes"&&upperpass === "no"&&lowerpass === "no"){
    generatorarr = numbers;
    for(var i = 0; i < length;i++){
    var password1 = generatorarr[generaterandomnum()];
    passwordarr.push(password1);
    }
    var finalpass = passwordarr.join('');
    return finalpass;
}
else if(specpass === "no"&&numpass === "no"&&upperpass === "yes"&&lowerpass === "no") {
    generatorarr = lettersU;
    for(var i = 0; i < length;i++){
    var password1 = generatorarr[generaterandomnum()];
    passwordarr.push(password1);
    }
    var finalpass = passwordarr.join('');
    return finalpass;
}
else if(specpass === "yes"&&numpass === "no"&&upperpass === "yes"&&lowerpass === "no"){
    generatorarr = lettersU.concat(specialcar);
    for(var i = 0; i < length;i++){
    var password1 = generatorarr[generaterandomnum()];
    passwordarr.push(password1);
    }
    var finalpass = passwordarr.join('');
    return finalpass;
}
else if(specpass === "no"&&numpass === "yes"&&upperpass === "no"&&lowerpass === "yes"){
    generatorarr = lettersL.concat(numbers);
    for(var i = 0; i < length;i++){
    var password1 = generatorarr[generaterandomnum()];
    passwordarr.push(password1);
    }
    var finalpass = passwordarr.join('');
    return finalpass;
}
else{
    window.alert("please reenter prompts, password is invalid")
}
}
else {
    window.alert("please select yes for the new password prompt");
}
// password length 8-128
//lowercase uppercase special characters, numbers
//validate input
//generate password
//display password
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
