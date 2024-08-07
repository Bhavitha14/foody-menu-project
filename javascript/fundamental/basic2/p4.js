// nested conditions

var x = 100;
if (x%2==0) {
    if(x>200===0) {
        console.log(`${x} is even and greater than 200`)
    }else if(x<200) {
        console.log(`${x} is even and less than 200`)
    }
    else if(x===200) {
        console.log(`${x} is even and equal than 200`)
    }
}else{
    console.log(`${x} is not even`)
}