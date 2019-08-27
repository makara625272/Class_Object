// class Student {
//     setFirstName(firstName){
//         this.mFirstName = firstName;
//         // return firstName;
//     }
//     getFirstName(){
//         console.log(this.mFirstName);
//     }
// }
// const student1 = new Student();
// student1.setFirstName("romdul");
// student1.getFirstName();
// student1.setFirstName("Makara");
// student1.getFirstName();
// use class keyword 
// start with capital letter 

export default class User {
    // set 
    setFirstName(firstName){
        this.mFirstName = firstName;
    }
    setLastName(lastName){
        this.mLastName = lastName;
    }
    setAge(age){
        this.mAge = age;
    }
    // get
    getFirstName(){
        console.log(this.mFirstName);
    }
    getLastName(){
        console.log(this.mLastName);
    }
    getAge(){
        console.log(this.mAge);
    }
}

// class Person extends User {
//     welcome() {
//         console.log("Welcome New Day");
//     }
// }
// const User1 = new User();
// User1.setFirstName("Makara");
// User1.setLastName("DEU");
// User1.setAge(20);
// User1.getFirstName();
// User1.getLastName();
// User1.getAge();
// const p1 = new Person();
// p1.welcome();
// p1.setAge(10);
// p1.getAge();