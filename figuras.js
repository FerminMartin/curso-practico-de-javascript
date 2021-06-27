// // Código del cuadrado
// console.group("Cuadrados");

// // const ladoCuadrado = 5;
// // console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

// function perimetroCuadrado(lado) {
//   return lado * 4;
// }
// perimetroCuadrado()

// // console.log("El perímetro del cuadrado es: "+ perimetroCuadrado + "cm");
// // const areaCuadrado = lado * lado;

// function areaCuadrado(lado) {
//   return lado * lado;
// }
// // console.log("El área del cuadrado es: "+ areaCuadrado + "cm^2");
// console.groupEnd();


// // Código del triángulo
// console.group("Triangulos");
// // const ladoTriangulo1 = 6;
// // const ladoTriangulo2 = 6;
// // const baseTriangulo = 4;

// // console.log(
// //   "Los lados del triangulo miden: "
// //   + ladoTriangulo1 + "cm, "
// //   + ladoTriangulo2 + "cm y "
// //   + baseTriangulo + "cm "
// //   );
  
//   // const alturaTriangulo = 5.5;
//   // console.log("La altura del triangulo es de: "+ alturaTriangulo + "cm");
  
//   function perimetroTriangulo(lado1, lado2,  base) {
//     return lado1 + lado2 + base;
//   }
//   // console.log("El perímetro del triángulo es de: "+ perimetroTriangulo + "cm");
  

//   function areaTriangulo(base, altura) {
//     return (base * altura) / 2;
//   }
//   // console.log("El área del triángulo es: "+ areaTriangulo + "cm^2");
  
// console.groupEnd();

// // Código del círculo
// console.group("Círculos");

// // Radio
// // const radioCirculo = 4;
// // console.log("El radio del círculo es: " + radioCirculo + "cm");

//   // Diámetro 
// function diametroCirculo(radio) {
//   return radio * 2; 
// }

//   // PI
// const PI = Math.PI;


// // Circunferencia
// function perimetroCirculo(radio) {
//   const diametro = diametroCirculo(radio);
//   return diametro * PI;
// }

// // Área
// function areaCirculo(radio) {
//   return (radio * radio) * PI;
// }
// console.groupEnd();

// // Aquí interactuamos con el HTML
// // Cuadrado

// function calcularPerimetroCuadrado() {
//   document.getElementById("InputCuadrado");
//   const value = InputCuadrado.value;
  
//   const perimetro = perimetroCuadrado(value);
//   alert(perimetro);
// }
// function calcularAreaCuadrado() {
//   document.getElementById("InputCuadrado");
//   const value = InputCuadrado.value;
  
//   const area = areaCuadrado(value);
//   alert(area);
// }

// // Triangulo
// function calcularPerimetroTriangulo() {
//   document.getElementById("InputLado1");
//   const valueLado1 = InputLado1.value;
//   document.getElementById("InputLado2");
//   const valueLado2 = InputLado2 .value;
//   document.getElementById("InputBase");
//   const valueBase = InputBase.value;
  
  
//   const calcularPerimetroTriangulo = perimetroTriangulo(valueLado1, valueLado2, valueBase );
//   alert(calcularPerimetroTriangulo);
// }
// function calcularAreaTriangulo() {
//   document.getElementById("InputBase");
//   const valueBase = InputBase.value;
//   document.getElementById("InputAltura");
//   const valueAltura = InputBase.value;

//   const calcularAreaTriangulo = areaTriangulo(valueBase, valueAltura );
//   alert(calcularAreaTriangulo);
// }

// Círculo en html
 // Diámetro 
 function diametroCirculo(radio) {
  return radio * 2; 
}

  // PI
const PI = Math.PI;


// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

function calcularPerimetroCirculo() {
  const input =  document.getElementById("InputRadio");
  const valorRadio = input.value;

  const perimetro = perimetroCirculo(valorRadio);
  alert("El perímetro del círculos es: " + perimetro);
  }
function calcularAreaCirculo() {
  const input =  document.getElementById("InputRadio");
  const valorRadio = input.value;

  const area = areaCirculo(valorRadio);
  alert("El área del círculos es: " + area);

}


