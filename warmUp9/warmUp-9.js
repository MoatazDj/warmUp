// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 
<<<<<<< HEAD
var females = ['Nouha', 'Siwar', 'Halema','Hadhemi','Safa']
var males = ['Amir','Wale', 'Aymen']
var instructors = ['Matt', 'Walid', 'Cassels']
// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middle(array) {
    return array[Math.round((array.length - 1) / 2)];
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function multiplyEvenNums(array) {
    var acc = []
    for (let i = 0; i < array.length; i++) {
        if(array[i]=i%2===0){
            array[i] * 2
            acc.push(array[i])
        }
        return acc;
    }
=======

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

<<<<<<< HEAD
function middleArray(array) {
    if (array.length % 2 !== 0) {
        return array[(Math.floor(array.length / 2))];
    }
    else {
        return "Enter an array with an odd length."
    }
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.

function doubledEvenIndexes(array) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            arr.push(array[i] * 2);
        }
    }
    return arr;
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
}
=======
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
