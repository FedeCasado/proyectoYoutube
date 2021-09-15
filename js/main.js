const contenedor = document.querySelector('.contenedor');

document.querySelector('.boton-menu').addEventListener('click', () => {
    contenedor.classList.toggle('activo');
})

const comprobarAncho = () =>{
    if(window.innerWidth <= 768){
        contenedor.classList.remove('activo')
    }else{
        contenedor.classList.add('activo') 
    }
}   

comprobarAncho();

window.addEventListener('resize', () => {
    comprobarAncho();
})
