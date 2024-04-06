console.log("1. Create student, bus, employee and mobile objects with all possible properties");

let student={
    name:"Vignesh Varanasi",
    roll:"22501A05J1",
    mail:"varanasivsv@gmail.com",
    branch:"CSE",
    section:3,
    yearOfStudy:2,
    phone:1234567890,
    marks:{
        c:100,
        cpp:90,
        python:70,
        java:100
    }
}
console.log(student)

let bus={
    busNo:1234,
    busDriver:"Vignesh",
    busRoute:"Vijayawada to Guntur",
    busCapacity:50,
    busSpeed:60,
    busType:"AC",
    busFare:500,
    busTime:"10:00AM"
}
console.log(bus)

let employee={
    empName:"Vignesh",
    empId:1234,
    empMail:"varanasivsv@gmail.com",
    empPhone:1234567890,
    empSalary:50000,
    empDesignation:"Software Developer",
    empExperience:2,
    knownLanguages:["C","C++","Python","Java"]
}
console.log(employee)

let mobile={
    brand:"Apple",
    model:"iPhone 15 Pro",
    color:"Space Grey",
    storage:256,
    chip:"A17 Bionic",
    camera:{
        front:12,
        rear:48
    },
    battery:"3,274mah",
    price:100000
}
console.log(mobile)