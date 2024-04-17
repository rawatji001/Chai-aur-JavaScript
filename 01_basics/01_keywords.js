const accountId = 12345;
let account_Name = "Roshan";
var accountEmail = "rr@gmail.com";

accountAddress = "Delhi"; //also define like this but it is wrong way to declare variables---------

console.log(accountId);
console.table([accountId, account_Name, accountEmail, accountAddress]); //we can print like this for print tablular structure--------

//accountId = 746484; // showing error we can't change const---------

account_Name = "Rawat";
accountEmail = "rrhsjhs@";
accountAddress = "Noida";
let account_ph; //undifined-------

console.table([
  accountId,
  account_Name,
  accountEmail,
  accountAddress,
  account_ph,
]);


/*
don't use var because of scope issues------
*/