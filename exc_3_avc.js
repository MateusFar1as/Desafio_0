function gerarSubconjuntos(nums, max_size, min_size, distinct_only, sort_subsets) {
  let subconjuntos = [[]];

  for (const num of nums) {
    const tamanhoAtual = subconjuntos.length;
    for (let i = 0; i < tamanhoAtual; i++) {
      subconjuntos.push([...subconjuntos[i], num]);
    }
  }

  subconjuntos = subconjuntos.filter(subconjunto =>
    subconjunto.length >= min_size && subconjunto.length <= max_size
  );

  if (distinct_only) {
    subconjuntos = subconjuntos.filter(subconjunto => {
      const set = new Set(subconjunto);
      return set.size === subconjunto.length;
    });
  }

  if (sort_subsets) {
    subconjuntos.forEach(subconjunto => {
      subconjunto.sort((a, b) => a - b);
    });

    subconjuntos.sort((a, b) => {
      if (a.length !== b.length) {
        return a.length - b.length;
      }

      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          return a[i] - b[i];
        }
      }

      return 0;
    });
  }
  return subconjuntos;
}
