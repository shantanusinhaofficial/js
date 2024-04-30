const myarr = [1,2,3,4,5,6]
// console.log(myarr);
const marvel = ["ironman","spiderman","thor"]
const dc = ["superman","batman","hulk"]
// marvel.push(dc)
// console.log(marvel);
const arr1 = marvel.concat(dc)
// console.log(arr1);
const allhero = [...marvel, ...dc]
// console.log(allhero);
const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realarray =anotherarray.flat(Infinity)
// console.log(realarray);
