//objetos

const mascota = {
  nombre: "Tom",
  edad: 10,
  vivo: true,
  razas: ["peludo", "negro"]
};

console.log(mascota);
console.log(mascota.nombre);
console.log(mascota.edad);
console.log(mascota.vivo);

mascota.Id = 1;

console.log(mascota.razas[0]);

//Destructuring object

const nombreMarcota = mascota.nombre;

const { edad } = mascota;
console.log(edad);

const web = {
  nombre: "bluuweb",
  links: {
    enlace: "www.bluuweb.cl"
  },
  redesSociales: {
    youtube: {
      enlace: "youtube.com/bluuweb",
      nombre: "bluuwbe yt"
    },
    facebook: {
      enlace: "facebook.com/bluuweb",
      nombre: "bluuwbe yt"
    }
  }
};

console.log(web.redesSociales.youtube.enlace);
const enlaceYt = web.redesSociales.youtube.enlace;
console.log(enlaceYt);
const { enlace, nombre } = web.redesSociales.youtube;
console.log(enlace);
console.log(nombre);
