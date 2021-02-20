//Fetch

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results);

    data.results.forEach((element) => {
      console.log(`${element.name}`);
    });
  }) //los errores vienen del backend
  .catch((error) => console.log(error));

//async await

const obtenerPokemones = async () => {
  try {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await respuesta.json();

    data.results.forEach((element) => {
      console.log(`async ${element.name}`);
    });
  } catch (error) {
    console.log(error);
  }
};

obtenerPokemones();

//Fetch MAP

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((res) => res.json())
  .then((data) => {
    let arrayNombre = [];
    data.results.forEach((element) => {
      arrayNombre.push(element.name);
    });
    console.log(arrayNombre);
  }) //los errores vienen del backend
  .catch((error) => console.log(error));

//async await MAP

const obtenerPokemonesMap = async () => {
  try {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await respuesta.json();
    // console.log(data.results);
    const arrayNombres = data.results.map((poke) => poke.name);
    console.log(arrayNombres);
  } catch (error) {
    console.log(error);
  }
};

obtenerPokemonesMap();

const obtenerPokemonesFilter = async () => {
  try {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await respuesta.json();
    // console.log(data.results);
    const arrayNombres = data.results.filter(
      (poke) => poke.name !== "bulbasaur"
    );
    console.log(arrayNombres);
  } catch (error) {
    console.log(error);
  }
};

obtenerPokemonesFilter();
