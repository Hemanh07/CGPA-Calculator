const calculate=document.getElementById("calculate");
const result=document.getElementById("outbox");
calculate.addEventListener("click",(event)=>{
    const physics=document.getElementById("physics").value;
    const chemistry=document.getElementById("chemistry").value;
    const pspp=document.getElementById("pspp").value;
    const english=document.getElementById("english").value;
    const tamil=document.getElementById("tamil").value;
    const maths=document.getElementById("maths").value;
    console.log(physics);
    console.log(chemistry);
    console.log(maths);
    console.log(english);
    console.log(tamil);
    console.log(pspp);
    const total =(cal(physics)*3+cal(chemistry)*3+cal(maths)*4+cal(pspp)*3+cal(tamil)+cal(english)*3+50)/22;
    result.innerHTML=total;
},false);
let cal=function(score){
    score=(score*100)/60;
    return score/10 ;
}
