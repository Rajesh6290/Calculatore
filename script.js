function calculate(){
     var a=parseFloat(document.getElementById('book1').value);
     var b=parseFloat(document.getElementById('book2').value);
     var c=parseFloat(document.getElementById('book3').value);
     var d=parseFloat(document.getElementById('book4').value);
    //  var e=parseFloat(document.getElementById('book5').value);
    //  var f=parseFloat(document.getElementById('book6').value);
     

  if(a>10.0 || b>10.0 || c>10.0 || d>10.0 ){
    alert("Please Enter Correct Value");
  }
   else
   {
    var obtain=(a+b+c+d)/4;
    document.getElementById("obtain").innerHTML=obtain;
    var per=obtain*9.5;
    document.getElementById("per").innerHTML=per; 
    if(a>4.0 && b>4.0 && c>4.0 && d>4.0 ){
        document.getElementById("remark").innerHTML="<span style='color:#32CD32;'>Pass</span>";
    }
    else
    {
        document.getElementById("remark").innerHTML="<span style='color:#FF0000;'>Fail</span>";
    }
    if(obtain>=4.0 && obtain<=5.0){
        document.getElementById("grade").innerHTML="D";

    }
    else if(obtain>=5.0 && obtain <= 6.0){
        document.getElementById("grade").innerHTML="C";
    }
    else if(obtain >=6.0 && obtain <= 7.0){
        document.getElementById("grade").innerHTML="B";
    }
    else if(obtain >=7.0 && obtain <= 8.0){
        document.getElementById("grade").innerHTML="A";
    }
    else if(obtain >=8.0 && obtain <= 9.0){
        document.getElementById("grade").innerHTML="E";
    }
    else if(obtain>= 9.0 && obtain <=10.0){
        document.getElementById("grade").innerHTML="O";
    }
    else
    {
        document.getElementById("grade").innerHTML="F";
    }
   }



}
