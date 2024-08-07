/*operators
   1.arithmetic -> +,-,*,/,%
   2.logical ->&& ,|| ,!
   3.relational/conditional - >,<,<=,>=,==,===(strictly equal),!==(not equal)
   4.inc/dec -> pre- ++i,--i
   ps -> post-i++,i--
   4.assignment -> =, +=, -=, *=, /=, %=, <<=, >>=, &=, |=, ^=
   5.ternary -> condition? result1 : result2
  6., . '' " " `` / ?
  () function
   {} block closure
    [] array ,object properties   
    */
   /* 
operators
1. arithmetic + - * / % (mod)
2. logical && || !
3. relational / conditional
     > < >= <= ==(equal to), ===(strictly equal) , !==(not equal)
4. inc/dec
     pre ++i --i
     post i++ i--
5. condition ? true : false
6. , . '' "" `` / ?
   () function
    {} block closure
    [] array, object properties
*/
   
// operators
var x=123;
var res=x*45+154+95-14;
console.log(product=,res);
var a = 12;
var b = 34;

//a^2 + b^2;
console.log(a^2+b^2=,a^2+b^2-2*a*b);
console.log(a^2-b^2=,(a-b)*(a+b));
console.log(a^3+b^3,(a+b)*(a^2-a*b+b^2));

var a=4;
var b=5;
var c=6;

// (a+b+c)^2
console.log((a+b+c)^2=,a^2+b^2+c^2+2*(a*b+b*c+c*a));

//power values
//2^6=
var res=2 ** 6;
console.log(power=,res);

//math.pow
var res=Math.pow(2,6);
console.log(math power=,res);

//assignment operators
var x=12;
x +=20; //var x = x+20
console.log(assignment x=, x);
// *= , /= , -=, %=
x *= 12;
console.log(assignment x=, x);
x /= 3;
console.log(assignment x=, x);
x -= 5;
console.log(assignment x=, x);
x %=10;
console.log(assignment x=, x);



// conditional statements
/*
 BMI of the person
 weight
 height
 status -> overweight, under weight , normal , 

 
*/
let height = 1.79;
let weight =  72;
let BMI = weight/height**2;
if(BMI < 18.5){
    console.log("under weight");
}
else if(BMI >= 18.5 && BMI<25){
    console.log("normal")
}
else if(BMI >= 25 && BMI<30){
    console.log("over weight")
}
else if(BMI>=30){
    console.log("obese")

}

/*
TASk 2-> simple Interest
         compound Interest
     var formula= "SI"/"CI";
     var pr
     var rate
     var time
*/

/*
TAsk 3 w.a.p to check the entered number is multiple of 3 and 7
*/
var number = 42;


if(number%3==0 && number%7==0){
    console.log(`Yes ${number} is a multiple of 3 and 7`);
}
else{
    console.log(`No ${number}is not a multiple of 3 and 7`);
}




 //switch case
 /*
   switch(key){
     case name: code
          break;
     default:
    }
 */
var day=1;
switch(day){
     case 1: console.log(monday);
          break;
     case 2: console.log(tuesday);
          break;
     case 3: console.log(wednesday);
          break;
     case 4: console.log(Thursday);
          break;
     case 5: console.log(friday);
          break;
     case 6: console.log(saturday);
          break;
     default: console.log(check your input!...);
} 

/*
   Task 5
   Switch case
   key = shape name ? 4 Shapes
         area of the shapes
*/
key = 'triangle';
switch(key){
    case 'circle':
        var x =(prompt("enter.input1"))
        var a=Number(x);
        console.log(Area of circle=,3.14*a*a);
        break;
    case 'triangle':
        var x =(prompt("enter.input1"))
        var b=Number(x);
        var y =(prompt("enter.input2"))
        var h=Number(y);
        console.log(Area of triangle=,0.5*b*h);
        break;
    case 'square':
        var x =(prompt("enter.input1"))
        var a=Number(x);
        console.log(Area of square=,a*a);
        break;
    case 'rectangle':
        var x =(prompt("enter.input1"))
        var a=Number(x);
        var y =(prompt("enter.input2"))
        var b=Number(y);
        console.log(Area of rectangle=,a*b);
        break;
    default:console.log(Enter valid key);
}