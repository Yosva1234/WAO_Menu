const sandwishes = [
  { nombre: "Pan con Lechón--------------------", precio: "500.00" },
  { nombre: "Pan con Jamón---------------------", precio: "300.00" },
  { nombre: "Pan con Perro----------------------", precio: "225.00" },
  { nombre: "Pan/Jamón Jamón-----------------", precio: "600.00" },
  { nombre: "Pan/Jamón y Queso----------------", precio: "700.00" },
  { nombre: "Pan con Lechón WAOO!-----------", precio: "1000.00" },
  { nombre: "Pan con Lechón SUPERWAOO!-------", precio: "1500.00" },
  { nombre: "Pan WAOO!----------------------", precio: "1700.00" },
  
];

const bebidas = [
  { nombre: "Jugos de Caja--------------------", precio: "190.00" },
  { nombre: "Refrescos de Lata----------------", precio: "220.00" },
  { nombre: "Cervezas--------------------------", precio: "250.00" },
  { nombre: "Cerveza Cristal-------------------", precio: "300.00" },
  { nombre: "Malteada--------------------------", precio: "500.00" },
  { nombre: "Batidos de Helado----------------", precio: "800.00" },
  { nombre: "Michelada (Cerveza Cristal)------", precio: "600.00" },
  { nombre: "Michelada (Cacique)--------------", precio: "500.00" }
];

const entrantes = [
  { nombre: "Fritas de Malanga-----------------", precio: "400.00" },
  { nombre: "Croquetas-------------------------", precio: "450.00" },
  { nombre: "Tostones Rellenos(J/Queso)-----", precio: "700.00" },
  { nombre: "Frituras de Malanga---------------", precio: "700.00" },
  { nombre: "Picadera Waoo!-------------------", precio: "2000.00" }
];

const especialidad = [
  { nombre: "Pollo Chiflado--------------------", precio: "1000.00" },
  { nombre: "Crudo de Pescado-----------------", precio: "450.00" },
  { nombre: "Ensalada Fría---------------------", precio: "300.00" },
  { nombre: "El Wapeton------------------------", precio: "1500.00" },
  { nombre: "Pan con Perro Perro---------------", precio: "450.00" },
  { nombre: "Antojos---------------------------", precio: "800.00" },
  { nombre: "5 Deseos--------------------------", precio: "1100.00" },
];

// Mostrar los platos en la página
mostrarPlatos(especialidad, "Especialidades de la Casa");
mostrarPlatos(entrantes, "entrantes");
mostrarPlatos(bebidas, "bebidas");
mostrarPlatos(sandwishes, "sandwiches");

function mostrarPlatos(platos, id) {
  const platosContainer = document.getElementById(id);

  // Limpia el contenedor antes de agregar los platos
  platosContainer.innerHTML = "";

  // Recorre la lista de platos y crea un elemento para cada uno
  platos.forEach((plato) => {
    const platoElement = document.createElement("div");
    platoElement.classList.add("plato");

    // Construye el contenido HTML para cada plato
    platoElement.innerHTML = `
      <h3>${plato.nombre}$${plato.precio}</h3>
    `;

    // Agrega el elemento al contenedor
    platosContainer.appendChild(platoElement);
  });
}
