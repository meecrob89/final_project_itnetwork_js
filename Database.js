class Database {
    constructor() {
        const memory = JSON.parse(localStorage.getItem("insuredsInStorage"));
        if (memory) {
            this.insureds = memory;
        } else {
            this.insureds = [];
        }
        this.getInsuredsFromStorageOnStart();
    }

    makeNewInsured(firstName, secondName, phoneNumber, age) {
        let newInsured = new Insured(firstName, secondName, age, phoneNumber);
        this.insureds.push(newInsured);
        localStorage.setItem("insuredsInStorage", JSON.stringify(this.insureds));
    }

    getInsuredsFromStorage() {
        const table = document.getElementById("table");
        let tr = document.createElement("tr");
        table.appendChild(tr);

        let tdName = document.createElement("td");
        let tdPhoneNumber = document.createElement("td");
        let tdAge = document.createElement("td");
        let tdRemove = document.createElement("td");
        tdRemove.className = "tdRemove";

        let removeButton = document.createElement("img");
        removeButton.className = "removeButton";
        removeButton.src = "images/remove.png";

        for (let i = 0; i < this.insureds.length; i++) {
            let insuredFromStorage = this.insureds[i];

            tdName.textContent = insuredFromStorage.name;
            tdAge.textContent = insuredFromStorage.age;
            tdPhoneNumber.textContent = insuredFromStorage.phoneNumber;

            removeButton.id = i + 1;
            tr.id = "row" + removeButton.id;

            removeButton.onclick = () => {
                document.getElementById("row" + removeButton.id).remove();
                let localStorageRemovingItem = JSON.parse((localStorage.getItem("insuredsInStorage")));
                localStorageRemovingItem.splice(removeButton.id - 1, 1);
                localStorage.setItem("insuredsInStorage", JSON.stringify(localStorageRemovingItem));
            }
    
            tr.appendChild(tdName);
            tr.appendChild(tdPhoneNumber);
            tr.appendChild(tdAge);
            tdRemove.appendChild(removeButton);
            tr.appendChild(tdRemove);

            
        }
    }

    getInsuredsFromStorageOnStart() {
        for (let i = 0; i < this.insureds.length; i++) {
            let insuredFromStorage = this.insureds[i];
            let tr = document.createElement("tr");
            tr.className = "rows"
            table.appendChild(tr)

            let tdName = document.createElement("td");
            let tdAge = document.createElement("td");
            let tdPhoneNumber = document.createElement("td");
            let tdRemove = document.createElement("td");
            tdRemove.className = "tdRemove";

            let removeButton = document.createElement("img");
            removeButton.className = "removeButton";
            removeButton.src = "images/remove.png";

            removeButton.id = i + 1;
            tr.id = "row" + removeButton.id;

            tdName.textContent = insuredFromStorage.name;
            tdAge.textContent = insuredFromStorage.age;
            tdPhoneNumber.textContent = insuredFromStorage.phoneNumber;
            removeButton.textContent = "odebrat";

            removeButton.onclick = () => {
                document.getElementById("row" + removeButton.id).remove();
                let localStorageBeforeRemoveItem = JSON.parse((localStorage.getItem("insuredsInStorage")));
                localStorageBeforeRemoveItem.splice(removeButton.id - 1, 1);
                localStorage.setItem("insuredsInStorage", JSON.stringify(localStorageBeforeRemoveItem));

                let buttons = document.getElementsByClassName("removeButton");
                let rows = document.getElementsByClassName("rows");

                for (i = 0; i < buttons.length; i++) {
                    buttons[i].id = i + 1;
                    rows[i].id = "row" + (i + 1);
                }
            }
    
            tr.appendChild(tdName);
            tr.appendChild(tdPhoneNumber);
            tr.appendChild(tdAge);
            tdRemove.appendChild(removeButton);
            tr.appendChild(tdRemove);
        }
    }
}