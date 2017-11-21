import Student from './student';
import Person from './person';

function greeter(person: Person) {
    return "Hello " + person.fullName;
}

let user = new Student("John", "Doe", 1)

document.body.innerHTML = greeter(user);