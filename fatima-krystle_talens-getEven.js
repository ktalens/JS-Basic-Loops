//Get Even

for (var i=0; i<=200; i+=2){
    console.log(i)
}


//Excited Kitten
var catSays = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "meow?", "...why does the red dot always get away..."]

for (var i=1; i<=10; i++){
    if (i%2===0){
      console.log(catSays[Math.floor(Math.random()*(catSays.length-1))])}
    else {console.log("Love me, pet me! HSSSSSS!")}
}

//Thermostat
var currentTemp = Math.floor(Math.random()*(100))
var desiredTemp = 68

console.log("The current temperature is "+currentTemp+"F")

var i=currentTemp
while (i!==desiredTemp){
  if (i>desiredTemp){
    i--;
    console.log("The current temperature is now "+i+"F")
    } else if (i<desiredTemp){
    i++;
    console.log("The current temperature is now "+i+"F")
    }
  }

//FizzBuzz
for(let i =1; i <= 100; i++){
    if(i%3 === 0 && i%5 ===0){
          console.log("FizzBuzz")
      } else if (i%3 === 0){
      console.log("Fizz")
    } else if (i%5 === 0){
      console.log("Buzz")
    } else {
      console.log(i)
    }
  }

//Bonus
  var phoneBook = {
    "Abe": "111-111-1111",
    "Bob": "222-222-2222",
    "Cam": "333-333-3333",
    "Dan": "444-444-4444",
    "Ern": "555-555-5555",
    "Fry": "111-111-1111",
    "Gil": "222-222-2222",
    "Hal": "333-333-3333",
    "Ike": "444-444-4444",
    "Jim": "555-555-5555",
    "Kip": "111-111-1111",
    "Liv": "222-222-2222",
    "Mia": "333-333-3333",
    "Nik": "444-444-4444",
    "Oli": "555-555-5555",
    "Pam": "111-111-1111",
    "Qiq": "222-222-2222",
    "Rob": "333-333-3333",
    "Stu": "444-444-4444",
    "Tad": "555-555-5555",
    "Uwe": "111-111-1111",
    "Val": "222-222-2222",
    "Wil": "333-333-3333",
    "Xiu": "444-444-4444",
    "Yam": "555-555-5555",
    "Zed": "111-111-1111"
  };
  
  for (var person in phoneBook){
      if(phoneBook[person]==="333-333-3333"){
          console.log(person)
      }
  }