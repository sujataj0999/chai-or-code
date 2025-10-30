const accountId = 550067
let accountEmail = "sujata@google.com"
var accountPassword = "12345" 
accountCity = "Jajpur"
let accountState;

//accountId = 4 // not allowed

console.log(accountId);
/* prefer not use Var 
because of issue in block scope and funtionnal scope */
accountEmail = "abc@gmail.com"
accountPassword = "358759u598"
accountCity = "westbengal"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
