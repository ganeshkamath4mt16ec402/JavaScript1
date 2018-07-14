function checkprime(){
    number=getUserInput();
    flag=true;
    if(num<2)
        flag=false;
    for(i=2; i<Math.sqrt(num); i++)
        {
            if(num%i==0){
               flag=false;
               }break;
        }
    if(flag){ showResult("prime number :"+num+"is"+res ); }
    else{showResult("not a prime number:"+num+"is"+res);}
}

function factorial()
{
    num = getUserInput();
    var res = 1;
    for(var i = 2; i<=num; i++)
        {
            res *= i;
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
    num = getUserInput();
    var res=0;
    for(var i =1; i<=num; i++)
        {
            
                
                  res = res+i; 
                
        }
function getUserInput(){
    num = document.getElementById("num").value;
    return num;
    
}
function showResult(message){
    document.getElementById("result").innerHTML="<h4>"+message+"<h4>";
}
