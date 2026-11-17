class Student {
    static collegeName = "PW AT Batch";
    static mentorName = "prrammoddutta";


    constructor(name,score) {
        this.name = name;
        this.score = score;
    }
    static display() {
        console.log(this.name + " part of the", Student.collegeName + this.score)
    }
    nsf(){
        console.log(this.name + " part of the", Student.collegeName + " with a score of " + this.score);
    }
}
let pavan = new Student("Pavan",80);
pavan.nsf();
let kumar = new Student("Kumar",91);
let sumu = new Student("Sumu",87);
let padmini = new Student("Padmini",99);
console.log(Student.collegeName);
console.log(pavan.name);
console.log(kumar.name);