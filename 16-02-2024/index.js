import { fetch_Movies } from "./fetch_data.js"
import {   add_new_movie_contianer} from "./addMovieToContainer.js"
import { randomMoviesGenerator } from "./randomMoviesGenerate.js";
// import {generate_movies} from "./randomMoviesGenerate.js"

// Array of all search movies and 
let list = new Array();
let fav_movies = new Array();

const update_data_list=()=>{
    localStorage.setItem("list",JSON.stringify(list));
}
const update_data_fav_movies=()=>{
  localStorage.setItem("fav_movies",JSON.stringify(fav_movies));
}

window.addEventListener('load', async()=>{
    list= JSON.parse(localStorage.getItem("list"))??[];
    fav_movies= JSON.parse(localStorage.getItem("fav_movies"))??[];
    for(let i=0; i<list.length; i++){
      add_new_movie_contianer(list[i].title,list[i].duration,list[i].genre,list[i].rating,list[i].img,list[i].logoClass)
    }
    
    if(list.length==0){
   randomMoviesGenerator()
    }
    
})


//  load all images
const load_movies = ()=>{
  for(let i=0; i<list.length; i++){
    add_new_movie_contianer(list[i].title,list[i].duration,list[i].genre,list[i].rating,list[i].img,list[i].logoClass)
   }
}

//  Funciton to if already present 
function findByTitle(array, title) {
  return array.find(function(object) {
      return object.title === title;
  });
}



//  serach btn and enter_name
const enter_name = document.querySelector('#enter_name')
const search_btn = document.querySelector('#search_btn')


search_btn.addEventListener('click',()=>
{

let movie_name = enter_name.value
// console.log("list "+list)

enter_name.value=""
fetch_Movies(movie_name).then((response)=>{
  load_movies()
    if(response.Response==="False") {
        alert('Movie not found!!')
        return response;
    }
    console.log(response)

    let title = response.Title;
    title=title.trim();
    console.log('title '+title)

    //  check already present

    if(findByTitle(list, title)){
      alert("MOVIE ALREADY PRESENT IN THE HOME PAGE")
      
      return;
    }



    let duration =response.Runtime
       let genre = response.Genre
      let  img=response.Poster
    let  rating 
    let logoClass = "ri-heart-line"
    if(response.Ratings[0]>0){
        rating = response.Ratings[0].Value
    }else{
        rating=8;
    }

    list.unshift({title,duration,genre,rating,img,logoClass});
    // fav_movies.push({title,duration,genre,rating,img,cnd,logoClass});
    // update_data_fav_movies(list);
    update_data_list(list);
    let container = document.getElementById('container');
    container.innerHTML=""
       for(let i=0; i<list.length; i++){
        add_new_movie_contianer(list[i].title,list[i].duration,list[i].genre,list[i].rating,list[i].img,list[i].logoClass)
       }

})


})


//  Favourite movie
var container = document.getElementById('container');
      
// Add event listener to the container
container.addEventListener('click', function(event) {
  list= JSON.parse(localStorage.getItem("list"))??[];
    fav_movies= JSON.parse(localStorage.getItem("fav_movies"))??[];
    for(let i=0; i<list.length; i++){
      add_new_movie_contianer(list[i].title,list[i].duration,list[i].genre,list[i].rating,list[i].img,list[i].logoClass)
    }
  load_movies()
  // Check if the clicked element is a button

    // Get the inner container containing the button
    var innerContainer = event.target.parentNode.parentNode.parentNode.parentNode;
    var index = Array.from(container.children).indexOf(innerContainer);

    // Find the index of the button within its inner container
    var buttonIndex = Array.from(innerContainer.getElementsByClassName('ri-heart-line')).indexOf(event.target);




 if(index==-1) return   

if(list[index].logoClass==="ri-heart-line"){

list[index].logoClass="ri-heart-fill";
container.innerHTML=""
load_movies()
update_data_list(list);
fav_movies.push(list[index]);
      
      update_data_fav_movies()

}else{
  list[index].logoClass="ri-heart-line";
  container.innerHTML=""
  load_movies()

  let index_to_delete=-1 ;
  for(let k=0; k<fav_movies.length; k++){

if(fav_movies[k].title==list[index].title){

  index_to_delete=k;
  break;
}
  }

  
  fav_movies.splice(index_to_delete,1);
  
 
  update_data_fav_movies()
  update_data_list();

}

});
