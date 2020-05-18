function compute(){
    var num,num1,d; 
    num=document.getElementById('txtNum').value;
    num1=Number(num);
    d=document.getElementById('p');
    d.innerHTML="";

    try{
        if (num==""||num==" ") throw "empty.";
        if (isNaN(num)) throw "not a number.";
        if (num.includes(".")) throw "invalid. Integers only."
        if (num1%2==0) throw "even.";
        else throw "odd.";
    }catch(err){
        d.innerHTML="The input is " + err;
    }
}

function btnClr(){
    document.getElementById('txtNum').value="";
    document.getElementById('p').innerHTML=" ";
} 