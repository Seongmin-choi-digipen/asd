// Name       : TODO
// Assignment : 13_animate_object
// Course     : CS099
// Spring 2021

function setup()
{
    createCanvas( 400, 400 );
}


function draw()
{
    background( 220 )
    push()
    fill( 'red' )
    strokeWeight( 2 )
    translate( width / 2, height / 2 )
    circle( 0, 0, 20 )
    pop()
    strokeWeight( 20 )
    rectMode( CENTER )
    rect( mouseX, mouseY, 50, 70 )
}
