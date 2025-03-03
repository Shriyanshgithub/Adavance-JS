let emailRegex = /^abc.*@bridgelabz/

validEmail = (email)=>{
    if(emailRegex.test(email)){
        return true;
    }
    else{
        return false;
    }
};

console.log(`${validEmail("abc.xyz@bridgelabz.co.in") ? "valid email" : "invalid email"}`);