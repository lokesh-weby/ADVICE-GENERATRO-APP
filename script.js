var AdvId=document.getElementById("AdviceID")
var Adv=document.getElementById("Advice")
var dice=document.getElementById("dice")

dice.addEventListener("click",()=>{
    location.reload()
})


async function GetAdvice(){
    await fetch("https://api.adviceslip.com/advice")
    .then((res)=>res.json())
    .then((data)=>
         
    {AdvId.textContent=`ADVICE #${data["slip"].id}`, Adv.textContent=`"${data["slip"].advice}"`}


)
}
GetAdvice()