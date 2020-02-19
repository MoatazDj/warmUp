//1. Write a JavaScript function to check whether an `input` is an array or not
// ex isArray([1,2])=>true
<<<<<<< HEAD
//    isArray(5)=>false 
function check(array) {
    if (Array.isArray(array)) {
        return true;
    }
    return false;
=======
//    isArray(5)=>false
function isArray(input) {
    if (Array.isArray(input)) {
        return true;
    }
    else {
        return false;
    }
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
}
//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
//    first([1,2,3,4]2)=>[1,2]
function first(array, n) {
<<<<<<< HEAD
    var result = [];
    if (n === 1 ) {
      return array[0];
    }
    var m;
    if (array.length < n) {
      m = array.length;
    } else {
      m = n;
    }
      for (var i = 0; i < m; i++) {
      result.push(array[i]);
    } return result;
}

=======
    var arr = [];
    if (n >= array.length) {
        arr = array;
    }
    else if (n < 0) {
        return "Please enter a positif number"
    }
    else {
        for (var i = 0; i < n; i++) {
            arr.push(array[i]);
        }
    }
    return arr;
}
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
//3- Write a JavaScript function to convert an object into a list of `[key, value]` pairs
//ex: convert({name:'ahmed',age:20})=>[['name','ahmed'],['age', 20]]
function convert (coll){
    var acc=[];
    var acc1=[];
    var acc2=[];
    acc1.push(Object.keys(coll));
    acc2.push(Object.values(coll));
    acc.push(acc1, acc2)
    return acc;  
} 