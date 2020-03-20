// This is the start of my password generator
// the prompt will determine the lenght and makeup of the password

var numOfChar= prompt("How many charactors would you like your password to be?")

var charQuestion= confirm("Would you like special characters?")

var numQuestion= confirm("Would you like numbers?")

// These are the characters available for the password

var characters=["#","@","$","%","*"]

var numbers=[1,2,3,4,5,6,7,8,9,0]

var letters=["a","b","c","d","e","f","g,","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var selected=[]

// If else statements to determine the actual makeup of the password

if(charQuestion&&numQuestion){
    selected=[]
    selected=numbers.concat(characters,letters);
    console.log(selected);

}else if(charQuestion){
    selected=characters.concat(letters);
    console.log(selected);

}else{
    selected= numbers.concat(letters);
    console.log(selected);
}

// Random number generator 

var results=[]
for (var i=0;i<numOfChar;i++){
    results.push(selected[Math.floor(Math.random() * selected.length)]);
}
console.log(results);

// This displays the new generatred password

alert(results);

