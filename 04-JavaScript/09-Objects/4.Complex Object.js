let person={
    name:'Vignesh',
    age:19,
    roll:"22501A05J1",
    marks:[10,20,30,40,50],
    address:{
        city:'Vijayawada',
        state:'Andhra Pradesh',
        country:'India'
    },
    getAverage:function(){
        let sum=0;
        for(let mark of this.marks){
            sum+=mark;
        }
        return sum/this.marks.length;
    }
}
console.log(person);
console.log(person.marks);
console.log(person.getAverage());