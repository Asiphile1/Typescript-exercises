// 1. Create a Person class with name and age properties. Implement a method to return the persons name.
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }
}


// 2. Add a private property socialSecurityNumber to the Person class and a method to get the age.
class PersonSecurity {
    name: string;
    age: number;
    private socialSecurityNumber: string;

    constructor(name: string, age: number, socialSecurityNumber: string) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = socialSecurityNumber;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
}

