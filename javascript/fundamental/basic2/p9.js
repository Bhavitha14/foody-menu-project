//single -> using array constructor (assignemnt)

var color=new Array();
console.log(`color=`,color);
// assinning array constructor
color[0]="red";
color[1]="blue";
color[2]="green";

console.log(`after assignment=`,color);


//single -> using array constructor(parameters)

var tech=new Array("html","css","js","react")
console.log(`tech=`,tech);

//object
var person={};
console.log(`person(empty)=`,person)

var car={
     title:"Mahindra Thar",
     make:2022,color:"red"
}
console.log(`car=`,car)
document.write(`<h1> ${car}</h1>`) //[object object]
document.write(`<h1> ${car.title}</h1>`)//object.key
document.write(`<h1> ${car["make"]}</h1>`) //object["key"]
//car is a object array (beacause it has more than one array)
var cars=[
    {
        title:"Mahindra Thar",make:2022,color:"red"
    },
    {
        title:"Toyota",make:2022,color:"black"

    },
    {
        title:"Honda",make:2022,color:"blue"
    }

];console.log(`cars=`,cars)


cars.forEach(function(item,index){
    document.write(`<h3> ${index} ${item.title} </h3>`)
     document.write(`<h3> ${item.make} </h3>`)
})

document.write(`<h1> ${cars[1].title} ${cars[1]["make"]}</h1>`)

// usinf=g for loop &while &do-while
 for(let i=0;i<cars.length;i++){
     document.write(`<h3> ${cars[i].title}  ${cars[i]["make"]} </h3>`)}
 


//object  array to json
var res1=JSON.stringify(cars);
console.log(`json array=`,res1) 

//json to object array
var res2=JSON.parse(res1);
console.log(`object array=`,res2)

/* task1
array=books
       { title:""
        author:"",
        language:"",
        pages:"",
       }      
*/
var Books=[
    {
        title:"python",author:"Rossum",languages:"english",pages:200
    },
    {
        title:"java",author:"ammn ",languages:"english",pages:500

    },
    {
        title:"html",author:"ndnfjd",languages:"english",pages:300
    }

];console.log(`Books=`,Books)

for(var i=0;i<Books.length;i++){
    document.write(`<h3> ${Books[i].title}  ${Books[i].author}  ${Books[i].languages}  ${Books[i].pages} </h3>`)}


