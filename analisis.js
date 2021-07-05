const salariosCol = colombia.map(
  function (personita) {
    return personita.salary;
  }
);

const salariosColSorted = salariosCol.sort(
  function(salaryA, salaryB) {
    return salaryA - salaryB;
  }
);

function esPar(numerito) {
  // if(numerito % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // } 
  return (numerito % 2 === 0); // Es la forma abreviada de ver si es par o no
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento)  {
      return valorAcumulado + nuevoElemento;
    }
  );
   const promedioLista = sumaLista / lista.length;
   return promedioLista;
  }


function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2); // ParseInt es para quitarle los decimales

  if (esPar(lista.length)) {                  // Segundo calculamos la mediana si es par
    const personitaMitad1 = lista[mitad - 1]; 
    const personitaMitad2 = lista[mitad]; 

    const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
    return mediana

  } else {                                    // Primero calculamos la mediana si es impar
    const personitaMitad = lista[mitad]; 
    return personitaMitad;
  }
}

console.log(
  medianaSalarios(salariosColSorted)
)