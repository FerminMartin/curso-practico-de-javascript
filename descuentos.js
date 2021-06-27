// // const precioOriginal = 120;
// // const descuento = 18;

// function calcularPrecioConDescuento(precio, descuento) {
//   const porcentajePrecioConDescuento = 100 - descuento;
//   const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100

//   return precioConDescuento;
// }

// function onClickButtonPriceDiscount() {
//   const inputPrice = document.getElementById("InputPrice");
//   const priceValue = inputPrice.value;

//   const inputDiscount = document.getElementById("InputDiscount");
//   const discountValue = inputDiscount.value;

//   const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

//   const resultP = document.getElementById("ResultP");
//   resultP.innerText = "El precio con descuento es de " + precioConDescuento + "$";
// }





// // console.log({
// //   precioOriginal,
// //   descuento,
// //   porcentajePrecioConDescuento,
// //   precioConDescuento
// // });


// // Implementar descuentos con Cupones
// // Crear un array con cada uno de nuestros cupones
// // Cambiar el input de descuento en HTML por un input de cupones
// // Usaremos switch para aplicar un cierto porcentaje de descuento en nuestros productos dependiendo del cupón que se haya elegido al presionar el botón del formulario

// // Paso1: Crear un array de cupones
// const coupons = [
//   "JuanDC_es_Batman",
//   "pero_no_le_digas_a_nadie",
//   "es_un_secreto",
// ];

// // PAso2: Cambiar el input de descuento por uno de cupones y actualizamos nuestras referencias en el código JavasCript
// const inputCoupon = document.getElementById("InputCoupon");
// const couponValue = inputCoupon.nodeValue;

// // Paso3: Creamos una variable descuento y le asignamos un valor distinto con switch

// function onClickButtonPriceDiscount() {
//   const inputPrice = document.getElementById("InputPrice");
//   const priceValue = inputPrice.value;

//   const inputCoupon = document.getElementById("InputCoupon");
//   const couponValue = inputCoupon.value;

//   let descuento;

//   switch(couponValue) {
//     case "JuanDC_es_Batman":
//       descuento = 15;
//     break;
//     case "pero_no_le_digas_a_nadie":
//       descuento = 30;
//     break;
//     case "es_un_secreto":
//       descuento = 25;
//     break;
//   }

//   const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

//   const resultP = document.getElementById("ResultP");
//   resultP.innerText = "El precio con descuento es de " + precioConDescuento + "$";
// }

// // FINAL

// function calcularPrecioConDescuento(precio, descuento) {
//   const porcentajePrecioConDescuento = 100 - descuento;
//   const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100

//   return precioConDescuento;
// }

// const coupons = [
//   "JuanDC_es_Batman",
//   "pero_no_le_digas_a_nadie",
//   "es_un_secreto",
// ];

// function onClickButtonPriceDiscount() {
//   const inputPrice = document.getElementById("InputPrice");
//   const priceValue = inputPrice.value;

//   const inputCoupon = document.getElementById("InputCoupon");
//   const couponValue = inputCoupon.value;

//   let descuento;

//   switch(couponValue) {
//     case "JuanDC_es_Batman":
//       descuento = 15;
//     break;
//     case "pero_no_le_digas_a_nadie":
//       descuento = 30;
//     break;
//     case "es_un_secreto":
//       descuento = 25;
//     break;
//   }

//   const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

//   const resultP = document.getElementById("ResultP");
//   resultP.innerText = "El precio con descuento es de " + precioConDescuento + "$";
// }

// // FINAL MANEJANDO LOS ERRORES

// function calcularPrecioConDescuento(precio, descuento) {
//   const porcentajePrecioConDescuento = 100 - descuento;
//   const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100

//   return precioConDescuento;
// }

// const coupons = [
//   "JuanDC_es_Batman",
//   "pero_no_le_digas_a_nadie",
//   "es_un_secreto",
// ];

// function onClickButtonPriceDiscount() {
//   const inputPrice = document.getElementById("InputPrice");
//   const priceValue = inputPrice.value;

//   const inputCoupon = document.getElementById("InputCoupon");
//   const couponValue = inputCoupon.value;

//   let descuento;

//   if (!coupons.includes(couponValue)) {
//     alert("El cupón " + couponValue + " no es válido");
//   } else if (couponValue === "JuanDC_es_Batman") {
//     descuento = 15;
//   } else if (couponValue === "pero_no_le_digas_a_nadie") {
//     descuento = 30;
//   } else if (couponValue === "es_un_secreto") {
//     descuento = 25;
//   }

//   const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

//   const resultP = document.getElementById("ResultP");
//   resultP.innerText = "El precio con descuento es de " + precioConDescuento + "$";
// }

// // FINAL MANEJANDO LOS ERRORES CON ARRAYS DE OBJETOS Para ganar legibilidad y colocar el nombre y el descuento en el mismo lugar del cupón

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100

  return precioConDescuento;
}


function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  const coupons = [
    {
      name: "JuanDC_es_Batman",
      discount: 15,
    },
    {
      name: "pero_no_le_digas_a_nadie",
      discount: 30,
    },
    {
      name: "es_un_secreto",
      discount: 25,
    }
  ];

  const isCouponValueValid = function(coupons) {
    return coupons.name === couponValue;
  };

  const userCoupon = coupons.find(isCouponValueValid);

  if (!userCoupon) {
    alert("El cupón " + userCoupon + " no es válido")
  } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es de " + precioConDescuento + "$";   
  }

}