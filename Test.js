function loadNamesForTest() {

    let jmena = ["Roman", "Tomáš", "Ivan", "Tobiáš", "Ivana", "Viktor", "Adrian"];
    let prijmeni = ["Vrchlický", "Pokorný", "Tůma", "Rudovský", "Adámková", "Proutek", "Zvěřina"];
    let roky = [1, 2, 3, 4, 5, 6, 7];
    let cisla = [111111111, 222222222, 333333333, 444444444, 555555555, 666666666, 777777777];

    testButton = document.createElement("button");
    testButton.textContent = "načti jména pro test";
    testButton.style.width = "150px";
    testButton.style.height = "50px";
    testButton.style.backgroundColor = "yellow";
    testButton.style.borderRadius = "25px";
    testButton.style.border = "none";
    testButton.onclick = () => {
        for (i = 0; i < 6; i++) {
            firstNameInput.value = jmena[i];
            secondNameInput.value = prijmeni[i];
            ageInput.value = roky[i];
            phoneNumberInput.value = cisla[i];
            submitButton.onclick();
            window.location.reload();
        }
    }
    document.body.appendChild(testButton);
}

loadNamesForTest();