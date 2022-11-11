class Insured {
    constructor(firstName, secondName, phoneNumber, age) {
        this.name = `${firstName.charAt(0).toUpperCase() + firstName.slice(1).trim()} ${secondName.charAt(0).toUpperCase() + secondName.slice(1).trim()}`;
        this.phoneNumber = `+420 ${phoneNumber.substring(0, 3)} ${phoneNumber.substring(3, 6)} ${phoneNumber.substring(6, 9)}`;
        this.age = parseInt(age);
    }
}