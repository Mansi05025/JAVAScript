// only const and let are used not used var in js
const accountId = 32144
let accountEmail = "mansiamrute@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2    // not allowed

accountEmail = "haui@.com"
accountPassword = "23144"
accountCity = "Benglauru"




console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log([accountEmail, accountId, accountPassword, accountCity, accountState]);











