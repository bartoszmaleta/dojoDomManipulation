// function row() {
//     return `
//     <form method="GET">
//         <label for="item_1">Item 1:</label><input type="text" name="item_1" id="item_1"/> <br/>
//     </form>
//     `
// }


// function main() {
//     const add = document.getElementById("add_row");
//     const container = document.querySelector(".container");

//     let numberOfRows = 1;
//     let listRows = [1];
//     add.addEventListener('click', function() {
//         if (numberOfRows === 10 || listRows.length === 10) {
//             prompt("Can't add more rows");
//         } else {
//             const rowToAdd = add();
//             container.appendChild(rowToAdd);
//         }
//     });

//     // event handlers and other code here
// }

// main();


function main2() {
    const add = document.getElementById("add_row");
    const container = document.querySelector(".container");

    let numberOfRows = 1;
    let rows = [1];
    add.addEventListener('click', function() {
        if (numberOfRows === 10 || rows.length === 10) {
            prompt("Can't add more rows");
        } else {
            // const rowToAdd = add();
            const form = document.createElement('form');
            rows.push(form);
            
            form.method = 'GET';
            
            const label = document.createElement('label');
            label.htmlFor = 'item_' + rows.length;
            label.textContent = 'Item ' + rows.length + ':';
            form.appendChild(label);

            const input = document.createElement('input');
            input.type = 'text';
            input.name = 'item_' + (rows.length +  1);
            input.id = 'item_' + (rows.length + 1);

            form.appendChild(input);

            const remove = document.createElement('remove');
            remove.textContent = 'Remove';
            remove.addEventListener('click', function() {
                container.removeChild(form);
                rows.pop(form);
            });
            form.appendChild(remove);
            container.appendChild(form);
        }
    });
}

main2();