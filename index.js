var numberDrumBtns = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberDrumBtns; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", 
    function () {
        var buttonText = this.innerHTML;
        playKey(buttonText);
        animateKey(buttonText);
    });
}

document.addEventListener("keydown", function(event) {
    playKey(event.key);
    animateKey(event.key)
});

function playKey (key) {
    switch (key) {
        case "w":
            var audioW = new Audio('sounds/crash.mp3');
            audioW.play();
            break;
        case "a":
            var audioA = new Audio('sounds/kick-bass.mp3');
            audioA.play();
            break;    
        case "s":
            var audioS = new Audio('sounds/snare.mp3');
            audioS.play();
            break; 
        case "d":
            var audioD = new Audio('sounds/tom-1.mp3');
            audioD.play();
            break;
        case "j":
            var audioJ = new Audio('sounds/tom-2.mp3'); 
            audioJ.play();
            break;
        case "k":      
            var audioK = new Audio('sounds/tom-3.mp3');
            audioK.play();
            break;
        case "l":
            var audioL = new Audio('sounds/tom-4.mp3');
            audioL.play();
            break;
        default:
            console.log(key);        
    }
}

function animateKey (key) {
    var activeBtn = document.querySelector("." + key);
    activeBtn.classList.add("pressed");
    setTimeout(function() {
        activeBtn.classList.remove("pressed");
    }, 100);
}