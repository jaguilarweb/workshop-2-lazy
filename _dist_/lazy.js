const isIntersecting = (entry) => {
  //Podría usar algo como si estás a 200px de la pantalla haz x
  return entry.isIntersecting;
};

const accion = (entry) => {
  const nodo = entry.target;
  console.log('Hi');

  observer.unobserve(nodo);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(accion);
});


export const registerImage = (imagen) => {
  observer.observe(imagen);
};



