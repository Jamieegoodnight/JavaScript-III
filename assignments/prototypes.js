/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

function GameObject(obj){
  this.createdAt=obj.createdAt;
  this.dimensions=obj.dimensions;
}

GameObject.prototype.destroy=function(){
  return `${this.name} was removed from game.`
};

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(charobj){
  GameObject.call(this, charobj);
  this.healthPoints=charobj.healthPoints;
  this.name=charobj.name;
}

CharacterStats.prototype=Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage=function(){
  return `${this.name} took damage.`
};

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(humobj){
  CharacterStats.call(this, humobj);
  this.team=humobj.team;
  this.weapons=humobj.weapons;
  this.language=humobj.language;
}

Humanoid.prototype=Object.create(CharacterStats.prototype);

Humanoid.prototype.greet=function(){
  return `${this.name} offers a greeting in ${this.language}.`
};
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

// I didn't use the inheritancy from Humanoids, I just created my own constructor function (Super) and did it that way! I hope that's okay, since I still did use inheritancy and met the other criteria. 

  function Super(obj){
    this.name=obj.name;
    this.health=obj.health;
    this.energy=obj.energy;
  }
  
  Super.prototype.recover=function(){
    this.health += .2;
    this.energy += .2;
    console.log(`${this.name} tries to catch their breath!`)
    return `Health: ${this.health}, Energy: ${this.energy}`
  };
  
  function Villain(vilobj){
    Super.call(this, vilobj);
  }
  
  Villain.prototype=Object.create(Super.prototype);
  
  Villain.prototype.suprememegameltinglaser=function(target){
    this.energy -= .3;
    target.health -= .3;
    if (target.health>0){
      console.log (`Giga Annihilator 10,000 used their Supreme Mega Melting Laser! ${target.name} only has ${target.health} health left!`)
    } else {
      console.log(`Giga Annihilator 10,000 melted ${target.name}!`)
    };
    
  };
  
  function Hero(herobj){
    Super.call(this, herobj);
  }
  
  Hero.prototype=Object.create(Super.prototype);
  
  Hero.prototype.peacefulFistOfDestruction=function(target){
    this.energy -= .2;
    target.health -= .2;
    if (target.health>0){
      console.log (`The Peaceful Fist peacefully hits foe with a Peaceful Fist of Destruction! ${target.name} only has ${target.health} health left!`)
    } else {
      console.log(`The Peaceful Fist knocked ${target.name}'s head off!'`)
    };
  };
  
  
  const gigaAnnihilator10000=new Villain({
    name: "Giga Annihilator 10,000",
    health: 1.0,
    energy: 1.0
  });
  
  const theFistOfPeace=new Hero({
    name: "The Fist of Peace",
    health: 1.0,
    energy: 1.0
  });
  
  
  console.log(theFistOfPeace);
  
  theFistOfPeace.peacefulFistOfDestruction(gigaAnnihilator10000);
  console.log(gigaAnnihilator10000);
  theFistOfPeace.peacefulFistOfDestruction(gigaAnnihilator10000);
  theFistOfPeace.peacefulFistOfDestruction(gigaAnnihilator10000);
  console.log(gigaAnnihilator10000);
  theFistOfPeace.peacefulFistOfDestruction(gigaAnnihilator10000);