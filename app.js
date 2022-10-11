const colors=["red", "green","blue","rgb(0,0,0)"]

    const btn=document.getElementById("btn");
 const color=document.querySelector(".color")
 console.log(btn)

 btn.addEventListener('click',function(){
    const randomnumber=parseInt((4*Math.random()))
    
    document.body.style.backgroundColor=colors[randomnumber];
    color.textContent=colors[randomnumber]
 })