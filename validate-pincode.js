const array = [400023 , 400088 , 253474573, 123456]

let pinRegex = new RegExp('^[0-9]{6}$');

function validatePincode(pincode){
 if(pinRegex.test(pincode)) return true;
 return false;
}
console.log(array.filter(validatePincode))