const sounds = {
    "A": "assets/sounds/clap.wav",
    "S": "assets/sounds/hihat.wav",
    "D": "assets/sounds/kick.wav",
    "F": "assets/sounds/openhat.wav",
    "G": "assets/sounds/boom.wav",
    "H": "assets/sounds/ride.wav",
    "J": "assets/sounds/snare.wav",
    "K": "assets/sounds/tom.wav",
    "L": "assets/sounds/tink.wav"
};


const keys = document.querySelectorAll(".key");

// Click event for mouse clicks
keys.forEach(key => {
    key.addEventListener("click", function() {
        playSound(this);
    });
});

// Keyup event for keyboard presses (Global)
document.addEventListener("keyup", function(event) {
    let keyText = event.key.toUpperCase(); // Convert to match key labels
    
    let keyElement = [...keys].find(key => key.querySelector("h2").textContent === keyText);
    console.log(keyElement)
    if (keyElement) {
        playSound(keyElement);
    }
});

// Function to play sound and animate
function playSound(element) {
    let keyText = element.querySelector("h2").textContent;
    let soundFile = sounds[keyText]; 

    if (soundFile) {
        let audio = new Audio(soundFile);
        audio.play(); 
    }

    // Add animation class
    element.classList.add('playing');
    setTimeout(() => {
        element.classList.remove("playing");
    }, 70);
}
