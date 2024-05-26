

function saymyname (){
    console.log("shantanu");
}
// saymyname()

function add(number1,number2){
    // console.log(number1+number2);
    let result = number1+number2
    return result
}
const result = add(3,4)
// console.log(result ,"result");

function loginuser(username){
    if(username=== undefined){
        console.log("plzz enter username");

    }
    return '${username} justlogin'
}
console.log(loginuser());