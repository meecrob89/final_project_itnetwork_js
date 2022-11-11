const submitButton = document.getElementById("submit");
const firstNameInput = document.getElementById("firstName");
const secondNameInput = document.getElementById("secondName");
const ageInput = document.getElementById("age");
const phoneNumberInput = document.getElementById("phoneNumber");

let database = new Database();
let validator = new Validator();

submitButton.onclick = () => {
    validator.validate(firstNameInput.value, secondNameInput.value, phoneNumberInput.value, ageInput.value);
    window.location.reload();
}

addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        validator.validate(firstNameInput.value, secondNameInput.value, phoneNumberInput.value, ageInput.value);
        window.location.reload();
    }
});