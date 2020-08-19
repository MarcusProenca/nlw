// Procurar o botao 
document.querySelector("#add-time")
.addEventListener('click', cloneField)
//Quando clicar no botao

//Executar uma açao
function cloneField() {
    //Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: true ou false

    //limpar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input')
        
    //para cada compo, limpar
    fields.forEach(function(field){
        //pegar o field do momento
        field.value = ""
    })
    // colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    