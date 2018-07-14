function checkprime(){
    num=getUserInput();
    flag=true;
    if(num<2)
        flag=false;
    for(i=2; i<= Math.sqrt(num); i++)
        {
            if(num%i==0){
               flag=false;
               break;
            }
        }
    if(flag){ 
        showResult("prime number :"+num ); 
    }else{
        showResult("not a prime number:"+num);
    }
}

function factorial()
{
    num = getUserInput();
    var res = 1;
    for(var i = 2; i <= num; i++)
        {
            res = res*i;
        }
    showResult("factorial of number is:"+num+"is"+res);
    
}
function factors()

{
    num = getUserInput();
    var output = " ";
    for(var i =2; i<=num; i++)
        {
            if(num%i==0)
                {
                  res = output+=i+" ";  
                }
        }
    showResult("factors of number is:"+num+"is"+res);
    
}
function fibonacci()
{
   var num = getUserInput();
    var output = "";
    if(num == 1){
       output += "0";
       }else if(num == 2){
       output += "0 1";
       }else{
       var a = 0, b = 1;
       output += "0 1";
       for(var i = 3; i<=num; i++){
        c = a + b;
        output += " "+c;
        a = b;
        b = c;
    }
       }
       
    showResult(" fibonacci:"+num+"is:"+output);
    
}
function getUserInput(){
    num = document.getElementById("num").value;
    return num;
    
}
function showResult(message){
    document.getElementById("result").innerHTML="<h4>"+message+"<h4>";
}
