//question1
var a=10;
document.write("Result:" + "<br/>");
document.write("The value of a is: " +a + "<br/>");
document.write("The value of ++a is: "+ ++a + "<br/>");
document.write("Now the value of a is: "+a + "<br/>");
document.write("The value of a++ is: "+ a++ + "<br/>");
document.write("Now the value of a is: "+a + "<br/>");
document.write("The value of --a is: "+ --a + "<br/>");
document.write("Now the value of a is: "+a + "<br/>");
document.write("The value of a-- is: "+ a-- + "<br/>");
document.write("Now the value of a is: "+a + "<br/>");
document.write("<br/>");

//question2
var a=2;
var b=1;
var result= --a - --b + ++b + b--;
// --a; ===> 1
// --a - --b; 1 - 0
// --a - --b + ++b; 1 - 0 + 1 
// --a - --b + ++b + b--; 1 - 0 + 1 + 1
document.write("a is " + a + "<br/>");
document.write("b is " +b + "<br/>");
document.write('result is: '+ result+ "<br/>");
document.write("<br/>");

//question3
var name= prompt("Tell me your beautiful name: ");
document.write("Hello "+ name +"!" + "<br/>");