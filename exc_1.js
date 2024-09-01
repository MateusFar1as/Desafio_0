function asteristico(n) {
  let str = "";
  let asteristicos = [];

  for (let i = 0; i < n; i++) {
    str += "*";
    asteristicos.push(str);
  }

  return asteristicos;
}
