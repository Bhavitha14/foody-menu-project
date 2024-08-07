//armstrong number
//153=1^3+5^3+3^3
var inp=153;
var temp=inp;
var sum=0;
while(temp>0){
    let rem=temp%10;
    sum=sum+(rem ** 3);
    temp=parseInt(temp / 10)
}
if(sum === inp){
    document.write(`<h1>${inp}  ===  ${sum} is a armstrong number</h1>`)
}else{
    document.write(`<h1>${inp}  !==  ${sum} is not a armstrong number</h1>`)
}