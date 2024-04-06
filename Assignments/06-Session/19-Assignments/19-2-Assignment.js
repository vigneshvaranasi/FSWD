console.log("\n2. Create Student object with properties roll number, name, marks(array),address and method to compute aggregate of marks");
let studentDetails={
    roll:"22501A05J1",
    name:"Vignesh Varanasi",
    marks:[100,90,70,100],
    address:{
        city:"Vijayawada",
        state:"Andhra Pradesh",
        country:"India"
    },
    aggregate:function(){
        let sum=0;
        for(let i=0;i<this.marks.length;i++)
            sum+=this.marks[i];
        return sum/this.marks.length;
    }
}
console.log(studentDetails);
console.log("The Aggregate of Marks is: "+studentDetails.aggregate());