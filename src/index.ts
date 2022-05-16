let numeroDeseado: number = Number(
  prompt("Ingrese el número que desea verificar si es mayor o no a 20")
);

if (numeroDeseado > 20) {
  console.log("El número es mayor a 20:", numeroDeseado);
} else {
  console.log("El número es menor o igual a 20:", numeroDeseado);
}
