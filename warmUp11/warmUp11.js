/*
1. create a data model to represent your classmates
    • think of different attributes of your classmates? what do all of them have ?
    • create a factory function.
    • create an array to hold the classmates that you created and what you created to it .
    • write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
    • write a function called addFriend that takes a mate as an argument and add it to you classMates array.
    • calculate the number of male friends that your class have by writing a function called nbOfMale.
    • Write a function searchMates that, given a query and an array of Mates,
      searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
*/

<<<<<<< HEAD
function factoryClassMates(firstname, lastname, gender, attributes) {
  return {
    Firstname: firstname,
    Lastname: lastname,
    Gender: gender,
    Attributes: attributes
  };
}

var classMates = [{friend1: factoryClassMates("Amir",  "Ben Youssef",  "male",   "Hard worker")},
   {friend2: factoryClassMates("Aymen",  "Yaich",  "Male",   "Cocky")},
   {friend3: factoryClassMates ("Wala",  "Abdaoui", "Male",   "Courageous")},
   {friend4: factoryClassMates("Afif",  "Rakrouki", "Male",   "Funny")},
   {friend5:factoryClassMates("Nouha", "Chorfi", "female",   "Smart")},
   {friend6: factoryClassMates("Siwar",  "Hkimi",  "female",   "Good at solving problems")}
]

function displayFriend(mate) {
  return mate. Firstname + ' ' + mate.Lastname + ' ' + mate.Gender + ' ' + mate.Attributes
}

=======
function myClassMates(name, hair, gender, age, glasses) {
  return {
    name: name,
    hair: hair,
    gender: gender,
    age: age,
    glasses: glasses
  };
}

var houssem1 = myClassMates("Houssem", "Black", "Male", "30", true);
var houssem2 = myClassMates("Houssem", "Black", "Male", "19", false);
var nouha = myClassMates("Nouha", "Black", "Female", "33", true);
var taha = myClassMates("Taha", "Black", "Male", "40", true);
var souha = myClassMates("Souha", "Red", "Female", "23", false);
var classMates = [houssem1, houssem2, nouha, taha, souha];

function displayFriend(mate) {
  if (mate.gender === "Male") {
    if (mate.glasses === true) {
      return "My mate " + mate.name + " has a " + mate.hair + " hair " + " and he is " + mate.age + " years old.\n He also wears glasses.";
    }
    else {
      return "My mate " + mate.name + " has a " + mate.hair + " hair " + " and he is " + mate.age + " years old.\n He doesn't wear glasses.";
    }
  }
  else {
    if (mate.glasses === true) {
      return "My mate " + mate.name + " has a " + mate.hair + " hair " + " and she is " + mate.age + " years old.\n She also wears glasses.";
    }
    else {
      return "My mate " + mate.name + " has a " + mate.hair + " hair " + " and she is " + mate.age + " years old.\n She doesn't wear glasses.";
    }
  }
}

function addFriend(mate) {
  var arr = classMates.push(mate);

  return arr;
}

function nbOfMale(array) {
  var counter = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i].gender === 'Male') {
      counter = counter + 1;
    }
  }
  return counter;
}


function searchMates(query, array) {
  var arr = [];
  var str = "";

  for (var i = 0; i < array.length; i++) {
    arr = Object.keys(array[i]);
    for (var j = 0; j < arr.length; j++) {
      if ((arr[j].query !== undefined) && (arr[j].query === query)) {
        str = str + array[i]["name"] + "\n";
      }
    }
  }
  return str + "\n the people above match together.";
}

// I didn't verify the functions in the console because of the time so I think there exist plenty mistakes :'( especially the last one
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
