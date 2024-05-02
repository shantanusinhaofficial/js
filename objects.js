//singelton
// object litral = declering object 
// Object.create()
const jsUser = {
    name: "shantanu",
    age: 18,
   location: "noida",
   isloggedin: false
}
// console.log(jsUser.location);
// console.log(jsUser["name"]);
jsUser.greeting = function(){
    console.log('hello js user,${this.name}');
}
console.log(jsUser.greeting());
const newarr = [1,2,3,4,5,[1,5,4],[1,5,8]]
// console.log(newarr.flat(Infinity));
// console.log(newarr.slice(3));