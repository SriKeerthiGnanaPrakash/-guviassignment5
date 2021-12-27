class Person {
    constructor(name,age,address,occupation) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.occupation = occupation;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setAge(age) {
        this.age = age;
    }
    
    getAge() {
        return this.age;
    }

    setAddress(address) {
        this.address = address;
    }

    getAddress() {
        return this.address;
    }

    setoccupation(occupation) {
        this.occupation = occupation;
    }
    
    getOccupation() {
        return this.occupation;
    }

    toString() {
        let personData = `Name: ${this.getName()}\nAge: ${this.getAge()}\nAddress: ${this.getAddress()}\nOccupation: ${this.getOccupation()}`
        return personData;
    }
}

let personObj = new Person("phill",17,"mundakanni Street","plumber");
console.log(personObj.toString());