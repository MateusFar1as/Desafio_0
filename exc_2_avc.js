function parNumMenorDif(nums, allow_duplicates, sorted_pairs, unique_pairs) {
  nums.sort((a, b) => a - b);
  menorDif = Infinity;
  result = [];

  for (let i = 0; i < nums.length; i++) {
    let dif = nums[i + 1] - nums[i];

    if (!allow_duplicates && nums[i + 1] === nums[i]) continue;

    if (dif < menorDif) {
      result = [[nums[i + 1], nums[i]]];
      menorDif = dif;
    } else if (dif == menorDif) {
      result.push([nums[i + 1], nums[i]]);
    }
  }

  if (sorted_pairs) {
    result = result.map(pair => pair.sort((a, b) => a - b));
  }

  if (unique_pairs) {
    result = Array.from(new Set(result.map(pair => JSON.stringify(pair.sort((a, b) => a - b)))), JSON.parse);
  }

  return result;
}
