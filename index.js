$(".btn").click(function (e) {
    makeSound(this.id);   
    $(this).addClass("pressed");
    setTimeout(() => {
        $(".btn")        
    }, 1000);
    $(this).removeClass("pressed");

});

function makeSound(btn){

    switch (btn) {
        case "blue":
            var sound = new Audio("sounds/blue.mp3")
            sound.play();            
            break;
    
        case "green":
            var sound = new Audio("sounds/green.mp3")
            sound.play();            
            break;
    
        case "red":
            var sound = new Audio("sounds/red.mp3")
            sound.play();            
            break;
    
        case "yellow":
            var sound = new Audio("sounds/yellow.mp3")
            sound.play();            
            break;
    
        default:
            break;
    }
}