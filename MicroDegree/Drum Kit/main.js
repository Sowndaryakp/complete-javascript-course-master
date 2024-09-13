const drumLength = document.querySelectorAll(".drum").length;
console.log(drumLength);

for(let i = 0; i< drumLength; i++){
    document
    .querySelectorAll(".drum")
    [i].addEventListener("click",function(e){
        makeNoise(this.innerHTML);
        animatingButtons(this.innerHTML);
    });
}

function makeNoise(key){
    switch(key){
        case "w":
            const w = new Audio("sounds/w.mp3");
            w.play();
            break;
        case "a":
            const a = new Audio("sounds/a.mp3");
            a.play();
            break;
        case "s":
            const s = new Audio("sounds/s.mp3");
            s.play();
            break;
        case "d":
            const d = new Audio("sounds/d.mp3");
            d.play();
            break;
        case "j":
            const j = new Audio("sounds/j.mp3");
            j.play();
            break;
        case "k":
            const k = new Audio("sounds/k.mp3");
            k.play();
            break;
        case "l":
            const l = new Audio("sounds/l.mp3");
            l.play();
            break;
        default:
            console.log(key);
    }
}

function animatingButtons(key){
   const activeButton = document.querySelector(`.${key}`);
   console.log(activeButton);
   activeButton.classList.add("pressed");
   setTimeout(() => {
    activeButton.classList.remove("pressed");
   },500);
}