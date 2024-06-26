$(".drum").click(function () {
    var buttonInnerHTML = this.innerHTML;
    MakeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});

$(document).keypress(function (event) {
    MakeSound(event.key)
    buttonAnimation(event.key)
})

function MakeSound(key) {
    switch (key) {
        case "a":
            var tom1 = new Audio('./sounds/tom-1.mp3')
            tom1.play()
            break;
        case "s":
            var tom2 = new Audio('./sounds/tom-2.mp3')
            tom2.play();
            break;
        case "d":
            var tom3 = new Audio('./sounds/tom-3.mp3')
            tom3.play();
            break;
        case "f":
            var tom4 = new Audio('./sounds/tom-4.mp3')
            tom4.play();
            break;
        case "j":
            var snare = new Audio('./sounds/snare.mp3')
            snare.play();
            break;
        case "k":
            var crash = new Audio('./sounds/crash.mp3')
            crash.play();
            break;
        case "l":
            var kick = new Audio('./sounds/kick-bass.mp3')
            kick.play();
        default: console.log(key)
    }
}

function buttonAnimation(currentKey) {
    $("." + currentKey).addClass("pressed")
    setTimeout(function () {
        $("." + currentKey).removeClass("pressed")
    }, 100);
}