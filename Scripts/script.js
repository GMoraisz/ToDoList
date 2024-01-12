// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    var nomeTarefa = document.getElementById('nomeTarefa').value;

    if (nomeTarefa.trim() !== "") {
        // Cria uma nova linha na tabela de tarefas
        var table = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.rows.length);

        // Cria as células para a tarefa e o botão concluído
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);

        // Adiciona o nome da tarefa à célula
        cell1.innerHTML = nomeTarefa;

        // Adiciona o botão concluído à célula
        var conclButton = document.createElement('button');
        conclButton.innerHTML = 'Concluída';
        conclButton.className = 'concbutton'; // Adiciona a classe ao botão
        conclButton.onclick = function () {
            markConcluded(newRow);
        };
        cell2.appendChild(conclButton);

        // Limpa o campo de entrada
        document.getElementById('nomeTarefa').value = "";

        // Alinha a nova linha ao centro
        newRow.style.textAlign = "center";
    }
}

// Função para marcar uma tarefa como concluída
function markConcluded(row) {
    // Remove o botão "Concluída" da célula
    row.deleteCell(1);

    // Remove a linha da tabela de tarefas
    document.getElementById('taskTable').deleteRow(row.rowIndex);

    // Adiciona a linha à tabela de tarefas concluídas
    var concludedTable = document.querySelector('.concludedtasks tbody');
    concludedTable.appendChild(row);
}
// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    var nomeTarefa = document.getElementById('nomeTarefa').value;

    // Verifica se o campo da tarefa não está vazio
    if (nomeTarefa.trim() !== "") {
        // Cria uma nova linha na tabela de tarefas
        var table = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.rows.length);

        // Cria as células para a tarefa e os botões
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        // Adiciona o nome da tarefa à célula
        cell1.innerHTML = nomeTarefa;

        // Adiciona o botão "Concluída" à célula
        var conclButton = document.createElement('button');
        conclButton.innerHTML = 'Concluída';
        conclButton.className = 'concbutton'; // Adiciona a classe ao botão
        conclButton.onclick = function () {
            markConcluded(newRow);
        };
        cell2.appendChild(conclButton);

        // Adiciona o botão "Limpar Tarefa" à célula
        var clearButton = document.createElement('button');
        clearButton.innerHTML = 'Limpar Tarefa';
        clearButton.className = 'concbutton'; // Adiciona a classe ao botão
        clearButton.onclick = function () {
            clearTask(newRow);
        };
        cell3.appendChild(clearButton);

        // Limpa o campo de entrada
        document.getElementById('nomeTarefa').value = "";

        // Alinha a nova linha ao centro
        newRow.style.textAlign = "center";
    }
}

// Função para marcar uma tarefa como concluída
function markConcluded(row) {
    // Remove os botões da célula
    row.deleteCell(1);
    row.deleteCell(1);
  
    // Remove a linha da tabela de tarefas
    document.getElementById('taskTable').deleteRow(row.rowIndex);

    // Adiciona a linha à tabela de tarefas concluídas
    var concludedTable = document.querySelector('.concludedtasks tbody');
    concludedTable.appendChild(row);
}

// Função para limpar uma tarefa
function clearTask(row) {
    // Remove a linha da tabela de tarefas
    document.getElementById('taskTable').deleteRow(row.rowIndex);
}
