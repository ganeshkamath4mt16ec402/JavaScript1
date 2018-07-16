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
 function reverse() {
    var num = getUserInput();
    var rev = 0;
    var r = 0;
    while(num != 0)
        {
            r = num % 10;
            rev = rev * 10 + r;
            num=Math.floor( num / 10);
        }
     showResult(" reverse of given number is"+rev); 
}

function pallindrome()
{
    var num = getUserInput();
    var num1 = num;
    var rev = 0;
    var r = 0;
    while(num != 0)
        {
            r=num % 10;
            rev=rev*10+r;
            num=Math.floor(num/10);
        }
    if(rev == num1){
     showResult(" num is pallindrome:"); }
    else {
          showResult(" num is not pallindrome"); }
     }
    

function sumofallnum(){
    var num = getUserInput();
    var i =0;
    var sum = 0;
    while(num != 0)
        {
            i = num % 10;
            sum=sum + i;
            num = Math.floor(num / 10);
            
        }
    showResult("  sum of all numbers is:"+sum); 
}  
function sumsingledigit(){
    
    var num = getUserInput();
    while(num>9)
        {
            sum = num % 10 + Math.floor(num / 10) ;
            num = sum ;
            
        }showResult("  sum of given num in single digit is :"+sum);
    
}
function getUserInput(){
    num = document.getElementById("num").value;
    return num;
    
}
function showResult(message){
    document.getElementById("result").innerHTML="<h4>"+message+"<h4>";
}
