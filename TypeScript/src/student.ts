export default class Student {
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
