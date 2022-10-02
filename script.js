console.log("hi")

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


let myLibrary = [];

function Book() {
    // constructor

}

function addBookToLibrary() {
    // takes user input and stores new book objects into array (myLibrary)
}

// Write a function that loops through myLibrary array and displays each book on page


// Add a “NEW BOOK” button that brings up a form allowing users to input the details 
    // for the new book: author, title, number of pages, whether it’s been read and 
    // anything else you might want.
function Plant () {
    this.country = "Mexico";
    this.isOrganic = true;
    }
    
    // Add the showNameAndColor method to the Plant prototype property
    Plant.prototype.showNameAndColor =  function () {
    console.log("I am a " + this.name + " and my color is " + this.color);
    }
    
    // Add the amIOrganic method to the Plant prototype property
    Plant.prototype.amIOrganic = function () {
    if (this.isOrganic)
    console.log("I am organic, Baby!");
    }
    
    function Fruit (fruitName, fruitColor) {
    this.name = fruitName;
    this.color = fruitColor;
    }
    
    // Set the Fruit's prototype to Plant's constructor, thus inheriting all of Plant.prototype methods and properties.
    Fruit.prototype = new Plant ();
    
    // Creates a new object, aBanana, with the Fruit constructor
    var aBanana = new Fruit ("Banana", "Yellow");
    
    // Here, aBanana uses the name property from the aBanana object prototype, which is Fruit.prototype:
    console.log(aBanana.name); // Banana
    
    // Uses the showNameAndColor method from the Fruit object prototype, which is Plant.prototype. The aBanana object inherits all the properties and methods from both the Plant and Fruit functions.
    console.log(aBanana.showNameAndColor()); // I am a Banana and my color is yellow.