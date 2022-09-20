
var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-primary");
button.innerHTML="search";
button.addEventListener("click",foo);

let link=document.createElement("div");
link.setAttribute("id","link");

let name1=document.createElement("div");
name1.setAttribute("id","name");

let isbn =document.createElement("div");
isbn.setAttribute("id","isbn");

let authors =document.createElement("div");
authors.setAttribute("id","authors");

let numberOfPages =document.createElement("div");
numberOfPages.setAttribute("id","numberOfPages");

let publisher =document.createElement("div");
publisher.setAttribute("id","publisher");

let released =document.createElement("div");
released.setAttribute("id","released");


div.append(input,button,link,name1,isbn,authors,numberOfPages,publisher,released);
document.body.append(div);

async function foo(){
    let res=document.getElementById("country").value;
    var url=`https://www.anapioficeandfire.com/api/books/${res}`;
    
    let result=await fetch(url);
    let result1=await result.json();
    // console.log(result1.name);
    // console.log(result1.isbn);
    // console.log(result1.numberOfPages);
    // console.log(result1.authors);
    // console.log(result1.publisher);
    // console.log(result1.released);
 
    for(var key in result1){

     console.log(key,result1[key]);
     link.innerHTML=`BOOK   URL   LINK    :${result1.url}`;
  
      name1.innerHTML=`Book   NAME   :${result1.name}`;

      isbn.innerHTML=`BOOK    ISBN    NUMBER    :${result1.isbn}`;

      authors.innerHTML=`AUTHORS    NAME    :${result1.authors}`;

      numberOfPages.innerHTML=`NUMBER    OF   PAGES   :${result1.numberOfPages}`;

      publisher.innerHTML=` BOOK  PUBLISHER  NAME :${result1.publisher}`;

      released.innerHTML=` BOOK  PUBLISHER  NAME :${result1.released}`;

}
}
