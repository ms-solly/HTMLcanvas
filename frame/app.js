class game{
    constructor(canvas, context) {
        this.canvas = canvas;
        this.ctx = context;
        this.window = this.canvas.width;
        this.height = this.canvas.height;

        this.window.addEventListener('resize', function )
    }
}


window.addEventListener('load',function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width= window.innerWidth;
    canvas.height = window.innerHeight;

    const Game = new game(canvas,ctx);
    console.log(Game);
    
})