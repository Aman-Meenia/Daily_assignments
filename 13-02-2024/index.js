// 1. Declare Object

const student={
    name:"Jimmy",
    age:"21",
    grades:[80,90,88,60,70],
    subjects:["math","C++","nodejs","ractjs","typescript"]

}


//  display function

function displayInfo(){
    for(const key in this){
        console.log(key+" : "+this[key])
    }
}




//  display function modified

function displayInfoModified(message){
    console.log("Message is "+message);

    for(const key in this){
        console.log(key+" : "+this[key])
    }
}


// 2. Bind, Apply, and Call
//  Display info by using bind

console.log(" ----- Display Info by using bind  -----")
const boundDisplayInfo = displayInfo.bind(student);
boundDisplayInfo();


// Apply, and Call
console.log("\n\n ----- Display Info by using Apply and custon message -----")
let msg = " Hello from Apply"
displayInfoModified.apply(student,[msg,"msg2","msg3"]);
console.log();
msg = " Hello from Call"
console.log("\n\n ----- Display Info by using Call and custon message -----")
displayInfoModified.call(student,(msg))




// 3. Callbacks

// fucntion to convert the string into uppercase
function upperCase(str){
return  str.toUpperCase();
}


function processSubjects(subjects , uppercase){
    for(let i=0; i<subjects.length; i++){
        console.log(uppercase(subjects[i]));
    }
}

console.log("\n\n -----Print the subjects using callbacks and print it in Uppercase-----")
const subject = student.subjects;
processSubjects(subject,upperCase);



// 4.Map and Filter

// DOUBLE GRADES USING MAP
function doubleGrades (grades){
   

console.log("\n\n -----Previous Grade----- ");
console.log(grades);
grades = grades.map((val)=>{
return val*2
}) 

console.log("\n\n-----Grades after double-----");
console.log(grades);
}

//  declare grades variale which store the grades present in the student object
let grades = student.grades;

//  fucntion call to display the grades after double 
doubleGrades(grades);


//  Students grader >=70

function display_Grades_GreaterThan70(grades){

const subjects = student.subjects;
   let valid_subjects = new Array();
   let cnt = 0;
     (grades).filter((val)=>{
if(val>=70){
    valid_subjects.push(subjects[cnt]);
}
cnt++;
        }) 
        
        console.log("\n\n-----Grades Greater Than OR Equal To  70 : ----");
        console.log(valid_subjects);
}
// fucntion call to print the students >= 70
display_Grades_GreaterThan70(grades);