

if(localStorage.getItem(name)==null){

    var setname=prompt("set your Name");

    localStorage.setItem(name,setname);
    

}

document.getElementById("h1").innerHTML+="welcome"+" "+localStorage.getItem(name);

var code= document.getElementById("textarea");
var remove= document.getElementById("remove");
var play= document.getElementById("play");
var result= document.getElementById("result");

play.onclick=()=>{
result.innerHTML=code.value;
    localStorage.setItem("RESULT",code.value)
}

remove.onclick=()=>{
    result.innerHTML="";

}
// onload=()=>{
//     code.value=localStorage.getItem("RESULT");
// }

