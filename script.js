const display = document.querySelector('.resultado');
const botoes = document.querySelectorAll('button');

let expressao = '';

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const value = botao.textContent;

        if (value === 'CE') {
            expressao = '';
            display.textContent = '0';
        }
        
        else if (value === '=') {
            
            try {
                const result = eval(expressao.replace("x", "*").replace("÷", "/"));
                display.textContent = result;
                expressao = '';
            } catch (error) {
                display.textContent = 'Error';
                expressao = '';
            }

        } else {
            expressao += value;
            display.textContent = expressao;
        }
    });
});