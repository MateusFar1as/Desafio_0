function gerarSubconjuntos(nums) {
  let subconjuntos = [[]];

  for (const num of nums) {
    const tamanhoAtual = subconjuntos.length;
    for (let i = 0; i < tamanhoAtual; i++) {
      subconjuntos.push([...subconjuntos[i], num]);
    }
  }

  return subconjuntos;
}

console.log(gerarSubconjuntos([1,2]))
