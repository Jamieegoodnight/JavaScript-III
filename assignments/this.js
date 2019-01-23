/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is the principle that the "this" keyword, by itself, without scope, will reference the console/is global. 
* 2. Implicit binding is the principle that when using "this.example", the "this" implicitly refers to the object (look to its left).
* 3. New binding refers to the usage of constructor functions and creating new instances of that function with the keyword new.
* 4. Explicit binding uses call, apply, and bind to get objects to refer to different object instead. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const cat= {
    breed: "Sphinx",
    furry: "not",
    isItFurry: function(){
        console.log(`A ${this.breed} is ${this.furry} furry.`);
    }
}

// Principle 3

// code example for New Binding

function Kitties(obj){
    this.name=obj.name;
    this.sweetlittletoebeans=obj.sweetlittletoebeans;
    }
    
    Kitties.prototype.meow=function(){
      console.log(`${this.name} meows!`);
    }
    
    const persian=new Kitties({
        name: "Persian",
        sweetlittletoebeans: true
    });
    
// Principle 4
    
// code example for Explicit Binding
    
    const amputeekitty=new Kitties({
        name: "Amputee Kitty",
        sweetlittletoebeans: false
    });
    
    persian.meow();
    amputeekitty.meow.call(persian);
    