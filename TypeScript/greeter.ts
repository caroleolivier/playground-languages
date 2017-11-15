interface Person {
    firstName: string;
    lastName: string;
    readonly fullName: string;
}

class Student {
    firstName: string;
    lastName: string;
    no: number;

    constructor(firstName: string, lastName: string, no: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.no = no;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

function greeter(person: Person) {
    return "Hello " + person.fullName;
}

let user = new Student("John", "Doe", 1)

document.body.innerHTML = greeter(user);