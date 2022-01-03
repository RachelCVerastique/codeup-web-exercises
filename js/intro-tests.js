

function count(input) {
   //"check to make sure inout is a string"
   if (typeof input === "string") {
      return input.length;
   } else {
      return false;
   }

}

console.log(count("Im sleepy")) === 9;

console.log(typeof count("Im sleepy"))

console.log(count(9) ===false);