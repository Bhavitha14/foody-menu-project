/* variables*/
/*datatype name=value;*/
var x=123; //global scope  variable
let y=133; //block scope variable(we can resign value value later)
const z=143; //block scope variable(we can't resign value value later)
var name="Bhavitha"
var ch="ABC"
var a=true
var b=false
var p=null
var q= undefined

console.log(`var x=`,x)
console.log(`\n`) 
console.log('type of x =',typeof x)
console.log(` let y=`,y) 
console.log('type of y =',typeof y)
console.log(`const z=`,z)
console.log('type of x =',typeof z)
console.log(` var name=`,name)
console.log('type of name =',typeof name)
console.log(` var ch=`,ch)
console.log('type of ch =',typeof ch)
console.log(`var a=`,a)
console.log('type of a =',typeof a)
console.log(`var b=`,b)
console.log('type of b =',typeof b)
console.log(`var p=`,p)
console.log('type of p=',typeof p)
console.log(`var q=`,q)
console.log('type of q =',typeof q)
console.log(`\n`) // line break in console

y=546;//reassigning the new value
console.log(`re assigned let y=`,y)

x=547.5;//reassigning the new value
console.log(`re assigned var x=`,x)
console.log('type of x =',typeof x)
//to handle the  run time errors(wew use exceptional handling errors)
try{
    z=547.5;//reassigning the new value
}catch(err){
    console.log(err)
}
console.log(`re assigned const z=`,z)// type error:assignment error
var name='bhavitha@14'
console.log(`reassigned var name=`,name)
console.log('type of name =',typeof name)
 var ch=123
console.log(`reassigned var ch=`,ch)
console.log('type of ch =',typeof ch)

//naming of variable 