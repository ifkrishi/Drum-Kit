for(var i = 0; i < document.getElementsByClassName("drum").length; i++){
    document.getElementsByClassName("drum")[i].addEventListener("click", function () {
        var element = this.innerHTML;
        makeSound(element);
        buttonAnimation(element);
    });
    document.addEventListener("keydown", function(event){
        makeSound(event.key);
        buttonAnimation(event.key);

    });
}


function makeSound(key){
    switch(key){
        case("w"):
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case("a"):
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case("s"):
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case("d"):
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case("j"):
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case("k"):
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case ("l"):
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
        default:
            console.log("You are pressing a wrong key. Plz refresh and use the right one only.");
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}