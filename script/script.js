const table = document.querySelector(".extrato__table");
const button = document.querySelector(".transacao__button");
const inputName = document.querySelector("#transacaoInputName");
const inputMoney = document.querySelector("#transacaoInputMoney");
const inputDate = document.querySelector("#transacaoInputDate");

button.addEventListener("click", function(event){
    event.preventDefault();
    if(inputName.value.trim()==="" || isNaN(inputMoney.value) || inputMoney.value.trim() ==="" || inputDate.value.trim()==="" || isNaN(inputDate.value)){
        alert("Informações Incorretas!")

    }else{

        const line = document.createElement("tr");
        
        const nameColumn = document.createElement("td");
        const inputNameContent = document.createTextNode(inputName.value);
        nameColumn.appendChild(inputNameContent);
        
        const moneyColumn = document.createElement("td");
        const inputMoneyContent = document.createTextNode(inputMoney.value);
        moneyColumn.appendChild(inputMoneyContent);
        
        const dateColumn = document.createElement("td");
        const inputDateContent = document.createTextNode(inputDate.value);
        dateColumn.appendChild(inputDateContent);
        
        line.appendChild(nameColumn);
        line.appendChild(moneyColumn);
        line.appendChild(dateColumn);
        
        table.appendChild(line);
        
    }



})