function isprime(num) {
  flag = true;
  if (num < 2)
  flag = false;
  for (i = 2; i <= Math.sqrt(num); i++)
  {
    if (num % i == 0)
    {
      flag = false;
      break;
    }
  }
  return flag;
}
function printprimes(lb, ub) {
  for (var i = lb; i <= ub; i++) {
    if (isprime(i))
    {
      console.log(i);
    }
  }
}
printprimes(10, 20);
for(var i =1; i <= 20; i++){
  num=i;
  for(var j = 1; j <= 10; j++){
    console.log(num + " * " + j + " = "+(num * j))
    
  }
  console.log("---------------")
}


