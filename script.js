// ____________________________________________
//        Object-Oriented Programming (OOP)
// ____________________________________________

class Pet {
    constructor(name, sound, image) {
      this.name = name;
      this.sound = sound;
      this.image = image;
      this.playCount = 0;
    }
  
    speak() {
      alert(this.sound);
    }
  
    play() {
      this.playCount++;
      this.speak();
      updateCounter(this.playCount);
      showFunActions(this.name);
    }
  }
  
  // Global variable to store the chosen pet
  let currentPet = null;
  
  // ____________________________________________
  //        Function to choose a pet
  // ____________________________________________
  function choosePet(type) {
    if (type === 'dog') {
      currentPet = new Pet('Dog', 'Woof! 🐶', 'dog.jpeg');
    } else {
      currentPet = new Pet('Cat', 'Meow! 🐱', 'cat.jpeg');
    }
  
    document.getElementById('petImage').src = currentPet.image;
    document.getElementById('game').style.display = 'block';
    updateCounter(0);
    showFunActions(currentPet.name);
  }
  
  // ____________________________________________
  //        Function to play with the pet
  // ____________________________________________
  function playWithPet() {
    if (currentPet) {
      currentPet.play();
    }
  }
  
  // ____________________________________________
  //        Function to update the counter
  // ____________________________________________
  function updateCounter(count) {
    document.getElementById('counter').innerText = `Times played: ${count}`;
  }
  
  // ____________________________________________
  //        Function + Loop: Fun pet actions
  // ____________________________________________
  function showFunActions(petName) {
    const actions = petName === 'Dog'
      ? ['Bark', 'Wag Tail', 'Fetch Ball']
      : ['Meow', 'Purr', 'Chase Mouse'];
  
    const actionBox = document.getElementById('actions');
    actionBox.innerHTML = '<strong>Fun Actions:</strong><br>';
  
    // Loop through actions and show them
    for (let i = 0; i < actions.length; i++) {
      actionBox.innerHTML += '✅ ' + actions[i] + '<br>';
    }
  }
  
