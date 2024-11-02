document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('container');
        const add = document.getElementById('add');
        const save = document.getElementById('save');
        const output = document.getElementById('output');

        function createElement() {
                const element = document.createElement('div');
                element.className = 'element';
                element.innerHTML = `<input type="text" id="name">
                                    <input type="text" id="value">
                                    <button class="up">&uarr;</button>
                                    <button class="down">&darr;</button>
                                    <button class="delete">&#9747;</button>`;
                return element;
            }
        
            add.addEventListener('click', () => {
                const newElement = createElement();
                container.appendChild(newElement);
            });

        container.addEventListener('click', (event) => {
            const target = event.target;
            const element = target.closest('.element');
            const arr_e = Array.from(container.children);
            const index = arr_e.indexOf(element);

            if (target.classList.contains('up')) {
                if (index > 0) {
                    container.insertBefore(element, arr_e[index - 1]);
                }
            } else if (target.classList.contains('down')) {
                if (index < arr_e.length - 1) {
                    container.insertBefore(element, arr_e[index + 2]);
                }
            } else if (target.classList.contains('delete')) {
                element.remove();
            }
        });

        save.addEventListener('click', () => {
            const elements = Array.from(container.children);
            let text = "";

            elements.forEach((element, index) => {
                 let text1 = element.querySelector('#name');
                 let text2 = element.querySelector('#value');

                 if ((text1 && text2) !== null) {
                    text += `${text1.value}` + `: ` + `${text2.value}`;
                    if (index < elements.length - 1) {
                        text += ', ';
                    }
                 } else {
                    text += `пустое поле!`;
                 }
             });
             output.textContent = "{" +  text + "}";
         });
     })
