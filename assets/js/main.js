function meuEscopo() {
    const adicionar = document.querySelector('#adicionar');
    const inputDesreverter = document.querySelector('#desreverter');

    adicionar.addEventListener("click", adicionarDesreverter);

    function adicionarDesreverter() {
        const result = document.querySelector('.result');
        if (inputDesreverter){
            console.log(inputDesreverter.value);
            const result = document.querySelector('.result');
            let trocado = document.createElement('option');
            trocado.text = (inputDesreverter.value).split('').reverse().join('');;
            result.appendChild(trocado);
            inputDesreverter.value = '';
            inputDesreverter.focus();
            
            return result.innerHTML = `<p> ${trocado.text} </p> `;
        }
        

    }


}
meuEscopo();