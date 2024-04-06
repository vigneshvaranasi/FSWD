class Student{
    constructor(sno, sname, semail, sphone){
        this.sno = sno;
        this.sname = sname;
        this.semail = semail;
        this.sphone = sphone;
    }
    getStudent(){
        console.log(`Student No: ${this.sno}`);
        console.log(`Student Name: ${this.sname}`);
        console.log(`Student Email: ${this.semail}`);
        console.log(`Student Phone: ${this.sphone}`);
    }
}
let s1 = new Student(999,"Vignesh","varanasivsv@gmail.com",1234567890);
let s2 = new Student(1,"Eswar","eswar@gmail.com",1234567890);
console.log(s1);
console.log(s2);
s1.getStudent();
s2.getStudent();