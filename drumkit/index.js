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
keys.forEach(key => {
    key.addEventListener("click", function() {
        
        let keyText = this.querySelector("h2").textContent;
        let soundFile = sounds[keyText]; 
        
        if (soundFile) {
            let audio = new Audio(soundFile);
            audio.play(); 
        }


        this.classList.add('playing')
        setTimeout(() => {
            this.classList.remove("playing");
        }, 100);
    });
});
