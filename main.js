/* Se trata de un sistema de intercambio de cocheras en casas particulares.
Los usuarios publican su oferta para que otros usuarios los contacten. 
Los dueños completan el formulario con sus datos personales y luego los de la cochera.
El sistema toma la data por medio de un form y devuelve por DOM la info de la cochera.

Para el proyecto final se implementara iconografia para reemplazar los valores booleanos.
Se calculara el precio de las cocheras otorgando bonus de acuerdo a sus features.

Kreimer Nataniel - Comision 41300
*/

class Cochera {
    constructor(user, email, precio, direccion, zona, automatico, grande, cubierta) {
    this.user = user;
    this.email = email;
    this.precio = precio;
    this.direccion = direccion;     
    this.zona = zona;
    this.automatico = automatico;
    this.grande = grande;
    this.cubierta = cubierta;
    }
}

const cocheras = [];

//Si el LocalStorage tiene datos, los agrego al Array de Reservas.

if (localStorage.getItem('cocheras')) {
let cochera = JSON.parse(localStorage.getItem('cocheras'));
for (let i = 0; i < cochera.length; i++) {
    cocheras.push(cochera[i]);
    }
}

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    agregarCochera();
});

function agregarCochera() {
    const user = document.getElementById('user').value;
    const email = document.getElementById('email').value;
    const precio = document.getElementById('precio').value;
    const direccion = document.getElementById('direccion').value;
    const zona = document.getElementById('zona').value;
    const automatico = document.getElementById('automatico').checked;
    const grande = document.getElementById('grande').checked;
    const cubierta = document.getElementById('cubierta').checked;

    const nuevaCochera = new Cochera(user, email, precio, direccion, zona, automatico, grande, cubierta);
    cocheras.unshift(nuevaCochera);
    //Agrego al LocalStorage:
    localStorage.setItem('cocheras', JSON.stringify(cocheras));
    formulario.reset();
}

const contenedorCocheras = document.getElementById('contenedorCocheras');
const verCocheras = document.getElementById('verCocheras');

verCocheras.addEventListener('click', () => {
mostrarCocheras();
});

function mostrarCocheras() {
    contenedorCocheras.innerHTML = '';
    cocheras.forEach((cochera) => {

        const div = document.createElement('div');
        
        div.innerHTML = `
            <div>
                <p>Usuario: ${cochera.user}</p>
                <p>Email: ${cochera.email}</p>
                <p>Precio: $${cochera.precio}</p>
                <p>Direccion: ${cochera.direccion}</p>
                <p>Zona: ${cochera.zona}</p>
                <p>Control Remoto & Porton Automatico: ${cochera.automatico}</p>
                <p>Apropiada para vehiculos Gran Tamano: ${cochera.grande}</p>
                <p>El vehiculo queda completamente bajo techo: ${cochera.cubierta}</p>
            </div>
        `;

    contenedorCocheras.appendChild(div);
    });
}