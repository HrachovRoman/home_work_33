'use strict';
(function() {
    
    const form = document.getElementById('form');

    form.addEventListener('submit', event => {
        event.preventDefault();
        const obj = {}; 
        const inputs = event.target.querySelectorAll('input, textarea');

        inputs.forEach(input => {
            obj[input.name] = input.value; //вносим данные в объект
        });

        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `<b>Заголовок:</b> ${obj.name} <strong>Описание:</strong> ${obj.description}`;

        document.querySelector('.card-content').append(div);

        event.target.reset(); //очищаем форму
    });


    const input = document.querySelectorAll('.form-control');

    input.forEach(item => {
        
        item.addEventListener('focus', event => {
            if (item.value === '') {
                event.target.style.boxShadow = '0 0 0 0.25rem hsla(0, 94%, 79%, 0.548)';
                event.target.style.borderColor = 'hsla(0, 94%, 79%, 0.548)';
                event.target.style.background = 'hsla(0, 94%, 79%, 0.548)';
            }
        });

        item.addEventListener('input', event => {
            if (item.value === '') {
                event.target.style.boxShadow = '0 0 0 0.25rem hsla(0, 94%, 79%, 0.548)';
                event.target.style.borderColor = 'hsla(0, 94%, 79%, 0.548)';
            }
            else {
                event.target.style.boxShadow = '0 0 0 0.25rem rgb(13 110 253 / 25%)';
                event.target.style.borderColor = '#86b7fe';
                event.target.style.background = '';

            }
            
        });

        item.addEventListener('blur', event => {
            event.target.style.boxShadow = '';
            event.target.style.borderColor = '';
            event.target.style.background = '';
            
        });
    });

})();



