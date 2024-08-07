/*looping statements */
//for loop
/* for (initialization ;conditions;increment/decrement){
//code
}*/


//while loops
/*

   initialization
    while(conditions){
        //code
        increment/decrement
    }

*/

//do-while loops
/*
instialization
   do{
    //code
    inc/dec statements
    }while(conditions);
*/
console.log(` \n for  loop `);
var x=20;
for (var i=0;i<10;i++){
    console.log(`${x}* ${i} = ${x*i}`);

}
console.log(` \n while loop `);

var y=12;
var i=1;
while(i<=10){
    console.log(`${y}* ${i} = ${y*i}`);
    i++;
}

console.log(` \n Do-while loop `);
var z=45;
var i=1;
do{
    console.log(`${z}* ${i} = ${z*i}`);
    i++;
}while(i<=10);


console.log(` \n factorial`);
sum=1
var n=5;
for (var i=1; i<n; i++){
    sum=sum*i;

    console.log(`Factorial of ${n}  = ${sum}`);
}

console.log(` \n prime numbers`);
while(i<=1000){
        if(i%2!=0){
        console.log(` ${i} is prime`);
        }
    i++;
}
console.log(` \n multiples of 7`);
var x=50;
var i=1;
while(i<=x){
    if(i%7==0){
    console.log(` ${i} is multiple of 7`);
    }
    i++;
}
console.log(` \n multiples of 7`);
var x=90
 for (var j=1; j<=x;j++){
    if(j%7==0){
        console.log(` ${j} is multiple of 7`);
 }
}