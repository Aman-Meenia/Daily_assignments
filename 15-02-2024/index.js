let user_btn = document.querySelector('#user_btn')
let post_btn = document.querySelector('#post_btn')
let todo_btn = document.querySelector('#todo_btn')
let display_user_data = document.querySelector('#Userdata')
let post_data_table = document.querySelector('#post_data_table')
let user_data_table= document.querySelector('#user_data_table')

let todos_data_table = document.querySelector('#todos_data_table')

//  FUNCITON TO CREATE ROW 


 add_new_row=(id,name,username,email)=>{
    let row = document.createElement("tr")
    let c1 = document.createElement("td")
    let c2 = document.createElement("td")
    let c3 = document.createElement("td")
    let c4 = document.createElement("td")

    c1.textContent = id;
    c2.textContent = name
    c3.textContent = username;
    c4.textContent = email;
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    return row;
}




//  fetch data USERS
const data_fetch_users = async()=>{

    try{
  const user = await fetch('https://jsonplaceholder.typicode.com/users')
const body = await user.json();
    // Create cells
    user_data_table.querySelector('tbody').innerHTML=""
    for(key in body){
        const tbody_table = user_data_table.querySelector('tbody');
   let row=  add_new_row(body[key].id,body[key].name,body[key].username,body[key].email)
    tbody_table.appendChild(row)
    
    }

    }catch(err){
console.log('Error while fetching data')

    }

}


user_btn.addEventListener('click',()=>{
    if(user_data_table.style.display=="block"){
        user_data_table.style.display="none"; 
    }else{
        post_data_table.style.display="none"
        todos_data_table.style.display="none"
        user_data_table.style.display="block"
        data_fetch_users()
    }
    

})



//   fetch data POSTS
const data_fetch_posts = async()=>{

    try{
  const user = await fetch('https://jsonplaceholder.typicode.com/posts')
const body = await user.json();
// console.log(body);
    // Create cells
    post_data_table.querySelector('tbody').innerHTML=""
    for(key in body){
        const tbody_table = post_data_table.querySelector('tbody');
    let row=  add_new_row(body[key].id,body[key].userId,body[key].title,body[key].body)
    
    tbody_table.appendChild(row)
    
    }

    }catch(err){
console.log('Error while fetching data')

    }

}





post_btn.addEventListener('click',()=>{
    if(post_data_table.style.display=="block"){
        post_data_table.style.display="none"
    }else{
        user_data_table.style.display="none"
        todos_data_table.style.display="none"
        post_data_table.style.display="block"
        data_fetch_posts();
 
    }

})


//  FETCH TODOS

const data_fetch_todos = async()=>{

    try{
  const user = await fetch('https://jsonplaceholder.typicode.com/todos')
const body = await user.json();
// console.log(body);
    // Create cells
    todos_data_table.querySelector('tbody').innerHTML=""
    for(key in body){
        const tbody_table = todos_data_table.querySelector('tbody');

    let row=  add_new_row(body[key].id,body[key].userId,body[key].title,body[key].completed)
    
    tbody_table.appendChild(row)

    
    }

    }catch(err){
console.log('Error while fetching data')

    }

}






todo_btn.addEventListener('click',()=>{
    if(todos_data_table.style.display=="block"){
        todos_data_table.style.display="none"
    }else{
        post_data_table.style.display="none"
        user_data_table.style.display="none"
        todos_data_table.style.display="block"
        data_fetch_todos();
 
    }

})