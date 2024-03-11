
const fetch_Movies =async (name)=>{
    try{
console.log(" Name is "+name)
const url = `http://www.omdbapi.com/?t=${name}&apikey=a4aada90`;

console.log(url);
    const movie= await fetch(url)

    const data  = await movie.json();

    return data;

    }catch(err){

        console.log("Error is "+err)
    }
    
    }
   
    export {
        fetch_Movies
    }


