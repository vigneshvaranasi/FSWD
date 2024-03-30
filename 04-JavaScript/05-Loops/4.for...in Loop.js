let person = {
    name: "Vignesh",
    age: 19,
    job: "Developer"
};
for (let key in person) {
    console.log(key, person[key]);
}