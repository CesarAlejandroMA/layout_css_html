// document.getElementById('nombreJs')
// .setAttribute('value' , 'Johan');

document.getElementById('saludarBtn')
.addEventListener('click', () => {
    let nombrePersona = document.getElementById('nombreJs').value;
    // if(nombrePersona==null || nombrePersona == ''){
        if(!nombrePersona){
        alert('Debe ingresar el nombre');
    }else{
        alert('Hola ' + nombrePersona + '!');
    }
    
});