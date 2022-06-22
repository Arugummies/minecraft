var canvas=new fabric.Canvas("myCanvas");
playerx=10;
playery=10;
blockwidth=30;
blockheight=30;
var playerobject="";
var blockobject="";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top:playery,
            left:playerx
        });
canvas.add(playerobject);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        blockobject=Img;
        blockobject.scaleToWidth(blockwidth);
        blockobject.scaleToHeight(blockheight);
        blockobject.set({
            top:playery,
            left:playerx
        });
canvas.add(blockobject);
    });
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e){
keypressed=e.keyCode;
console.log (keypressed);
if (e.shiftKey==true&&keypressed=="80"){
    console.log("p and shift pressed together");
    blockwidth=blockwidth+10;
    blockheight=blockheight+10;
    document.getElementById("current_width").innerHTML=blockwidth;
    document.getElementById("current_height").innerHTML=blockheight;

}
if (e.shiftKey==true&&keypressed=="77"){
    console.log("m and shift pressed together");
    blockwidth=blockwidth-10;
    blockheight=blockheight-10;
    document.getElementById("current_width").innerHTML=blockwidth;
    document.getElementById("current_height").innerHTML=blockheight;
    
}
if (keypressed=="38"){
    up();
    console.log("up");
}
if (keypressed=="40"){
    down();
    console.log("down");
}
if (keypressed=="37"){
    left();
    console.log("left");
}
if (keypressed=="39"){
    right();
    console.log("right");
}
if (keypressed=="87"){
    new_image("wall.jpg");
    console.log("w");
}
if (keypressed=="71"){
    new_image("ground.png");
    console.log("g");
}
if (keypressed=="84"){
    new_image("trunk.jpg");
    console.log("t");
}
if (keypressed=="68"){
    new_image("dark_green.png");
    console.log("d");
}
if (keypressed=="76"){
    new_image("light_green.png");
    console.log("l");
}
if (keypressed=="82"){
    new_image("roof.jpg");
    console.log("r");
}
if (keypressed=="85"){
    new_image("unique.png");
    console.log("u");
}
if (keypressed=="89"){
    new_image("yellow_wall.png");
    console.log("y");
}
if (keypressed=="67"){
    new_image("cloud.jpg");
    console.log("c");
}
}
function up(){
    if (playery>=0){
        playery=playery-blockheight;
        console.log("block image height= "+ blockheight);
        console.log("When up arrow key is pressed, X= " + playerx+ "Y= " + playery);
        canvas.remove(playerobject);
        player_update();
    }
}
function down(){
    if (playery<=500){
        playery=playery+blockheight;
        console.log("block image height= "+ blockheight);
        console.log("When down arrow key is pressed, X= " + playerx+ "Y= " + playery);
        canvas.remove(playerobject);
        player_update();
    }
}
function left(){
    if (playerx>=0){
        playerx=playerx-blockwidth;
        console.log("block image width= "+ blockwidth);
        console.log("When left arrow key is pressed, X= " + playerx+ "Y= " + playery);
        canvas.remove(playerobject);
        player_update();
    }
}
function right(){
    if (playerx<=900){
        playerx=playerx+blockwidth;
        console.log("block image width= "+ blockwidth);
        console.log("When left arrow key is pressed, X= " + playerx+ "Y= " + playery);
        canvas.remove(playerobject);
        player_update();
    }
}