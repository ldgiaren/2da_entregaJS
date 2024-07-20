
//____________________________ MENU1: 

let id_cod = 1 
class Auto_dispo {
    constructor(marca,referencia,modelo, precio){
        
        
        this.marca=marca,
        this.referencia=referencia,
        this.modelo=modelo,
        this.precio=precio,
        
        this.codigo= id_cod++,
        this.kilometraje = Math.round(Math.random() * 180000);
        this.disponibles = Math.round(Math.random() * 5);
    }
}

let autos_disponibles =[
 new Auto_dispo('mazda','mazda 3', 2020, 50000000 ),
 new Auto_dispo('mazda','cx 30', 2024,  90000000 ),
 new Auto_dispo('mazda','cx 30', 2020,  80000000 ),
 new Auto_dispo('renault','logan', 2009,  22000000 ),
 new Auto_dispo('renault','twingo', 2011,  18000000 ) 
]

console.log(autos_disponibles)

function car_dispo (){
return autos_disponibles
}

function buscar_por_marca (){
    const marca = prompt('ingrese la marca.')
    return ( autos_disponibles.filter((b)=>b.marca == marca)); 
}

function buscar_por_anio (){
    const modelo = prompt('ingrese el año del vehiculo.')
    return ( autos_disponibles.filter((b)=>b.modelo == modelo)); 
}

function buscar_por_kilometraje (){
    let kilo2 = parseInt(prompt('Ingrese un kilometraje máximo:'), 10);
        return autos_disponibles.filter ((k)=>k.kilometraje < kilo2 )   
}

function buscar_por_precio () {
    let precio_cliente = parseInt(prompt('Ingrese un precio máximo para su compra:'));
    return autos_disponibles.filter((p)=> p.precio <= precio_cliente)
}

// console.log(buscar_por_kilometraje())
// console.log(buscar_por_precio())

//________________ MENU2: 

//opcion2 
// podra ingresar los carros que desea vender.[X]
// Podra consultar los carros ingresados al sistema.[X]



let autos_ingresados = []

function ingresar (){
    let marca = prompt('ingrese la marca')
    let referencia = prompt('ingrese la referencia')
    let modelo = prompt ('Ingrese el modelo')
    let precio = prompt ('ingrese el precio')
    let kilometraje = prompt ('ingrese el kilometraje')

    let ingreso_de_carro_nuevo = {
        marca: marca,
        referencia: referencia,
        modelo: modelo,
        precio: precio,
        kilometraje: kilometraje
     }

     autos_ingresados.push(ingreso_de_carro_nuevo);
     console.log(ingreso_de_carro_nuevo)
}

function auto_ingresa_por_cliente(){
    return autos_ingresados;
}

//console.log(ingresar())
//console.log(autos_ingresados)


// ___________________ DESARROLLO MENU1 Y MENU2

function menu_cliente (){
    const opciones = prompt(`Bienvenido a Compra y Venta Automotriz Los Sayayines.
    Menu 1:
    1.1 - Ver la lista de carros disponibles
    1.2 - Filtrar los carros disponibles por marca
    1.3 - Filtrar los carros disponibles por año
    1.4 - Filtrar los carros por kilometraje máximo que está buscando
    1.5 - Filtrar los carros por el precio máximo que está buscando
    Menu 2:
    2.1 - Ingresar un carro para vender.
    2.2 - Carros ingresados para su venta al sistema.
    Ingrese su opción:`);

    if(opciones.startsWith('1.')){

    if (opciones === '1.1'){
        console.log (car_dispo ());
    }else if (opciones === '1.2'){
        console.log (buscar_por_marca ());
    }else if(opciones === '1.3'){
        console.log (buscar_por_anio ());
    }else if (opciones === '1.4'){
        console.log (buscar_por_kilometraje());
    }else if(opciones=== '1.5'){
        console.log (buscar_por_precio());
    }else {
        console.log ('ingrese una opcion valida')
    }

}else if (opciones.startsWith('2.')){
    if(opciones === '2.1'){
        ingresar ();
    }else if(opciones === '2.2'){
        console.log (auto_ingresa_por_cliente())
    }
    else{
        console.log('ingrese una opcion valida')
    }
}else{ 
    console.log ('ingrese una opcion valida')
}

}


//menu_cliente()



