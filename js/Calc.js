function calc(operator) {
    num1 = parseInt(document.getElementById("num1").value)
    num2 = parseInt(document.getElementById("num2").value)
    var message = " "
switch(operator){
    case "add":
        message=num1+"+"+num2+"="+(num1+num2);
        break;
      case "sub":
        message=num1+"-"+num2+"="+(num1-num2);
        break;
        case "mul":
        message=num1+"*"+num2+"="+(num1*num2);
        break;
        case "div":
        message=num1+"/"+num2+"="+(num1/num2);
        break;
        case "mod":
        message=num1+"%"+num2+"="+(num1%num2);
        break;
    default:message="invalid operator";
}
document.getElementById("res").innerHTML=message;
}