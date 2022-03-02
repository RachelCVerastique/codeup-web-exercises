// function sayHello(name) {
//     return 'Hello, ' + name + '!';
// }
//
//
// //console.log(sayHello('mom'));
//
//
// const sayHello = (name) => { 'Hello, ' + name + '!' }
//
//
//
//
// #2
// const sayHello = name => { 'Hello, ' + name + '!' }
//
//
// const sayHello = (name) => `Hello, ${name}!`
//
//
//
// console.log(sayHello('mom'));

function countDuplicates(str) {
   if (str){
       let obj = {};
       for (let i = 0; i < str.length; i++) {
           if(obj[str[i]]) {
               obj[str[i]] += obj[str[i]];
           } else {
               obj[str[i]] = 1;
           }

       }
       console.log(obj);
   }
}

console.log(countDuplicates("abcabcsdfghjkkjhgfdsartyfghsdf"));