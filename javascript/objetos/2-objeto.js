//* Objeto sobre objeto
const sitioWeb = {
  nombre: 'Google',
  link: {
    enlace: 'www.google.cl'
  },
  redesSociales: {
    youtube: {
      enlace: 'youtube.com/google',
      nombre: 'Google'
    }
  }
};
// console.log(sitioWeb.redesSociales.youtube.enlace);
// console.log(sitioWeb.redesSociales.youtube.enlace);
// console.log(sitioWeb.redesSociales.youtube.enlace);

// const enlaceYoutube = sitioWeb.redesSociales.youtube.enlace;
// console.log(enlaceYoutube);

//* Destructuring   (Desmenuzar)
// const {enlace, nombre }   = sitioWeb.redesSociales.youtube;
// console.log(enlace);

const {nombre, link, redesSociales } = sitioWeb;
// console.log(redesSociales);
const { youtube } = redesSociales;
const { enlace } = youtube;
console.log(enlace);