
// let i = 1
//
//     while( i < 65536) {
//         console.log(i *= 2);
// }


let allCones = Math.floor(Math.random() * 50) + 50;
let conesSold;
do {

    conesSold =  Math.floor(Math.random() * 5) + 1;
    console.log(conesSold)
    if (conesSold > allCones){
        console.log("No more " + conesSold)
    }

    allCones-= conesSold;
    console.log("There are " + allCones + " left")
} while(allCones < 0);
