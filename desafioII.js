
// Funcion para obtener los datos
async function obtenerUsuarios(){
    const respuesta = await fetch("https://randomuser.me/api/?results=5000");
    const datos = await respuesta.json();
    return datos.results;
}

// Funcion para mostrar los datos
function mostrarUsuarios(usuarios){
    const contenedorUsuarios =document.getElementById("user-data");
    usuarios.forEach(usuario =>{
        const parrafo = document.createElement("p");
        parrafo.innerHTML = `
        Nombre: ${usuario.name.first} ${usuario.name.last}
        <br>
        Email: ${usuario.email}
        <br>
        Género: ${usuario.gender}
        <br>
        Edad: ${usuario.dob.age}
        <br>
        <img src="${usuario.picture.large}" alt="${usuario.name.first} ${usuario.name.last}">`;
        contenedorUsuarios.appendChild(parrafo);
    })
}

// Funcion principal
async function main(){
    const usuarios = await obtenerUsuarios();
    mostrarUsuarios(usuarios);
}

main();
