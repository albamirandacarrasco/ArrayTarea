//Creativa 3 Aplana arrays.
const ropa = [
    ["Camiseta", "Pantalón", "Zapatos"],
    ["Sombrero", "Bufanda"],
    ["Chaqueta", "Guantes", "Zapatos"]
  ];

  const ropaAplanada = ropa.flat();
  console.log(ropaAplanada);

  const ropaAplanadaDos = ropa.flatMap(ropa => ropa);
  console.log(ropaAplanadaDos);