function parNumMenorDif(nums) {
  nums.sort((a, b) => a - b);
  menorDif = Infinity;
  result = [];

  for (let i = 0; i < nums.length; i++) {
    let dif = nums[i + 1] - nums[i];

    if (dif < menorDif) {
      result = [[nums[i + 1], nums[i]]];
      menorDif = dif;
    } else if (dif == menorDif) {
      result.push([nums[i + 1], nums[i]]);
    }
  }

  return result;
}

console.log(parNumMenorDif([5,1,6,8,10,4]))
