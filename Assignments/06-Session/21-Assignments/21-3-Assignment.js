console.log("3. Consider the following array of students marks  Find the names of students who got highest marks in maths , physics and chemistry.")
let students=[

    { name:"ravi", marks :{ maths: 89, physics : 70 , chemistry :88}},

    { name:"bhanu", marks :{ maths: 98, physics : 50 , chemistry :68}},

    { name:"kiran", marks :{ maths: 50, physics : 82 , chemistry :94}},

]
function highestMarks(subject) {
    let max = 0;
    let name = "";
    for (let i = 0; i < students.length; i++) {
        if (students[i].marks[subject] > max) {
            max = students[i].marks[subject];
            name = students[i].name;
        }
    }
    return name;
}

console.log("The student with the highest marks in Maths is: " + highestMarks("maths"));
console.log("The student with the highest marks in Physics is: " + highestMarks("physics"));
console.log("The student with the highest marks in Chemistry is: " + highestMarks("chemistry"));