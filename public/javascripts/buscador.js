function doSearch() {

    const tableReg = document.getElementById('table');


    const searchText = document.getElementById('searchTerm').value.toLowerCase();

    let total = 0;



    // Recorremos todas las filas con contenido de la tabla

    for (let i = 1; i < tableReg.rows.length; i++) {


        let found = false;

        const cellsOfRow = tableReg.rows[i].getElementsByTagName('td');

        // Recorremos todas las celdas

        for (let j = 0; j < cellsOfRow.length && !found; j++) {

            const compareWith = cellsOfRow[j].innerHTML.toLowerCase();

            // Buscamos el texto en el contenido de la celda

            if (searchText.length == 0 || compareWith.indexOf(searchText) > -1) {

                found = true;

                total++;

            }

        }

        if (found) {

            tableReg.rows[i].style.display = '';

        } else {

            // si no ha encontrado ninguna coincidencia, esconde la

            // fila de la tabla

            tableReg.rows[i].style.display = 'none';

        }

    }



}