var sq=document.querySelectorAll(".square");
var nosq=6;
var rgb=colorgenerate(nosq);
var pickedcolor;
window.onload=function(){

    var h1=document.getElementsByTagName("h1")[0];
    pickedcolor=rgb[pickColor(nosq)];
    var color_rgb=document.querySelector(".rgb");
    color_rgb.textContent=pickedcolor;
    var message=document.querySelector("#message");
    var reset=document.querySelector("#reset");
    var easy=document.querySelector("#easy");
    var hard=document.querySelector("#hard");
    easy.addEventListener("click",function(){
        easy.classList.add("selected");
        hard.classList.remove("selected");
        for(var i=3;i<6;i++)
        {
            sq[i].classList.add("d-none");
            
            
        }
        nosq=3;
        rgb=colorgenerate(nosq);
        for(var i=0;i<3;i++)
        {
            sq[i].style.backgroundColor=rgb[i];
        }
        pickedcolor=rgb[pickColor(3)];
        color_rgb.textContent=pickedcolor;

    });
    hard.addEventListener("click",function(){
        hard.classList.add("selected");
        easy.classList.remove("selected");

        for(var i=3;i<6;i++)
        {
            sq[i].classList.remove("d-none");
            
        }
        rgb=colorgenerate(6);
        for(var i=0;i<sq.length;i++)
        {
            sq[i].style.backgroundColor=rgb[i];
        }
        
        pickedcolor=rgb[pickColor(nosq)];
        color_rgb.textContent=pickedcolor;

    });

    reset.addEventListener("click",function(){
        message.textContent="";
        h1.style.backgroundColor="steelblue";
        reset.textContent="New colors";
        rgb=colorgenerate(nosq);
        for(var i=0;i<nosq;i++)
        {
            sq[i].style.backgroundColor=rgb[i];
        }
        pickedcolor=rgb[pickColor(nosq)];
        color_rgb.textContent=pickedcolor;
        
    });
    for(var i=0;i<sq.length;i++)
    {
        sq[i].style.backgroundColor=rgb[i];

        sq[i].addEventListener("click",function(){
            var color=this.style.backgroundColor;
            if(color==pickedcolor)
            {
                console.log("Correct");
                message.textContent="Correct!";
                changeColor(pickedcolor);
                h1.style.backgroundColor=pickedcolor;
                reset.textContent="Play again?"

            }
            else
            {
                this.style.backgroundColor="#232323";
                message.textContent="Inorrect";
            }
        });
    }
}
function changeColor(color){
    
    for(var i=0;i<sq.length;i++)
    {
        sq[i].style.backgroundColor=color;
    }
}
function pickColor(num){
    return Math.floor(Math.random()*num);
}
function colorgenerate(num){
    var arr=[];
    for(var i=0;i<num;i++){
        var r= Math.floor(Math.random()*256);
        var g= Math.floor(Math.random()*256);
        var b= Math.floor(Math.random()*256);
        var str="rgb("+r+", "+g+", "+b+")";
        arr.push(str);
        
    }
    return arr;

}