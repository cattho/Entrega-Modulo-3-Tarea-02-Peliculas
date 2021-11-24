
obtener_localstorage();



function guardar(){
var persona={
    nombre:document.getElementById('name').value,    
    email:document.getElementById('email').value,
    telefono:document.getElementById('tel').value    
    
};


localStorage.setItem("usuario" ,JSON.stringify(persona))
};

function obtener_localstorage(){
    let datos=localStorage.getItem("usuario")
    console.log(datos);
}