function iniciar(){

    console.log("iniciado");

    console.log("Obteniendo id clientes");
    btnClientes = document.getElementById("agregarCliente");
    btnClientes.addEventListener('click', cargarClientes);
    console.log("OK CLIENTES");
    
   
    console.log("Obteniendo id PEDIDOS");
    btnPedidos = document.getElementById("agregarPedido");
    btnPedidos.addEventListener('click', cargarPedidos);

    console.log("OK PEDIDOS");

    console.log("Obteniendo id REGISTRAR");
    btnRegis = document.getElementById("btnRegistrar");
    btnRegis.addEventListener('click', registrarCliente);
    
    console.log("-- OK");
}

function cargarClientes(){
   
    $("#card-body").load("reg_clientes.php");
    console.log("cargando clientes");
    
}

function cargarPedidos(){
    console.log("cargando pedidos");
}

function registrarCliente(){
   
   console.log("registrando");
   
}

window.onload = iniciar();