const botonMenu = document.querySelector('.icono-menu');
const menuMovil = document.querySelector('.menu');



botonMenu.addEventListener('click', (e) => {
     menuMovil.classList.toggle('activo');

     if (menuMovil.classList.contains('activo')) {
         botonMenu.style.color = '#fff';
         
     }else{
     	 botonMenu.style.color = '#000';
     	 
     }
}); 

