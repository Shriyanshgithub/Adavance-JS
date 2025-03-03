const array = [400023 , 400088 , 253474573, 123456 , "A400088","4000@88B","400 088"]

let pinRegex =  RegExp('^[0-9 ]{6,}$');

const validPinCode = (pincode) =>{
    if(pinRegex.test(pincode)){
        console.log("valid pincode : " + pincode);
    }
    else{
        console.log("invalid pincode : " + pincode)
    }
}

for(let i = 0 ; i< array.length ; i++){
    validPinCode(array[i]);
}