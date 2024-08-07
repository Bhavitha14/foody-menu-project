//array 
/*
    group of values  not mandatory to be simliar data type
     types
     1.single
        a.literals(direct   type)
        b.using array constructors(we assign value as a assignment operator)
        c.array constructor (parameters)
     2.object array-> group of object
          single object is a group of key/value pairs->property of an object  
          {key:"value"}
     3.json array-> (response from REST ApI)
     javascript object notation {"key":"value"}
*/ 

var users=["john","mike","tom","jerry"];
console.log(`users=`,users);

/*  
   array.foreach(function(item,index){
   //code
   })
*/
users.forEach(function(item,index){
    document.write(`<h1> ${index} ${item}</h1>`);
})

document.write(`<hr>`);

//for(let i=0;i<array.length;i++) {array[i]}
for (let i=0; i<users.length; i++){
    
    document.write(`<h3>${i} ${users[i]}</h3>`)
}
document.write(`<hr>`);

document.write(`<h1> users[index]=${users[2] }</h1>`);

document.write(`<hr>`);
 let i=0;
 while(i<users.length){
    document.write(`<h2>${i} ${users[i]}</h2>`)
    i++;
 }