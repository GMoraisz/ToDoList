function adicionarTarefa() {
    var nomeTarefa = document.getElementById('nomeTarefa').value;

    if (nomeTarefa.trim() !== "") {
        var table = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.rows.length);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        cell1.innerHTML = nomeTarefa;

        var conclButton = document.createElement('button');
        conclButton.innerHTML = 'Concluída';
        conclButton.className = 'concbutton';
        conclButton.onclick = function () {
            markConcluded(newRow);
        };
        cell2.appendChild(conclButton);

        var clearButton = document.createElement('button');
        clearButton.innerHTML = 'Limpar Tarefa';
        clearButton.className = 'concbutton';
        clearButton.onclick = function () {
            clearTask(newRow);
        };
        cell3.appendChild(clearButton);

        document.getElementById('nomeTarefa').value = "";

        newRow.style.textAlign = "center";
    }
}

function markConcluded(row) {
    row.deleteCell(1);
    row.deleteCell(1);
    document.getElementById('taskTable').deleteRow(row.rowIndex);

    var concludedTable = document.querySelector('.concludedtasks tbody');
    concludedTable.appendChild(row);
}

function clearTask(row) {
    document.getElementById('taskTable').deleteRow(row.rowIndex);
}
