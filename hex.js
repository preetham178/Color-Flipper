const colors=[1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f' ];

const btn=document.getElementById("btn");
const color=document.querySelector(".color")


btn.addEventListener('click',function(){
    let st="#"
    for(let i=0;i<6;i++){
    const randomnumber=parseInt((15*Math.random()));
    st+=colors[randomnumber];
    }
    
    document.body.style.backgroundColor=st;
    color.textContent=st
 })