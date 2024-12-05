var AdvId=document.getElementById("AdviceID")
var Adv=document.getElementById("Advice")
var dice=document.getElementById("dice")

async function GetAdvice(){
    AdvId.textContent=`ADVICE #${"???"}`, Adv.textContent=`Loading please wait..`;
    await fetch("https://api.adviceslip.com/advice")
    .then((res)=>res.json())
    .then((data)=>
         
    {AdvId.textContent=`ADVICE #${data["slip"].id}`, Adv.textContent=`"${data["slip"].advice}"`}


)
}
GetAdvice()
dice.addEventListener("click",()=>{
    GetAdvice()
})