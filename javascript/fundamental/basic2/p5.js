// nested loop
//pattern
/*
1
1 2
1 2 3
1 2 3 4
*/
for (let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        console.log(`${i} ${j}`);
        document.write(` ${j}`);
    }
    document.write(`<br>`); // new line after each row to print pattern correctly.
}
document.write(`<hr>`);


for (let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        console.log(`${i} ${j}`);
        document.write(` ${i}`);
    }
    document.write(`<br>`); // new line after each row to print pattern correctly.
}
document.write(`<hr>`);


for (let i=5;i>=1;i--){
    for(let j=1;j<i;j++){
        
        document.write(` ${j}`);
    }
    document.write(`<br>`); // new line after each row to print pattern correctly.
}
document.write(`<hr>`);


for (let i=1;i<=5;i++){
    for(let j=1;j<=(5-i);j++){
        document.write(`&nbsp;&nbsp;`);
    }
        for(let k=1;k<=i;k++){
            document.write(` * &nbsp;`);
        }
        document.write(`<br>`); 

}