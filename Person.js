import User from './Student.js';
class Person extends User {
    welcome() {
        console.log("Welcome New Day");
    }
}
const p1 = new Person();
p1.welcome();
p1.setAge(12);
p1.getAge();
p1.setFirstName("PaPa")
p1.setLastName("Ra")
p1.getFirstName();
p1.getLastName();