
const library=[];
function createbook( id , title , author  ){
    this.id=id,
    this.author=author,
    this.isBorrowed=false,
    this.title=title
}
// check if the book with is is present or not 
const isPresent=(id)=>{
for(let i=0; i<library.length; i++){
if(library[i].id===id){
return i;
}
}
return -1;
}

const addBook=(id, title , author)=>{
    if(isPresent(id)!=-1){
console.log(`Book with id ${id} is already present`);
        return ;
    }
    const newbook = new createbook(id,title,author);
    library.push(newbook);
    console.log(`Book with id ${id} is added to library `);
}

// borrow function 
const borrowingBooks= (id)=>{
let index_no = isPresent(id);
if(index_no!=-1){
    if(library[index_no]["isBorrowed"]===true){
console.log(`Book is present but book  is not currently available `);
    }
else{
        library[index_no].isBorrowed=true;
        console.log(`Book is present and you Borrowed that book  `);
    }
}else{
    console.log(` You can't borrow book with id ${id}  because is not present `);
}
}

// Returning Books
const returningBooks= (id)=>{
    let index_no = isPresent(id);
    if(index_no!=-1 && library[index_no].isBorrowed==true){
        library[index_no].isBorrowed=false;
        console.log(`Book with id ${id} is returned successfully`)
    }else{
console.log(`Book not belongs to our Libraray `)
    }
}

// List Available Books:
const listAvailableBooks = ()=>{
    console.log("<----List of all available books ---->")
    for(let i=0; i<library.length; i++){
        if(library[i].isBorrowed==false){
            console.log(library[i]);
        }
    }
}

// Search for a Book
const searchForBook= (title)=>{
    for(let i=0; i<library.length; i++){
        if(library[i].title===title){
         console.log(`Book with title ${title} is  present `)
            return 
            
        }
    }
  console.log(`Book with title ${title} is not present `)
  return 
}

//print all books in Library

const allBookInLibaray =()=>{
    console.log(`<---All books  present in Library are: --->`)
    for(let i=0; i<library.length; i++){
        console.log(library[i]);
    }
}



// FUNCITON CALL

//  adding books 
addBook(10,"title1" ,"authoris1");
addBook(11,"title2" ,"authoris2");
addBook(101,"title3" ,"authoris3");
addBook(112,"title4" ,"authoris4");
addBook(101,"title22" ,"authoris2");


// borrowbooks
borrowingBooks(11);
listAvailableBooks()
// pint all books
allBookInLibaray()

// returning books
returningBooks(11);

listAvailableBooks()

searchForBook("title")