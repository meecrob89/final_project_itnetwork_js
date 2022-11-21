class Validator {
    validate(firstNameFromInput, secondNameFromInput, phoneNumberFromInput, ageFromInput) {

        const justLatters = /^[a-zA-ZÀ-ž]+$/;
        const justNumbers = /^[0-9]+$/;

        if (justLatters.test(firstNameFromInput) &&
            justLatters.test(secondNameFromInput) &&
            firstNameFromInput.length < 15 &&
            secondNameFromInput.length < 15 &&
            phoneNumberFromInput.length == 9 &&
            justNumbers.test(phoneNumberFromInput) &&
            (ageFromInput > 0) && (ageFromInput < 110)
            ) {
            database.makeNewInsured(firstNameInput.value, secondNameInput.value, ageInput.value, phoneNumberInput.value);
        } else if (
            (!justLatters.test(firstNameFromInput) ||
            (!justLatters.test(secondNameFromInput))
            )
        ) {
                alert("Zadejte platné jméno.");
                return
        }  else if (firstNameFromInput.length > 15) {
                alert("Jméno a příjmení by neměly obsahovat více než 15 znaků")
                return
        }  else if (
            phoneNumberFromInput.length != 9) {
                alert("Telefonní číslo musí obsahovat 9 číselných znaků.");
                return
        } else if (
            !justNumbers.test(phoneNumberFromInput)) {
                alert("Telefonní číslo obsahuje nepovolené znaky");
                return
        } else if (
            (ageFromInput < 0) || 
            (ageFromInput > 110) ||
            (!justNumbers.test(ageFromInput))) {
                alert("Věk musí být číslo od 1 do 110");
                return
        }
        database.getInsuredsFromStorage();

        if (firstNameInput.value && 
            secondNameInput.value && 
            ageInput.value &&
            phoneNumberInput.value)
                {
                firstNameInput.value = "";
                secondNameInput.value = "";
                ageInput.value = "";
                phoneNumberInput.value = "";
            }
    }
}