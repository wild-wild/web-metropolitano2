var elemento = document.getElementById('Header');

if (elemento !== null) {
    elemento.style.propiedad = 'valor';
} else {
    console.log('El elemento no se encontró en el documento.');
}


var header = document.getElementById('Header');

window.addEventListener('scroll',()=> {
    var scroll = window.scrollY
    if (scroll>10){
        header.style.backgroundColor = '#121212'
    } else {
        header.style.backgroundColor = 'transparent'
    }
})