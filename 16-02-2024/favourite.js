import { add_new_movie_contianer } from "./addMovieToContainer.js";
let fav_movies = new Array();
let list = new Array();

const update_data_list=()=>{
    localStorage.setItem("list",JSON.stringify(list));
}
const update_data_fav_movies=()=>{
  localStorage.setItem("fav_movies",JSON.stringify(fav_movies));
}

window.addEventListener('load', ()=>{
    list= JSON.parse(localStorage.getItem("list"))??[];
    fav_movies= JSON.parse(localStorage.getItem("fav_movies"))??[];
    for(let i=0; i<fav_movies.length; i++){
      add_new_movie_contianer(fav_movies[i].title,fav_movies[i].duration,fav_movies[i].genre,fav_movies[i].rating,fav_movies[i].img,fav_movies[i].logoClass)
     }
    
})
const load_movies = (list)=>{
    for(let i=0; i<list.length; i++){
      add_new_movie_contianer(list[i].title,list[i].duration,list[i].genre,list[i].rating,list[i].img,list[i].logoClass)
     }
  }
  

//  UNLIKE OPTION


var container = document.getElementById('container');
      
// Add event listener to the container
container.addEventListener('click', function(event) {

  // Check if the clicked element is a button

    // Get the inner container containing the button
    var innerContainer = event.target.parentNode.parentNode.parentNode.parentNode;
    var index = Array.from(container.children).indexOf(innerContainer);

    // Find the index of the button within its inner container
    var buttonIndex = Array.from(innerContainer.getElementsByClassName('ri-heart-fill'))?.indexOf(event.target);




 if(index==-1) return   


//     find the title in the fav movies and change its value

fav_movies[index].logoClass="ri-heart-line";

for(let i=0; i<list.length; i++){
    if(list[i].title===fav_movies[index].title){
        list[i].logoClass=fav_movies[index].logoClass;
        break;
    }

}
fav_movies.splice(index,1)


update_data_list();
update_data_fav_movies();
container.innerHTML=""
load_movies(fav_movies);


});
