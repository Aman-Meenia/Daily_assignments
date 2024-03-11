

let arr=[
    {
    id:1,
    name:"aman"
    },

];

// for(it of arr){
//     console.log(it);
// }



// arr.push(20);




const btn = document.getElementById('btn');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    arr.push(2033);
    console.log(arr);

})
arr.push(1235);
console.log(arr);
localStorage.setItem("arris",JSON.stringify(arr));

window.addEventListener('load', ()=>{
    arr= JSON.parse(localStorage.getItem("arris"));

})
console.log(typeof arr);
arr.push(233);
