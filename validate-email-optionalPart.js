const regex = /^abc([._+\\-]?[a-zA-Z0-9]+)?@bridgelabz\.co/;

validEmail = (email)=>{
    if(regex.test(email)){
        return true;
    }
    else{
        return false;
    }
};

console.log(`${validEmail("abc.xyz@bridgelabz.co.in") ? "valid email" : "invalid email"}`);