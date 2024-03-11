let add_new_movie_contianer =(title,duration,genre,rating,img,logoclass)=>{



const new_Movie_Contaier = document.createElement("div");

new_Movie_Contaier.innerHTML=`
<div id="movies_contianer"> 

        <img src=${img} alt=""/>

        <div id="main">
            <div id="left">
                <h5 id="title"> Title: ${title}</h5>
                <h5> Duration: ${duration}</h5>
                <h5> Genre: ${genre}</h5>
                <h5> Rating: ${rating} </h5>
                  </div>
                  <div id="right">
 <i class=${logoclass} id="likebtn" ></i> 
            </div>
 </div>
    </div>`


let  container = document.querySelector('#container');
container.append(new_Movie_Contaier)

}

export {
   add_new_movie_contianer
}