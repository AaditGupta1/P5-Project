function preload(){

}

function setup(){
    canvas = createCanvas(600 , 400);
    canvas.position(20 , 150)
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    fill(0 , 255 , 0);
    
    image(video , 5 , 5 , 590 , 390);

    rect(5 , 5 , 80 , 20);
    rect(5 , 375 , 80 , 20);
    rect(515 , 375 , 80 , 20);
    rect(515 , 5 , 80 , 20);
}

function take_snapshot(){
    save('captured.png');
}
