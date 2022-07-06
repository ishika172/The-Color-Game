var sqr = document.querySelectorAll('.square');
var easy = document.querySelector('.easy');
var hard =document.querySelector('.hard');
var rgb = document.querySelector('.rgb');
var clickedcolor;
var message = document.querySelector('.message');
var newgame = document.querySelector('.newgame');


function randomColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
var num = 6;
var pickedcolor;
var colors=[];
init()

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    rgb.textContent=colors[random];
    
	return colors[random];
}

function mainlogic()
{
    for(i=0;i<num;i++)
    {
        sqr[i].addEventListener('click',function(){
            
            clickedcolor=this.style.background;
            

            if(clickedcolor===pickedcolor)
            {
             message.textContent='CORRECT!'; 
             sqr.forEach(function(s){
                 s.style.background=clickedcolor;
             }) 
             document.querySelector('.top').style.background=clickedcolor;
             newgame.textContent='Play Again?'; 
            }
            else if(clickedcolor!=pickedcolor)
            {
                message.textContent='TRY AGAIN';
                this.style.background='black';
            }
        })
    }
}


easy.addEventListener('click',function()
{
    num=3;
    easy.classList.add('selected');
    hard.classList.remove('selected');
    document.querySelector('.top').style.background='cyan';
    // sqr[3].style.background='black';
    // sqr[4].style.background='black';
    // sqr[5].style.background='black';

    sqr[3].classList.add('non');
    sqr[4].classList.add('non');
    sqr[5].classList.add('non');
    
    init();
});

hard.addEventListener('click',function()
{
    num=6;
    document.querySelector('.top').style.background='cyan';
    easy.classList.remove('selected');
    hard.classList.add('selected');

    sqr[3].classList.remove('non');
    sqr[4].classList.remove('non');
    sqr[5].classList.remove('non');
    
    init();
    
})



function colorarray()
{
    var arr=[];
    for(i=0;i<num;i++)
    {
        arr.push(randomColor())
    }
   
    return arr;
}


console.log(colors);

function inset()
{
    for(i=0;i<num;i++)
    {
        sqr[i].style.background=colors[i];
    }
}

function init()
{
    colors=colorarray();
    inset();
    pickedcolor=pickColor();
    mainlogic();
}

newgame.addEventListener('click',function(){
    newgame.textContent='New Colors';
    message.textContent='';
    easy.classList.remove('selected');
    hard.classList.remove('selected');
    document.querySelector('.top').style.background='cyan';
    inset();
    init();
});