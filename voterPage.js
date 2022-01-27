    var h1=document.getElementById("bjp");
    var h2=document.getElementById("congress");
    var h3=document.getElementById("aap");
    var h4=document.getElementById("total");
   
    let count=0;
 function bjp(){
    
     count+=1;
      h1.innerText=count;
 }
 let co=0;
 function congress(){
    
     co+=1;
      h2.innerText=co;
 }
 
 let cou=0;
 function aap(){

     cou+=1;
      h3.innerText=cou;
 }
 let c=0;
 function total(){
    // let t=h1.value;
     //let b=h2.value;
    c=parseInt(count)+parseInt(co)+parseInt(cou);
    h4.innerText=c;
 }
 
 
